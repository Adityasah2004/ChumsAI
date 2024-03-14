import { useState } from "react"
import '../styles/Message.css'

function Message(props) {
    const [messageOptions, setMessageOptions] = useState(false);
    const [messageMenu, setMessageMenu] = useState(false);
    const handleOptions = () => {
        setMessageOptions(!messageOptions);
    };

    return (
        <div className={`${props.cName} w-fit`}>
            <div className="flex items-center justify-start gap-2">
                <div className="rounded-full w-5 h-5 left-0 bg-lime-500">
                    <img src={props.img} alt="avatar" className="rounded-full w-5 h-5" />
                </div>
                <span className="text-white">{props.name}</span>
            </div>
            <div className="flex flex-col relative">
                <p className="message-p text-black items-center p-2 pl-3 rounded-r-xl rounded-bl-xl bg-white bg-opacity-80 h-auto gap-1 flex relative overflow-hidden text-left chat-p" onMouseEnter={() => setMessageMenu(true)} onMouseLeave={() => setMessageMenu(false)}>
                    {props.message}
                    {/* {messageMenu &&
                        <span className="message-opt-icon material-symbols-outlined self-center cursor-pointer absolute top-0 right-0 text-white" onClick={handleOptions}>
                            more_vert
                        </span>
                    } */}
                </p>
                <span className="flex justify-end text-white">{props.time}</span>
                {
                    messageOptions ? (
                        <div className={`mess-opt-div flex flex-col gap-1 p-2 rounded-md ${props.name === "ai" ? "bg-black text-white" : "bg-white text-black"} absolute top-8 right-0`}>
                            <button className={`delete-${props.key} flex gap-2 ${props.name === "ai" ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} p-1 rounded-md`} onClick={() => props.deleteMessage(props.key)}>
                                <span className="material-symbols-outlined self-center flex">
                                    delete
                                </span>
                                <p>Delete</p>
                            </button>
                            <button className={`flex gap-2 ${props.name === "ai" ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} p-1 rounded-md`}>
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
