import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages, addMessage } from '../actions/messages';
import localStorageUtils from '../Hooks/localStorageUtils';
import Message from '../components/Message';
import Spline from "@splinetool/react-spline";
import "../styles/Chat.css";

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  const [voiceCall, setVoiceCall] = useState(false);
  const [videoCall, setVideoCall] = useState(false);
  const userId = localStorageUtils.getUserId();
  const accessToken = localStorageUtils.getAccessToken();
  const receivedMessages = useSelector((state) => state.messages.messages.receivedMessages);
  const sentMessages = useSelector((state) => state.messages.messages.sentMessages);
  const messages = useSelector((state) => state.messages.messages);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
  const [intOpt, setInpOpt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const apiUrl = "http://localhost:8000/message/Chat";
        const bearerToken = accessToken;
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bearerToken}`,
          },
        };
        const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) {
          throw new Error(`Failed to fetch messages. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched messages from the backend:", data);
        if (Array.isArray(data)) {
          dispatch(setMessages(data));
        } else {
          console.error("Received non-array data from the backend:", data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [accessToken, dispatch]);

  const handleSendMessage = async () => {
    try {
      const apiUrl = "http://localhost:8000/message/Chat";
      const bearerToken = accessToken;
      const requestBody = {
        role: "string",
        content: newMessage,
        createdAt: "string",
        updatedAt: "string",
        companionId: "65ae5f44121d54346d37ec1c",
        userId: userId,
      };
      console.log("Sending message to the backend:", requestBody);
      console.log("Request Body Structure:", JSON.stringify(requestBody, null, 2));
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(requestBody),
      };
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error(`Failed to send message. Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Received response from the backend:", data);
      console.log("Response Data Structure:", JSON.stringify(data, null, 2));
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
      dispatch(addMessage(data));
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleInpOpt = () => {
    setInpOpt(!intOpt);
  };

  const handleVoiceCall = () => {
    setVoiceCall(true);
    setVideoCall(false);
  };

  const handleEndVoiceCall = () => {
    setVoiceCall(false);
  };

  const handleEndVideoCall = () => {
    setVideoCall(false);
  };

  console.log(receivedMessages);
  console.log(sentMessages);

  return (
    <div className="flex-1 flex flex-col justify-between bg-gray-100 rounded-lg overflow-hidden">
      <div className="border p-4 h-4/5 overflow-y-auto rounded-t-lg">
        {/* Render received messages */}
        {receivedMessages.map((msg, index) => (
          <div key={index} className="mb-4 text-black">
            <p className="text-black mb-1">Received Content: {msg}</p>
          </div>
        ))}
        {/* Render sent messages */}
        {sentMessages.map((msg, index) => (
          <div key={index} className="mb-4 text-black">
            <p className="text-black mb-1">Sent Content: {msg}</p>
          </div>
        ))}
      </div>
      <div className="flex p-4 justify-between gap-1">
        <div className='bg-white rounded-full flex items-center justify-center flex-1 px-4 py-3 gap-2'>
          <span className="material-symbols-outlined">
            chat_bubble
          </span>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex flex-1 p-3 h-4 rounded-full border-none border-transparent focus:ring-0 bg-transparent text-black placeholder-gray-400 focus:outline-none"
            placeholder="Type your message..."
          />
          <div className='input-options'>
            <button className='flex'>
              <span className="material-symbols-outlined">
                mood
              </span>
            </button>
            <button className='flex' onClick={handleVoiceCall}>
              <span className="material-symbols-outlined">
                call
              </span>
            </button>
            <button className='flex'>
              <span className="material-symbols-outlined">
                videocam
              </span>
            </button>
          </div>
          <button className="input-opt-toggle-btn" onClick={handleInpOpt}>
            <span className="material-symbols-outlined self-center flex">
              more_vert
            </span>
          </button>
        </div>
        {intOpt &&
          <div className='inp-opts'>
            <button className='flex'>
              <span className="material-symbols-outlined">
                mood
              </span>
            </button>
            <button className='flex' onClick={handleVoiceCall}>
              <span className="material-symbols-outlined">
                call
              </span>
            </button>
            <button className='flex'>
              <span className="material-symbols-outlined">
                videocam
              </span>
            </button>
          </div>}
        <button className='' onClick={handleSendMessage}>
          <span className="material-symbols-outlined bg-blue-600 rounded-full flex items-center justify-center p-3 text-white hover:bg-opacity-95">
            send
          </span>
        </button>
      </div>
      {voiceCall &&
        <div className="flex justify-between z-10  p-3 gap-5 rounded-full absolute bottom-10">
          <button className="flex flex-col items-center bg-red-700 pb-1 text-white rounded-full w-40 justify-center" onClick={handleEndVoiceCall}>
            <span className="material-symbols-outlined">
              call_end
            </span>
            End Call
          </button>
        </div>
      }
      {videoCall &&
        <div className="flex justify-between z-10  p-3 gap-5 rounded-full absolute bottom-10">
          <button className="flex flex-col items-center bg-red-700 pb-1 text-white rounded-full w-40 justify-center" onClick={handleEndVideoCall}>
            <span className="material-symbols-outlined">
              call_end
            </span>
            End Call
          </button>
        </div>
      }
    </div>
  );
};

export default Chat;
