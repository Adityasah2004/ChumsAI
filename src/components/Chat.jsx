import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages, addMessage } from '../actions/messages';
import localStorageUtils from '../Hooks/localStorageUtils';
import Message from '../components/Message';
import '../styles/Chat.css';
import Spline from "@splinetool/react-spline";
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
    // call states
    const [voiceCall, setVoiceCall] = useState(false);
    const [videoCall, setVideoCall] = useState(false);

    // emoji states
    const [showEmoji, setShowEmoji] = useState(false);

    // Local state to store the new message
    const [newMessage, setNewMessage] = useState('');

    // Local state to store the current time
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));

    // Local state to store the input options
    const [intOpt, setInpOpt] = useState(false);

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
            // get current time
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
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

    const handleInpOpt = () => {
        setInpOpt(!intOpt);
    }

    const handleVoiceCall = () => {
        setVoiceCall(true);
        setVideoCall(false);
    }

    const handleVideoCall = () => {
        setVideoCall(true);
        setVoiceCall(false);
    }

    const handleEndVoiceCall = () => {
        setVoiceCall(false);
    }

    const handleEndVideoCall = () => {
        setVideoCall(false);
    }

    const handleEmoji = () => {
        setShowEmoji(!showEmoji);
    }

    let modelClassesVoiceCall = "";
    let modelClassesVideoCall = "";

    if(voiceCall){
        modelClassesVoiceCall = "sm-voice-cen max-scrn-voice-call";
        modelClassesVideoCall = "";
    } else if (videoCall){
        modelClassesVoiceCall = "";
        modelClassesVideoCall = "sm-video-cen max-scrn-video-call";
    } else {
        modelClassesVoiceCall = "";
        modelClassesVideoCall = "";
    }

    const handleEmojiInput = (emojiObject) => {
        setNewMessage(newMessage + emojiObject.emoji);
    }

    return (
        <div className={voiceCall || videoCall ? "chat-main-body chat-main-body-voice-call" : "chat-main-body"}>
            {/* <Avatar/> */}
            {/* <aside className=''> */}
            {/* <img src="./src/assets/AI avatar placeholder.png" alt="avatar" className="h-auto w-full" /> */}
            <iframe className={`body flex basis-1/2 self-center justify-center ${modelClassesVoiceCall} ${modelClassesVideoCall}`} src='https://my.spline.design/untitled-c5b03b378e7ce3125486f2d1db14c585/' frameBorder='0'></iframe>
            {/* </aside> */}
            {/* <iframe src='https://my.spline.design/untitled-c5b03b378e7ce3125486f2d1db14c585/' frameBorder='0' width='150%' height='100%'>
            </iframe> */}
            {/* <div className="sketchfab-embed-wrapper absolute h-full w-full"> <iframe className='h-full w-full' title="Vatican royaume d'or" frameBorder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autostart; xr-spatial-tracking" src="https://sketchfab.com/models/8434d5d906ac4b84ad403e1b66f84668/embed?autostart=1&camera=0&ui_stop=0&ui_controls=0"> </iframe></div> */}

            <Spline className='backg' scene="https://prod.spline.design/dCtpCuY7cgegAOnu/scene.splinecode" />
            {voiceCall && <img src="/voiceWaves.gif" className='rounded-full absolute z-20' alt="" />}
            <div className={voiceCall || videoCall ? "hidden" : "chat-div"}>
                <menu className='flex text-white px-4 justify-between'>
                    <span>
                        Ai Friend
                    </span>
                    <button>
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                    </button>
                </menu>
                <div className="p-4 overflow-y-auto h-full flex flex-col gap-2">
                    {messages.map((msg, index) => (
                        <div key={index} className="mb-4 text-black rounded-r-md rounded-bl-md bg-white h-auto">
                            <p className="text-black mb-1">Content: {msg}</p>
                        </div>
                    ))}
                    <Message time={currentTime} />
                </div>
                { showEmoji && 
                    <div className='emoji-tag' >
                        <EmojiPicker searchDisabled="true" style={{backgroundColor:"rgba(0,0,0,0.5)"}} theme='dark' onEmojiClick={(emoji) => handleEmojiInput(emoji)} emojiStyle='apple' searchPlaceholder="Search the emojis here" suggestedEmojisMode="recent" />
                    </div>
                }
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
                            <button className='flex' onClick={handleEmoji}>
                                <span className="material-symbols-outlined">
                                    mood
                                </span>
                            </button>
                            <button className='flex' onClick={handleVoiceCall}>
                                <span className="material-symbols-outlined">
                                    call
                                </span>
                            </button>
                            <button className='flex' onClick={handleVideoCall}>
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
                            <button className='flex' onClick={handleVoiceCall}>
                                <span className="material-symbols-outlined">
                                    call
                                </span>
                            </button>
                            <button className='flex' onClick={handleVideoCall}>
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
                
            </div>
            {
                voiceCall &&
                <div className="flex justify-between z-10  p-3 gap-5 rounded-full absolute bottom-10">
                    <button className="flex flex-col items-center bg-red-700 pb-1 text-white rounded-full w-40 justify-center" onClick={handleEndVoiceCall}>
                        <span className="material-symbols-outlined">
                            call_end
                        </span>
                        End Call
                    </button>
                </div>
            }
            {
                videoCall &&
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