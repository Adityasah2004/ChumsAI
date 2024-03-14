import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import localStorageUtils from "../Hooks/localStorageUtils";
// import {
//     Button,
//     Modal,
//     TextInput,
//     Label,
//     Checkbox,
// } from "flowbite-react";
import CompanionList from "../components/CompanionCard";
import '../styles/Login.css';

const Login = () => {

    // const [navbarOpen, setNavbarOpen] = useState(false);

    // const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [mode, setMode] = useState("login");
    const [userId, setUserId] = useState(null);
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

    const handleSubmit = async () => {
        // e.preventDefault();
        // history.push("/dashboard");
        const formData = {
            email,
            // first_name: firstName,
            // last_name: lastName,
            password
        };

        // if (mode === "signup" && password !== confirmPassword) {
        //     alert("Password and Confirm Password do not match.");
        //     return;
        // }
        console.log("Request Payload:", formData);

        try {
            const response = await fetch(
                "http://localhost:8000/user/login",
                // (mode === "login" ? "login" : "sign-up"),
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

                console.log("Login complete");
                history.push(`/dashboard/${userId}`);
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
                        alert("Login failed. Please try again.");
                    }
                } catch (error) {
                    // Handle non-JSON response (e.g., unexpected server error)
                    console.error("Error parsing JSON:", error);
                    alert("Login failed. Please try again.");
                }
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle network errors or exceptions
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="login-main-div text-white flex items-center justify-center h-screen">
            <div className="login-card">
                <h1 className="text-3xl">Log In</h1>
                {/* <form onSubmit={handleSubmit}> */}
                    <div className="flex flex-col items-start">
                        <label htmlFor="email">
                            Your email
                        </label>
                        <input type="text"
                            className="w-full"
                            id="email"
                            placeholder="name@gmail.com"
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
                            autoComplete="on"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
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
                    </div>
                    <button onClick={handleSubmit}>Login</button>
                    {/* {userId && <CompanionList userId={userId} />} */}
                    <p>Don't have an account? <Link to="/signup" className="underline">Sign Up</Link></p>
                {/* </form> */}
            </div>
            {/* <Modal show={openModal} size="md" onClose={onCloseModal} popup> */}
                {/* <div className="flex justify-start m-2">
                    <button
                        className="cursor-pointer 3"
                        onClick={onCloseModal}
                    >
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                    </button>
                </div>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {mode === "login" ? "Log In" : "Sign Up"}
                        </h3>
                        <div>
                            <div className="mb-1 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@gmail.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-1 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        {mode === "signup" && (
                            <>
                                <div className="flex justify-between">
                                    <div className="w-1/2 pr-2">
                                        <div className="mb-1 block">
                                            <Label htmlFor="firstName" value="First Name" />
                                        </div>
                                        <TextInput
                                            id="firstName"
                                            placeholder="John"
                                            value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <div className="mb-1 block">
                                            <Label htmlFor="lastName" value="Last Name" />
                                        </div>
                                        <TextInput
                                            id="lastName"
                                            placeholder="Doe"
                                            value={lastName}
                                            onChange={(event) => setLastName(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-1 block">
                                        <Label htmlFor="confirmPassword" value="Confirm Password" />
                                    </div>
                                    <TextInput
                                        id="confirmPassword"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                        required
                                    />
                                    <div className="flex items-center gap-2 mt-2">
                                        <Checkbox id="tnc" required />
                                        <Label htmlFor="tnc">
                                            <Link to="/terms" className="text-cyan-700 hover:underline">Terms & conditions</Link>
                                        </Label>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                            >
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full text-center">
                            <Button onClick={handleSubmitAndCloseModal}>
                                {mode === "login" ? "Log in" : "Sign up"}
                            </Button>
                            {userId && <CompanionList userId={userId} />}
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            {mode === "login" ? (
                                <span>
                                    Not registered?&nbsp;
                                    <a
                                        href="#"
                                        className="text-cyan-700 hover:underline dark:text-cyan-500"
                                        onClick={() => handleModeChange("signup")}
                                    >
                                        Create account
                                    </a>
                                </span>
                            ) : (
                                <span>
                                    Already have an account?&nbsp;
                                    <a
                                        href="#"
                                        className="text-cyan-700 hover:underline dark:text-cyan-500"
                                        onClick={() => handleModeChange("login")}
                                    >
                                        Log in
                                    </a>
                                </span>
                            )}
                        </div>
                    </div>
                </Modal.Body> */}
            {/* </Modal> */}
        </div>
    )
}

export default Login
