import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiSend } from 'react-icons/fi';
import { setMessages, addMessage } from '../actions/messages';
import localStorageUtils from '../Hooks/localStorageUtils';

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  const userId = localStorageUtils.getUserId();
  const accessToken = localStorageUtils.getAccessToken();

  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  // Fetch messages from the backend and dispatch to Redux store
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

      // Check if data is an array before updating the state
      if (Array.isArray(data)) {
        // Dispatch the messages to the Redux store
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


  // Send message to the backend and dispatch to Redux store
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

    // Dispatch the new message to the Redux store
    dispatch(addMessage(data));
    setNewMessage("");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

console.log(messages);

  return (
    <div className="flex-1 flex flex-col justify-between bg-gray-100 rounded-lg overflow-hidden">
      <div className="border p-4 h-4/5 overflow-y-auto rounded-t-lg">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4 text-black">
            <p className="text-black mb-1">Content: {msg}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center p-4 rounded-b-lg">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 mr-4 p-2 border rounded-l-lg"
          placeholder="Type your message..."
        />

        <button
          className="text-white bg-blue-500 p-2 rounded-r-lg"
          onClick={handleSendMessage}
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
