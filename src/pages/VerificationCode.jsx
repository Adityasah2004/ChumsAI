const VerificationCode = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = e.target.verificationCode.value;
        const formData = {
            verificationCode,
        };

        console.log("Request Payload:", formData);

        try {
            const response = await fetch(
                "https://apiv1-wsuwijidsa-el.a.run.app/user/verify_email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            console.log("Response:", data);
            if (response.status === 200) {
                alert("Verification successful!");
                history.push("/login");
            } else {
                alert("Verification failed!");
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="signup-main-div">
            <form onSubmit={handleSubmit}>
                <div className="signup-card">
                    <h1 className="text-2xl">Verification Code</h1>
                    <div className="flex flex-col items-start">
                        <input type="text"
                            className="w-full text-white"
                            id="verificationCode"
                            placeholder="Enter verification code"
                            required
                        />
                    </div>
                    <button className="btn-primary">Verify</button>
                </div>
            </form>
        </div>
    )
}

export default VerificationCode
