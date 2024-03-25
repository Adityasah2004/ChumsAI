import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserMessage, addAIMessage, deleteMessage } from '../redux/action';
import localStorageUtils from '../Hooks/localStorageUtils';
import Message from '../components/Message';
import '../styles/Chat.css';
import Spline from "@splinetool/react-spline";
import EmojiPicker from 'emoji-picker-react';
import { Avatar1 } from '../components/Avatar';
// const {Avatar1} = lazy(() => import('../components/Avatar'));
import { Link } from 'react-router-dom';
// import avtPlaceholder from '../assets/AI avatar placeholder.png';
import RenderOnViewportEntry from '../components/RenderOnViewportEntry';
// import MyGLBViewer from '../components/TestAvatar';
// import { startRecording, stopRecording } from '../components/VoiceCall';


const Chat = () => {
    const userId = localStorageUtils.getUserId();
    const bearerToken = localStorageUtils.getAccessToken();
    const companionId = localStorageUtils.getCompanionId();
    const glbUrl = localStorageUtils.getGlbLink();

    const dispatch = useDispatch();
    const [companionDetails, setCompanionDetails] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [showEmoji, setShowEmoji] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const [comingSoon, setComingSoon] = useState(false);
    const [avatarProcess, setAvatarProcess] = useState(true);
    const [online, setOnline] = useState(false);
    const [typing, setTyping] = useState(false);
    // const [aimessage ,setaimessage] = usestate('');
    const [intOpt, setInpOpt] = useState(false);
    const [settings, setSettings] = useState(false);
    const [background, setBackground] = useState(0);

    const userMessages = useSelector(state => state.messages.userMessages);
    const aiMessages = useSelector(state => state.messages.aiMessages);

    const [messages, setMessages] = useState([]);

    if (!bearerToken || !userId) {
        handleLogout();
    }

    const handleLogout = () => {
        alert('Logged out successfully!');
        localStorage.removeItem('userId');
        history.push('/');
    };

    console.log("bearer token", bearerToken);

    const fetchCompanionDetails = async () => {
        try {
            const apiUrl = `https://apiv1-wsuwijidsa-el.a.run.app/companion/${companionId}`;
            // const bearerToken = ;
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearerToken}`,
                }
            };
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch details. Status: ${response.status}`);
            }

            const data = await response.json();

            setCompanionDetails(data);

        } catch (error) {
            console.error("Error fetching details:", error);
        }
    };

    const fetchMessages = async () => {
        // console.log("this is user id in fetchmessages", userId);
        try {
            const response = await fetch(`https://apiv1-wsuwijidsa-el.a.run.app/message/get_all_character_messages?user_id=${userId}&character_id=${companionId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }

            const data = await response.json();
            data.map(message => {
                console.log("this is message", message);
                if (message.role === "user") {

                    console.log("this is user message", message.id);
                    dispatch(addUserMessage(message.content, message.timestamp, message.id, message.role));
                }
                if (message.role === "Companion") {
                    // console.log("this is ai message", message.companion);
                    dispatch(addAIMessage(message.content, message.timestamp, message.id, message.role));
                }
            });

            console.log("Fetched messages from the database:", data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };


    const fetchUserDetails = async () => {
        console.log("this is user id", userId);
        try {
            const apiUrl = `https://apiv1-wsuwijidsa-el.a.run.app/user/${userId}`;
            // const bearerToken = ;
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearerToken}`,
                }
            };

            const response = await fetch(apiUrl, requestOptions);

            if (!response.ok) {
                throw new Error(`Failed to fetch user details. Status: ${response.status}`);
            }

            const data = await response.json();
            setUserDetails(data.data);

        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    useEffect(() => {
        fetchCompanionDetails();
        
        fetchMessages();
        setTimeout(() => {
            setOnline(true);
        }, 5000);
    }, []);

    useEffect(() => {
        // const interval = setInterval(() => {
        //     fetchMessages();
        // }, 3000);
        // return () => clearInterval(interval);
        fetchUserDetails();
    },[]);

    const handleDeleteMessage = async (messageId, sender) => {
        try {
            // Make a DELETE request to your backend API
            const response = await fetch(`https://apiv1-wsuwijidsa-el.a.run.app/message/${messageId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any necessary authentication headers
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete message');
            }
            alert('Message deleted successfully');
            // Dispatch the delete action to update Redux state
            dispatch(deleteMessage(messageId, sender));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    const handleSendMessage = async (e) => {

        e.preventDefault();
        setInpOpt(false);
        setSettings(false);
        setShowEmoji(false);
        document.getElementsByName('input-chat')[0].value = "";

        if (newMessage.trim() === "") {
            return;
        }

        setNewMessage("");
        dispatch(addUserMessage(newMessage, new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true})));
        // setOnline(true);
        try {
            const apiUrl = `https://apiv1-wsuwijidsa-el.a.run.app/message/Chat`;
            // const bearerToken = accessToken;

            const requestBody = {
                Transcription_language_code: "en-US",
                role: "string",
                content: newMessage,
                createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true}),
                updatedAt: "string",
                companionId: companionId,
                translation_language_code: "en",
                userId: userId,
                user_timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true}),
            };

            console.log("Request Body Structure:", JSON.stringify(requestBody, null, 2));

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearerToken}`,
                },
                body: JSON.stringify(requestBody),
            };
            // setOnline(false);
            setTyping(true);
            const response = await fetch(apiUrl, requestOptions);
            // console.log(response)

            if (!response.ok) {
                setTyping(false);
                throw new Error(`Failed to send message. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            dispatch(addAIMessage(data.response, new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true})));
            setTyping(false);
        } catch (error) {
            setTyping(false);
            console.error("Error sending message:", error);
        }
    };

    useEffect(() => {
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
        console.log("this is combined message", combinedMessages);
    }, [userMessages, aiMessages]);


    // useEffect(() => {
    //     const combinedMessages = [];
    //     let userIndex = 0;
    //     let aiIndex = 0;

    //     while (userIndex < userMessages.length || aiIndex < aiMessages.length) {
    //         if (userMessages[userIndex]) {
    //             combinedMessages.push({ message: userMessages[userIndex], sender: 'user' });
    //             userIndex++;
    //         }
    //         if (aiMessages[aiIndex]) {
    //             combinedMessages.push({ message: aiMessages[aiIndex], sender: 'ai' });
    //             aiIndex++;
    //         }
    //     }
    //     setMessages(combinedMessages);
    // }, [userMessages, aiMessages]);

    const chatEndRef = useRef(null);
    useEffect(() => {
        // Scroll to the bottom of the chat when messages change
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);



    const handleInpOpt = () => {
        setInpOpt(!intOpt);
    }

    const handleVoiceCall = () => {
        // startRecording();
        // setVoiceCall(true);
        // setVideoCall(false);
        setInpOpt(false);
        setSettings(false);
        setShowEmoji(false);
        setComingSoon(!comingSoon);
    }


    const handleVideoCall = () => {
        //     setVideoCall(true);
        //     setVoiceCall(false);
        setInpOpt(false);
        setSettings(false);
        setShowEmoji(false);

        setComingSoon(!comingSoon);
    }


    const handleEmoji = () => {
        setShowEmoji(!showEmoji);
    }

    let modelClassesVoiceCall = "";
    let modelClassesVideoCall = "";


    if (comingSoon) {
        setTimeout(() => {
            setComingSoon(false);
        }, 10000);
    }

    if(avatarProcess){
        setTimeout(() => {
            setAvatarProcess(false);
        }, 20000);
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
        // <div className={voiceCall || videoCall ? "chat-main-body chat-main-body-voice-call" : "chat-main-body"}>
        <div className="chat-main-body">
            <div className={`body flex h-screen items-center justify-center ${modelClassesVoiceCall} ${modelClassesVideoCall}`}>
               {
                    glbUrl ?  
                    <RenderOnViewportEntry
                        threshold={0.25}
                        className="w-full h-full"
                    >
                        <Avatar1/>  
                    </RenderOnViewportEntry>    :
                        <div className='flex items-center justify-center'>
                            {
                                avatarProcess &&
                                    <div className="text-white text-lg bg-black bg-opacity-95 p-4 rounded-lg w-1/2">
                                        Your avatar is in process of creation. Once it is ready, you will be able to see it here.
                                    </div>
                            }
                        </div>
                    // <img src={avtPlaceholder} alt="ai placeholder" className='h-full' />
                }
            </div>
            <RenderOnViewportEntry
                threshold={0.25}
                className="w-full h-full backg"
            >

                {background === 0 && <Spline className='backg' scene="https://prod.spline.design/dCtpCuY7cgegAOnu/scene.splinecode" />}
                {/* {background === 1 && <Spline className='backg' scene="https://prod.spline.design/pIkx9hV8t-YeBdBp/scene.splinecode" />}
                {background === 2 && <Spline className='backg' scene="https://prod.spline.design/1b7hKCxLGIA7p2cb/scene.splinecode" />}
                {background === 3 && <Spline className='backg' scene="https://prod.spline.design/DSoIdkwtCPiBmGko/scene.splinecode" />} */}
            </RenderOnViewportEntry>

            {/* {voiceCall && <img src="/voiceWaves.gif" className='rounded-full absolute z-20' alt="Audio waves" />} */}
            {/* <div className={voiceCall || videoCall ? "hidden" : "chat-div relative"}> */}
            <div className="chat-div relative">
                <menu className='flex flex-col text-white justify-between items-start'>
                    <div className='flex justify-between w-full'>
                        <div className='flex gap-4'>
                            <Link to={`/dashboard/${userId}`} className='cursor-pointer flex' title='Back to Dashboard'>
                                <span className="material-symbols-outlined" >
                                    arrow_back
                                </span>
                            </Link>
                            <span className='font-semibold text-xl'>
                                {companionDetails && companionDetails.name}
                            </span>
                        </div>
                        {/* <button className='flex' title='Settings' > */}
                        {/* <span className="material-symbols-outlined flex items-center justify-center cursor-pointer" onClick={handleSettings} style={settings ? { rotate: "90deg", transition: "all 0.4s ease-in-out" } : { rotate: "0deg", transition: "all 0.4s ease-in-out" }}>
                            settings
                        </span> */}
                        {/* </button> */}
                    </div>

                    <span className={typing ? "text-blue-500 ml-10" : online ? "text-green-500 ml-10" : "text-red-500 ml-10"}>
                        {typing ? "Typing..." : online ? "Online" : "Offline"}
                    </span>

                    {settings &&
                        <div className='settings absolute bg-black bg-opacity-95 p-4 text-white z-30 rounded-lg right-5 top-12 flex flex-col gap-2'>
                            {/* <button className='hover:bg-white hover:text-black rounded-lg p-2 transition-all'>
                                <p className='flex items-center gap-2'>
                                    <span className="material-symbols-outlined">
                                        settings
                                    </span>
                                    Settings
                                </p>
                            </button> */}
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
                <div className="chat-msg-area pr-0 h-full flex flex-col gap-2 justify-end overflow-hidden">
                    <div className='overflow-y-auto flex flex-col pr-1 gap-2 scroll-pb-px'>
                        {messages.map((msg) => (
                            // console.log("this is message", msg),
                            <Message
                                time={msg.message[1]} // Ensure you have a time property in your message objects
                                message={msg.message[0]}
                                key={msg.message[2]}
                                name={msg.sender === 'user' ? `${userDetails.first_name}  ${userDetails.last_name}` : companionDetails.name}
                                cName={`${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
                                img={msg.sender === 'user' ? "https://www.w3schools.com/howto/img_avatar.png" : companionDetails.front_src}
                                sender={msg.sender === 'user' ? 'user' : 'ai'}
                                onDelete={() => handleDeleteMessage(msg.message[2], msg.message[3])}
                            />
                        ))}
                        <div ref={chatEndRef} />
                    </div>
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
                {
                    comingSoon &&
                    <div className="coming-soon bg-black bg-opacity-95 text-white p-4 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className='text-2xl font-semibold'>
                            Coming Soon
                        </p>
                        <p>
                            This feature is under development and will be available soon.
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Chat;

// inside component

// const [videoCall, setVideoCall] = useState(false);
// const [voiceCall, setVoiceCall] = useState(false);
// const [camera, setCamera] = useState(false);

// inside handleVideoCall
//     if (camera === true) {
//         navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true })
//             .then((stream) => {
//                 const video = document.getElementById('user-video');
//                 if (video) {
//                     video.srcObject = stream;
//                     video.onloadedmetadata = () => {
//                         video.play();
//                     };
//                 }
//             })
//             .catch((err) => {
//                 console.error('Error accessing the camera:', err);
//                 if (err.name === "NotAllowedError") {
//                     alert("You have denied access to the camera. Please allow access to the camera to start the video call.");
//                 }
//             });
//     } else {
//         // only audio call
//         navigator.mediaDevices.getUserMedia({ video: false, audio: true })
//             .then((stream) => {
//                 const video = document.getElementById('user-video');
//                 if (video) {
//                     video.srcObject = stream;
//                     video.onloadedmetadata = () => {
//                         video.play();
//                     };
//                 }
//             })
//             .catch((err) => {
//                 console.error('Error accessing the camera:', err);
//                 if (err.name === "NotAllowedError") {
//                     alert("You have denied access to the camera. Please allow access to the camera to start the video call.");
//                 }
//             });
//     }

// const handleCamera = () => {

//     // if camera is false, stop the video stream
//     if (camera === true) {
//         setCamera(false);
//         const video = document.getElementById('user-video');
//         const stream = video.srcObject;
//         const tracks = stream.getTracks();
//         tracks.forEach(track => track.stop());
//         video.srcObject = null;

//         // audio on if video is off
//         navigator.mediaDevices.getUserMedia({ video: false, audio: true })
//             .then((stream) => {
//                 const video = document.getElementById('user-video');
//                 if (video) {
//                     video.srcObject = stream;
//                     video.onloadedmetadata = () => {
//                         video.play();
//                     };
//                 }
//             })
//     } else {
//         setCamera(true);
//         // ask for permission to use the camera and if granted, start the video call
//         navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true })
//             .then((stream) => {
//                 const video = document.getElementById('user-video');
//                 if (video) {
//                     video.srcObject = stream;
//                     video.onloadedmetadata = () => {
//                         video.play();
//                     };
//                 }
//             })
//             .catch((err) => {
//                 console.error('Error accessing the camera:', err);
//                 if (err.name === "NotAllowedError") {
//                     alert("You have denied access to the camera. Please allow access to the camera to start the video call.");
//                 }
//             });
//     }
// }

// const handleEndVideoCall = () => {
//     setVideoCall(false);

//     // stop the video stream
//     const video = document.getElementById('user-video');
//     const stream = video.srcObject;
//     const tracks = stream.getTracks();

//     tracks.forEach(track => track.stop());
//     video.srcObject = null;
//     setCamera(false);

//     // audio off if video call is ended
//     navigator.mediaDevices.getUserMedia({ video: false, audio: false })
//         .then((stream) => {
//             const video = document.getElementById('user-video');
//             if (video) {
//                 video.srcObject = stream;
//                 video.onloadedmetadata = () => {
//                     video.play();
//                 };
//             }
//         })
// }

// const handleEndVoiceCall = () => {
//     stopRecording();
//     setVoiceCall(false);
//     setCamera(false);
//     setVideoCall(false);
// }

// if (voiceCall) {
//     modelClassesVoiceCall = "sm-voice-cen max-scrn-voice-call";
//     modelClassesVideoCall = "";
// } else if (videoCall) {
//     modelClassesVoiceCall = "";
//     modelClassesVideoCall = "sm-video-cen max-scrn-video-call";
// } else {
//     modelClassesVoiceCall = "";
//     modelClassesVideoCall = "";
// }

//  inside return   
{/* <aside className=''> */ }
{/* <img src="./src/assets/AI avatar placeholder.png" alt="avatar" className="h-auto w-full" /> */ }
{/* <iframe className={`body flex basis-1/2 self-center justify-center ${modelClassesVoiceCall} ${modelClassesVideoCall}`} src='https://my.spline.design/untitled-c5b03b378e7ce3125486f2d1db14c585/' frameBorder='0'></iframe> */ }
{/* </aside> */ }
{/* <iframe src='https://my.spline.design/untitled-c5b03b378e7ce3125486f2d1db14c585/' frameBorder='0' width='150%' height='100%'>
    </iframe> */}
{/* <div className="sketchfab-embed-wrapper absolute h-full w-full"> <iframe className='h-full w-full' title="Vatican royaume d'or" frameBorder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autostart; xr-spatial-tracking" src="https://sketchfab.com/models/8434d5d906ac4b84ad403e1b66f84668/embed?autostart=1&camera=0&ui_stop=0&ui_controls=0"> </iframe></div> */ }
{/* <Spline className='backg' scene="https://prod.spline.design/dCtpCuY7cgegAOnu/scene.splinecode" /> */ }

{/* {
        voiceCall &&
        <div className="flex justify-between z-20  p-3 gap-5 rounded-full absolute bottom-10">
            <button className="flex flex-col items-center bg-red-700 pb-1 text-white rounded-full w-40 justify-center" onClick={handleEndVoiceCall}>
                <span className="material-symbols-outlined">
                    call_end
                </span>
                End Call
            </button>
        </div>
    } */}
{/* {
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
    } */}

{/* <video id='user-video' className={videoCall && camera ? "absolute bottom-0 right-5" : "hidden"} autoPlay playsInline></video>

    {
        videoCall && camera === false &&
        <div id='user-prof'>
            <span className="material-symbols-outlined text-white z-50">
                person
            </span>
            </div>
        } */}




// const handleDeleteMessage = async (messageId, sender) => {
//     try {
//         // Make a DELETE request to your backend API
//         const response = await fetch(`https://apiv1-wsuwijidsa-el.a.run.app/message/${messageId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Add any necessary authentication headers
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to delete message');
//         }
//         alert('Message deleted successfully');
//         // Dispatch the delete action to update Redux state
//         dispatch(deleteMessage(messageId, sender));
//     } catch (error) {
//         console.error('Error deleting message:', error);
//     }
// };


