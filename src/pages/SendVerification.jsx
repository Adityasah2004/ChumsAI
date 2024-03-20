
const SendVerification = () => {
    return (
        <div className="signup-main-div">
            <form>
                <div className="signup-card">
                    <h1>Send Verification Mail</h1>
                    <div className="flex flex-col items-start">
                        <input type="email"
                            className="w-full text-white"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button className="btn-primary">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendVerification
