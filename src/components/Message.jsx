function Message(props) {

    return (
        <div className="flex w-auto flex-col text-white z-20">
            <div>
                <img src="" alt="" />
            </div>
            <div className="flex gap-4">
                <span>AI Friend</span>
                <span>{props.time}</span>
            </div>
            <div className="flex">
                <p className="text-white flex p-2 px-3 rounded-r-md rounded-bl-md bg-white  bg-opacity-30 h-auto w-auto">Hello</p>
                <button className="flex">
                    <span className="material-symbols-outlined self-center flex">
                        more_vert
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Message
