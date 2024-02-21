import { useState } from "react"
import '../styles/Message.css'

function Message(props) {
    const [messageOptions, setMessageOptions] = useState(false);
    const [messageMenu, setMessageMenu] = useState(false);
    const handleOptions = () => {
        setMessageOptions(!messageOptions);
    };

    return (
        <div className="flex flex-col w-2/3 text-white z-20 relative">
            <div className="flex items-center justify-start gap-2">
                <div className="rounded-full w-5 h-5 left-0 bg-lime-500">
                    <img src={props.avatar} alt="avatar" className="rounded-full w-5 h-5" />
                </div>
                <span>AI Friend</span>
            </div>
            <div className="flex flex-col relative">
                <p className="text-black items-center p-2 pl-3 rounded-r-xl rounded-bl-xl bg-white bg-opacity-80 h-auto w-auto gap-1 flex relative overflow-hidden text-left chat-p" onMouseEnter={() => setMessageMenu(true)} onMouseLeave={() => setMessageMenu(false)}>
                    Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque et reprehenderit quidem veritatis sequi perspiciatis temporibus laudantium architecto id maxime consectetur, corporis rerum sunt enim voluptas dignissimos, incidunt voluptatem.
                    {messageMenu &&
                        <span className="message-opt-icon material-symbols-outlined self-center cursor-pointer absolute top-0 right-0 text-white" onClick={handleOptions}>
                            more_vert
                        </span>
                    }
                    
                </p>
                <span className="flex justify-end">{props.time}</span>
                {
                    messageOptions ? (
                        <div className="flex flex-col gap-1 p-2 rounded-md bg-black text-white absolute top-8 right-0">
                            <button className="flex gap-2 hover:bg-white p-1 rounded-md hover:text-black">
                                <span className="material-symbols-outlined self-center flex">
                                    delete
                                </span>
                                <p>Delete</p>
                            </button>
                            <button className="flex gap-2 hover:bg-white p-1 rounded-md hover:text-black">
                                <span className="material-symbols-outlined self-center flex">
                                    edit
                                </span>
                                <p>Edit</p>
                            </button>
                        </div>
                    ) : null
                }

            </div>
        </div>
    )
}

export default Message
