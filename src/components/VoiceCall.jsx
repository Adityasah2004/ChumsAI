// import React, { useState, useEffect } from 'react';
// import Peer from 'simple-peer';
// import localStorageUtils from '../Hooks/localStorageUtils';

// export function startRecording(mediaRecorder) {
//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then((stream) => {
//       if (mediaRecorder) {
//         mediaRecorder.start();
//         sendAudioChunks(mediaRecorder);
//       }
//     })
//     .catch((error) => {
//       console.error('Error accessing microphone:', error);
//       alert('Error accessing microphone. Please make sure a microphone is connected and enabled.');
//     });
// }

// export function stopRecording(mediaRecorder) {
//   if (mediaRecorder) {
//     mediaRecorder.stop();
//   }
// }

// function VoiceCall() {
//   const [peer, setPeer] = useState(null);
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     const initializePeer = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
//         const newPeer = new Peer({
//           initiator: true,
//           trickle: false,
//           stream
//         });

//         newPeer.on('signal', signalData => {
//           // Send signaling data to backend for transmission to the AI companion
//           sendSignalData(signalData);
//         });

//         newPeer.on('connect', () => {
//           console.log('Peer connected');
//           setIsConnected(true);
//         });

//         newPeer.on('stream', stream => {
//           console.log('Received remote stream');
//           // You can handle the remote audio stream here, e.g., play it through an <audio> element
//         });

//         setPeer(newPeer);
//       } catch (error) {
//         console.error('Error accessing microphone:', error);
//         alert('Error accessing microphone. Please make sure a microphone is connected and enabled.');
//       }
//     };

//     initializePeer();

//     // Clean up function
//     return () => {
//       if (peer) {
//         peer.destroy();
//       }
//     };
//   }, []); // Empty dependency array to ensure useEffect runs only once

//   const sendSignalData = async (signalData) => {
//     // Send signaling data to backend
//     const accessToken = localStorageUtils.getAccessToken();

//     try {
//       const response = await fetch('https://apiv1-wsuwijidsa-el.a.run.app/message/VoiceCall/offer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${accessToken}`
//         },
//         body: JSON.stringify({
//           signalData,
//           companionId: '65bcf34a618d69838b7ac6d3' // Adjust companion ID
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       // Handle response if needed
//     } catch (error) {
//       console.error('There was a problem with the request:', error);
//     }
//   };

//   return (
//     <>
      
//     </>
//   );
// }

// export default VoiceCall;
