import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserMessage, addAIMessage } from '../redux/action';
import localStorageUtils from '../Hooks/localStorageUtils';
import Message from '../components/Message';
import '../styles/Chat.css';
import Spline from "@splinetool/react-spline";
import EmojiPicker from 'emoji-picker-react';
import { Avatar1 } from '../components/Avatar';
import { Link } from 'react-router-dom';
import { startRecording, stopRecording } from '../components/VoiceCall';

const Chat = () => {

    const dispatch = useDispatch();

    const [voiceCall, setVoiceCall] = useState(false);
    const [camera, setCamera] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);
    const [newMessage, setNewMessage] = useState('');
   // const [aimessage ,setaimessage] = usestate('');
    // const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
    const [intOpt, setInpOpt] = useState(false);
    const [settings, setSettings] = useState(false);
    const [background, setBackground] = useState(0);
    const userId = localStorageUtils.getUserId();
    const accessToken = localStorageUtils.getAccessToken();

    const userMessages = useSelector(state => state.messages.userMessages);
    const aiMessages = useSelector(state => state.messages.aiMessages);

    const [messages, setMessages] = useState([]);

    // Fetch messages from the backend and dispatch to Redux store
    //     const fetchMessages = async () => {
    //         try {
    //             const apiUrl = `http://localhost:8000/message/Chat`;
    //             const bearerToken = accessToken;

    //             const requestOptions = {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${bearerToken}`,
    //                 },
    //             };

    //             const response = await fetch(apiUrl, requestOptions);

    //             if (!response.ok) {
    //                 throw new Error(`Failed to fetch messages. Status: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             console.log("this is me respponse",response);
    //             console.log("Fetched messages from the backend:", data);

    //             // Check if data is an array before updating the state
    //             if (Array.isArray(data)) {
    //                 // Dispatch the messages to the Redux store
    //                 // dispatch(addAIMessage(data.response));
    //                 // dispatch(addUserMessage(data.user));

    //             } else {
    //                 console.error("Received non-array data from the backend:", data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching messages:", error);
    //         }
    //     };
    

    // console.log("this is ai messagea", aiMessages);

    // Send message to the backend and dispatch to Redux store
    const handleSendMessage = async (e) => {
        // check if the value of newMessage is empty
        if (newMessage.trim() === "") {
            return;
        }
        e.preventDefault();
        // dispatch(userMessages(newMessage));
        document.getElementsByName('input-chat')[0].value = "";
        try {
            const apiUrl = `http://localhost:8000/message/Chat`;
            const bearerToken = accessToken;

            const requestBody = {
                Transcription_language_code: "en-US",
                role: "string",
                content: newMessage,
                createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }),
                updatedAt: "string",
                companionId: "65bcf34a618d69838b7ac6d3",
                translation_language_code: "en",
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
            console.log(response)

            if (!response.ok) {
                throw new Error(`Failed to send message. Status: ${response.status}`);
            }

            const data = await response.json();
            // const createdAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
            // get current time
            // setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
            console.log("Received response from the backend:", data);
            console.log("Response Data Structure:", JSON.stringify(data, null ,2));
            dispatch(addUserMessage(data.user));
            dispatch(addAIMessage(data.response));
            // Dispatch the new message to the Redux store
            // dispatch(addUserMessage(requestBody.content));
            setNewMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
        // fetchMessages();
    };

    console.log("this is users message" ,userMessages);

    useEffect(() => {
        // Combine userMessages and aiMessages into a single array
        const combinedMessages = [];
        for (let i = 0; i < Math.max(userMessages.length, aiMessages.length); i++) {
            if (userMessages[i]) {
                combinedMessages.push({ message: userMessages[i], sender: 'user' });
            }
            if (aiMessages[i]) {
                combinedMessages.push({ message: aiMessages[i], sender: 'ai' });
            }
        }
        setMessages(combinedMessages);
        const chatMsgArea = document.querySelector('.chat-msg-area');
        chatMsgArea.scrollTop = chatMsgArea.scrollHeight;
        // console.log("this is combined message",combinedMessages);
    }, [userMessages, aiMessages]);

    const handleInpOpt = () => {
        setInpOpt(!intOpt);
    }

    const handleVoiceCall = () => {
        startRecording();
        setVoiceCall(true);
        setVideoCall(false);
        setInpOpt(false);
        setSettings(false);
        setShowEmoji(false);
    }

    const [videoCall, setVideoCall] = useState(false);

    const handleVideoCall = () => {
        setVideoCall(true);
        setVoiceCall(false);
        setInpOpt(false);
        setSettings(false);
        setShowEmoji(false);

        if (camera === true) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true })
                .then((stream) => {
                    const video = document.getElementById('user-video');
                    if (video) {
                        video.srcObject = stream;
                        video.onloadedmetadata = () => {
                            video.play();
                        };
                    }
                })
                .catch((err) => {
                    console.error('Error accessing the camera:', err);
                    if (err.name === "NotAllowedError") {
                        alert("You have denied access to the camera. Please allow access to the camera to start the video call.");
                    }
                });
        } else {
            // only audio call
            navigator.mediaDevices.getUserMedia({ video: false, audio: true })
                .then((stream) => {
                    const video = document.getElementById('user-video');
                    if (video) {
                        video.srcObject = stream;
                        video.onloadedmetadata = () => {
                            video.play();
                        };
                    }
                })
                .catch((err) => {
                    console.error('Error accessing the camera:', err);
                    if (err.name === "NotAllowedError") {
                        alert("You have denied access to the camera. Please allow access to the camera to start the video call.");
                    }
                });
        }
    }

    const handleCamera = () => {

        // if camera is false, stop the video stream
        if (camera === true) {
            setCamera(false);
            const video = document.getElementById('user-video');
            const stream = video.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            video.srcObject = null;

            // audio on if video is off
            navigator.mediaDevices.getUserMedia({ video: false, audio: true })
                .then((stream) => {
                    const video = document.getElementById('user-video');
                    if (video) {
                        video.srcObject = stream;
                        video.onloadedmetadata = () => {
                            video.play();
                        };
                    }
                })
        } else {
            setCamera(true);
            // ask for permission to use the camera and if granted, start the video call
            navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true })
                .then((stream) => {
                    const video = document.getElementById('user-video');
                    if (video) {
                        video.srcObject = stream;
                        video.onloadedmetadata = () => {
                            video.play();
                        };
                    }
                })
                .catch((err) => {
                    console.error('Error accessing the camera:', err);
                    if (err.name === "NotAllowedError") {
                        alert("You have denied access to the camera. Please allow access to the camera to start the video call.");
                    }
                });
        }
    }

    const handleEndVideoCall = () => {
        setVideoCall(false);

        // stop the video stream
        const video = document.getElementById('user-video');
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
        video.srcObject = null;
        setCamera(false);

        // audio off if video call is ended
        navigator.mediaDevices.getUserMedia({ video: false, audio: false })
            .then((stream) => {
                const video = document.getElementById('user-video');
                if (video) {
                    video.srcObject = stream;
                    video.onloadedmetadata = () => {
                        video.play();
                    };
                }
            })
    }

    const handleEndVoiceCall = () => {
        stopRecording();
        setVoiceCall(false);
        setCamera(false);
        setVideoCall(false);
    }

    const handleEmoji = () => {
        setShowEmoji(!showEmoji);
    }

    let modelClassesVoiceCall = "";
    let modelClassesVideoCall = "";

    if (voiceCall) {
        modelClassesVoiceCall = "sm-voice-cen max-scrn-voice-call";
        modelClassesVideoCall = "";
    } else if (videoCall) {
        modelClassesVoiceCall = "";
        modelClassesVideoCall = "sm-video-cen max-scrn-video-call";
    } else {
        modelClassesVoiceCall = "";
        modelClassesVideoCall = "";
    }

    const handleEmojiInput = (emojiObject) => {
        setNewMessage(newMessage + emojiObject.emoji);
    }

    const handleSettings = () => {
        setSettings(!settings);
    }

    const handleBackgroundChange = () => {
        if (background === 0) {
            setBackground(1);
        } else if (background === 1) {
            setBackground(2);
        } else if (background === 2) {
            setBackground(3);
        } else {
            setBackground(0);
        }
    }

    return (
        <div className={voiceCall || videoCall ? "chat-main-body chat-main-body-voice-call" : "chat-main-body"}>
            <div className={`body flex h-screen justify-center ${modelClassesVoiceCall} ${modelClassesVideoCall}`}>
                <Avatar1
                // companionId={companionId} 
                />
            </div>
            {/* <aside className=''> */}
            {/* <img src="./src/assets/AI avatar placeholder.png" alt="avatar" className="h-auto w-full" /> */}
            {/* <iframe className={`body flex basis-1/2 self-center justify-center ${modelClassesVoiceCall} ${modelClassesVideoCall}`} src='https://my.spline.design/untitled-c5b03b378e7ce3125486f2d1db14c585/' frameBorder='0'></iframe> */}
            {/* </aside> */}
            {/* <iframe src='https://my.spline.design/untitled-c5b03b378e7ce3125486f2d1db14c585/' frameBorder='0' width='150%' height='100%'>
            </iframe> */}
            {/* <div className="sketchfab-embed-wrapper absolute h-full w-full"> <iframe className='h-full w-full' title="Vatican royaume d'or" frameBorder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autostart; xr-spatial-tracking" src="https://sketchfab.com/models/8434d5d906ac4b84ad403e1b66f84668/embed?autostart=1&camera=0&ui_stop=0&ui_controls=0"> </iframe></div> */}
            {/* <Spline className='backg' scene="https://prod.spline.design/dCtpCuY7cgegAOnu/scene.splinecode" /> */}
            {background === 0 && <Spline className='backg' scene="https://prod.spline.design/dCtpCuY7cgegAOnu/scene.splinecode" />}
            {background === 1 && <Spline className='backg' scene="https://prod.spline.design/pIkx9hV8t-YeBdBp/scene.splinecode" />}
            {background === 2 && <Spline className='backg' scene="https://prod.spline.design/1b7hKCxLGIA7p2cb/scene.splinecode" />}
            {background === 3 && <Spline className='backg' scene="https://prod.spline.design/DSoIdkwtCPiBmGko/scene.splinecode" />}

            {voiceCall && <img src="/voiceWaves.gif" className='rounded-full absolute z-20' alt="Audio waves" />}
            <div className={voiceCall || videoCall ? "hidden" : "chat-div relative"}>
                <menu className='flex text-white pl-4 pt-1 justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <Link to="/dashboard" className='cursor-pointer flex' title='Back to Dashboard'>
                            <span className="material-symbols-outlined" >
                                arrow_back
                            </span>
                        </Link>
                        <span className='font-semibold text-xl'>
                            AI Friend
                        </span>
                    </div>
                    <button className='flex' title='Settings' onClick={handleSettings} style={settings ? { rotate: "90deg", transition: "all 0.4s ease-in-out" } : { rotate: "0deg", transition: "all 0.4s ease-in-out" }}>
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                    </button>
                    {settings &&
                        <div className='settings absolute bg-black bg-opacity-75 p-4 text-white z-30 rounded-lg right-5 top-12 flex flex-col gap-2'>
                            <button className='hover:bg-white hover:text-black rounded-lg p-2 transition-all'>
                                <p className='flex items-center gap-2'>
                                    <span className="material-symbols-outlined">
                                        settings
                                    </span>
                                    Settings
                                </p>
                            </button>
                            <button className='hover:bg-white hover:text-black rounded-lg p-2 transition-all' onClick={handleBackgroundChange}>
                                <p className='flex items-center gap-2'>
                                    <span className="material-symbols-outlined">
                                        change_circle
                                    </span>
                                    Change background
                                </p>
                            </button>
                        </div>
                    }
                </menu>
                <div className="chat-msg-area p-4 h-full flex flex-col gap-2 justify-end overflow-y-auto">
                    {/* {userMessages.map((msg, index) => (
                        <Message time={msg[2]} message={msg[0]} key={index} name={msg[1] === 'user' && "User"} cName={`${msg[1] === 'user' && 'user-message'}`} />
                    ))}
                    {aiMessages.map((msg, index) => (
                        <Message message={msg[0]} key={index} name={msg[1] === 'ai' && "AI Avatar"} cName={`${msg[1] === 'ai' && 'ai-message'}`} />
                    ))} */}
                    {messages.map((msg, index) => (
                        <Message
                            time={msg.time} // Ensure you have a time property in your message objects
                            message={msg.message[0]}
                            key={index}
                            name={msg.sender === 'user' ? 'User' : 'AI Avatar'}
                            cName={`${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
                            
                        />
                    ))}
                </div>
                {showEmoji &&
                    <div className='emoji-tag' >
                        <EmojiPicker style={{ backgroundColor: "rgba(0,0,0,0.6)" }} theme='dark' onEmojiClick={(emoji) => handleEmojiInput(emoji)} searchPlaceholder="Search the emojis here" suggestedEmojisMode="recent" />
                    </div>
                }
                <div className="flex py-4 justify-between gap-1 relative">
                    <div className='bg-white rounded-full flex items-center justify-center flex-1 px-4 py-3 gap-2'>
                        <span className="material-symbols-outlined">
                            chat_bubble
                        </span>
                        <form className="flex flex-1" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="flex flex-1 p-3 h-4 rounded-full border-none border-transparent focus:ring-0 bg-transparent text-black placeholder-gray-400 focus:outline-none"
                                placeholder="Type your message..."
                                title='Type your message'
                                name='input-chat'
                            />
                        </form>

                        <div className='input-options'>
                            <button className='flex' onClick={handleEmoji} title='Emoji'>
                                <span className="material-symbols-outlined">
                                    mood
                                </span>
                            </button>
                            <button className='flex' onClick={handleVoiceCall} title='Voice Call'>
                                <span className="material-symbols-outlined">
                                    call
                                </span>
                            </button>
                            <button className='flex' onClick={handleVideoCall} title='Video Call'>
                                <span className="material-symbols-outlined">
                                    video_call
                                </span>
                            </button>
                        </div>
                        <button className="input-opt-toggle-btn" onClick={handleInpOpt}>
                            <span className="material-symbols-outlined self-center flex">
                                more_vert
                            </span>
                        </button>
                    </div>
                    {
                        intOpt &&
                        <div className='inp-opts'>
                            <button className='flex' onClick={handleVoiceCall}>
                                <span className="material-symbols-outlined">
                                    call
                                </span>
                            </button>
                            <button className='flex' onClick={handleVideoCall}>
                                <span className="material-symbols-outlined">
                                    video_call
                                </span>
                            </button>
                        </div>
                    }
                    <button className='' onClick={handleSendMessage} title='Send'>
                        <span className="material-symbols-outlined bg-blue-600 rounded-full flex items-center justify-center p-3 text-white hover:bg-opacity-90">
                            send
                        </span>
                    </button>
                </div>

            </div>
            {
                voiceCall &&
                <div className="flex justify-between z-20  p-3 gap-5 rounded-full absolute bottom-10">
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
                <div className="flex justify-between z-20  p-3 gap-5 rounded-full absolute bottom-10">
                    <button className="flex flex-col items-center bg-red-700 p-1 text-white rounded-full w-40 justify-center" onClick={handleEndVideoCall}>
                        <span className="material-symbols-outlined">
                            call_end
                        </span>
                        End Call
                    </button>
                    <button className='flex flex-col items-center bg-sky-700 p-1 text-white rounded-full w-40 justify-center' onClick={handleCamera}>
                        <span className="material-symbols-outlined">
                            {camera ? "videocam_off" : "videocam"}
                        </span>
                        Camera {camera ? "Off" : "On"}
                    </button>
                </div>
            }

            <video id='user-video' className={videoCall && camera ? "absolute bottom-0 right-5" : "hidden"} autoPlay playsInline></video>

            {
                videoCall && camera === false &&
                <div id='user-prof'>
                    <span className="material-symbols-outlined text-white z-50">
                        person
                    </span>
                </div>
            }
        </div>
    );
};

export default Chat;