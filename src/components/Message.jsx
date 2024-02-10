import { useState } from "react"
import '../styles/Message.css'

function Message(props) {
    const [messageOptions, setMessageOptions] = useState(false);
    const [messageMenu, setMessageMenu] = useState(false);
    const handleOptions = () => {
        setMessageOptions(!messageOptions);
    };

    return (
        <div className="flex w-auto flex-col text-white z-20 relative">
            <div>
                <img src="" alt="" />
            </div>
            <div className="flex gap-4">
                <span>AI Friend</span>
                <span>{props.time}</span>
            </div>
            <div className="flex relative">
                <p className="text-black items-center p-2 pl-3 rounded-r-md rounded-bl-md bg-white bg-opacity-80 h-auto w-auto gap-1 flex relative overflow-hidden text-left" onMouseEnter={() => setMessageMenu(true)} onMouseLeave={() => setMessageMenu(false)}>
                    Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque et reprehenderit quidem veritatis sequi perspiciatis temporibus laudantium architecto id maxime consectetur, corporis rerum sunt enim voluptas dignissimos, incidunt voluptatem.
                    {messageMenu && 
                        <span className="message-opt-icon material-symbols-outlined self-center cursor-pointer absolute top-0 right-0 text-white" onClick={handleOptions}>
                            more_vert
                        </span>
                    }
                </p>
                {
                    messageOptions ? (
                        <div className="flex flex-col gap-2 p-2 rounded-md bg-white text-black absolute top-8 right-0">
                            <button className="flex gap-2 hover:bg-slate-500 p-2 rounded-md hover:text-white">
                                <span className="material-symbols-outlined self-center flex">
                                    delete
                                </span>
                                <p>Delete</p>
                            </button>
                            <button className="flex gap-2 hover:bg-slate-500 p-2 rounded-md hover:text-white">
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
