import React, { useState, useEffect } from 'react';
import MediaRecorder from 'react-media-recorder';
import io from 'socket.io-client';
import localStorageUtils from '../Hooks/localStorageUtils';

function VoiceCall() {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (event) => setRecordedChunks([...recordedChunks, event.data]);
        setMediaRecorder(recorder);
      })
      .catch((error) => console.error('Error accessing microphone:', error));
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      sendAudioChunks();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  // Construct WebSocket connection options with access token
  const accessToken = localStorageUtils.getAccessToken(); // Assuming you have a function to get access token
  const socketOptions = {
    query: {
      token: accessToken
    }
  };

  const socket = io('http://localhost:8000/message/VoiceCall', socketOptions);

  const sendAudioChunks = () => {
    // Combine recorded chunks into a single Blob
    const audioBlob = new Blob(recordedChunks, { type: 'audio/webm' });
  
    // Construct FormData object
    const formData = new FormData();
    formData.append('file', audioBlob);
    formData.append('Transcription_language_code', 'ja-JP');
    formData.append('companionId', '65bcf34a618d69838b7ac6d3');
    formData.append('translation_language_code', 'ja');
  
    // Send FormData to server through WebSocket or any other suitable method
    fetch('http://localhost:8000/message/VoiceCall', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle response data if needed
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the request:', error);
    });
  
    // Clear recorded chunks for next recording
    setRecordedChunks([]);
  };
  

  useEffect(() => {
    const audioContext = new AudioContext();

    socket.on('voice-response', (audioData) => {
      const audioBuffer = audioContext.decodeAudioData(audioData);
      const audioSource = audioContext.createBufferSource();
      audioSource.buffer = audioBuffer;
      audioSource.connect(audioContext.destination);
      audioSource.start();
    });

    return () => {
      audioContext.close();
    };
  }, []);

  return (
    <div>
      <div className="header">
        <h2>Voice Call</h2>
      </div>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
    </div>
  );
}

export default VoiceCall;
