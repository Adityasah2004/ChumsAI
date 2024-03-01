import React, { useState, useEffect } from 'react';
import MediaRecorder from 'react-media-recorder';
import io from 'socket.io-client';
import localStorageUtils from '../Hooks/localStorageUtils';

export function startRecording(mediaRecorder, setRecordedChunks) {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
            if (mediaRecorder) {
                mediaRecorder.start();
                sendAudioChunks(mediaRecorder, setRecordedChunks);
            }
        })
        .catch((error) => {
            console.error('Error accessing microphone:', error);
            alert('Error accessing microphone. Please make sure a microphone is connected and enabled.');
        });
}

export function stopRecording(mediaRecorder) {
    if (mediaRecorder) {
        mediaRecorder.stop();
    }
}

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

    // const startRecording = () => {
    //     navigator.mediaDevices.getUserMedia({ audio: true })
    //         .then((stream) => {
    //             if (mediaRecorder) {
    //                 mediaRecorder.start();
    //                 sendAudioChunks();
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error accessing microphone:', error);
    //             alert('Error accessing microphone. Please make sure a microphone is connected and enabled.');
    //         });
    // };

    // const stopRecording = () => {
    //     if (mediaRecorder) {
    //         mediaRecorder.stop();
    //     }
    // };

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
        const audioBlob = new Blob(recordedChunks, { type: 'audio/mp3' });

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
        <>
        </>
    );
}

export default VoiceCall;
