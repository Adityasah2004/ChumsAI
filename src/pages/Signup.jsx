import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import localStorageUtils from "../Hooks/localStorageUtils";
import '../styles/Signup.css';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [userId, setUserId] = useState(null);
    const history = useHistory();

    // const onCloseModal = () => {
    //     setOpenModal(false);
    //     setEmail("");
    //     setPassword("");
    //     setFirstName("");
    //     setLastName("");
    //     setConfirmPassword("");
    //     setMode("login");
    // };

    // const handleModeChange = (newMode) => {
    //     // Clear form fields when switching modes
    //     setEmail("");
    //     setPassword("");
    //     setFirstName("");
    //     setLastName("");
    //     setConfirmPassword("");
    //     setMode(newMode);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // history.push("/dashboard");
        const formData = {
            email,
            first_name: firstName,
            last_name: lastName,
            password,
            verification_code: "",
            verified: 1
        };

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match.");
            return;
        }
        console.log("Request Payload:", formData);

        try {
            const response = await fetch(
                "https://apiv1-wsuwijidsa-el.a.run.app/user/sign-up",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            // Log the entire response
            console.log("Response:", response);

            if (response.ok) {
                const responseData = await response.json();
                const accessToken = responseData.access_token;
                const userId = responseData.User_ID;

                localStorageUtils.setUserId(userId);
                localStorageUtils.setAccessToken(accessToken);

                console.log("User ID:", localStorage.getItem("userId"));
                console.log("Access Token:", localStorage.getItem("accessToken"));

                console.log("Signup complete");
                // history.push("/verify-email");
                history.push("/login");
            } else if (response.status === 422) {
                // Unprocessable Entity - Validation errors
                const responseData = await response.json();

                // Assuming your server returns validation errors in a specific format
                if (responseData.errors) {
                    console.log("Validation errors:", responseData.errors);
                } else {
                    // Unexpected format of validation errors
                    console.error(
                        "Unexpected format of validation errors:",
                        responseData
                    );
                    alert("Sign-up failed. Please try again.");
                }
            } else {
                // Other errors
                try {
                    const responseData = await response.json();

                    if (responseData.error === "invalid_credentials") {
                        // Incorrect credentials
                        alert("Incorrect email or password");
                    } else if (responseData.error === "user_not_found") {
                        // User not found
                        alert("User not found");
                    } else {
                        // Other errors
                        alert("Signup failed. Please try again.");
                    }
                } catch (error) {
                    // Handle non-JSON response (e.g., unexpected server error)
                    console.error("Error parsing JSON:", error);
                    alert("Signup failed. Please try again.");
                }
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle network errors or exceptions
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="signup-main-div text-white flex items-center justify-center h-screen">
            <div className="signup-card">
                <h1 className="text-3xl">Sign up</h1>
                <form >
                    <div className="flex gap-2 m:flex-row sm:gap-10">
                        <div className="flex flex-col items-start">
                            <label htmlFor="firstName">
                                First Name
                            </label>
                            <input type="text"
                                className="w-full"
                                id="firstName"
                                placeholder="John"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="lastName">
                                Last Name
                            </label>
                            <input type="text"
                                className="w-full"
                                id="lastName"
                                placeholder="Doe"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email"
                            className="w-full"
                            id="email"
                            placeholder="xyz@gmail.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="password">
                            Your password
                        </label>
                        <input type="password"
                            className="w-full"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="confirmPassword" >
                            Confirm Password
                        </label>
                        <input type="password"
                            className="w-full"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            required
                        />
                    </div>
                    {/* <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-cyan-500 hover:underline dark:text-cyan-500 flex items-center"
                        >
                            Lost Password?
                        </a>
                    </div> */}
                    <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" id="tnc" />
                        <label htmlFor="tnc">
                            I agree to <Link to="/terms" className="text-cyan-500 hover:underline">Terms & conditions</Link>
                        </label>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>
                            Sign Up
                        </button>
                        {/* {userId && <CompanionList userId={userId} />} */}
                    </div>
                </form>
                <span>
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="text-cyan-500 hover:underline dark:text-cyan-500"
                    // onClick={() => handleModeChange("login")}
                    >
                        Log in
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Signup
