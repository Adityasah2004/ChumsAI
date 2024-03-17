import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import logo from "../assets/logoDark.webp";

const Head = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    window.onclick = function (event) {
        if (event.target === document.getElementsByClassName("nav-links-phone")) {
            setNavbarOpen(false);
        }
    };

    const handleNavbarOpen = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-element-div flex">
                    <Link to="/" className="logo-div">
                        <img src={logo}
                            className="brand-logo"
                            alt="ChumsAI logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-bold font-serif dark:text-white">
                            Chums AI
                        </span>
                    </Link>
                    <div className="nav-links">
                        <Link to="/" className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                            Home
                        </Link>
                        <Link to="/blogs" className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                            Documentation
                        </Link>
                        <Link to="/Contact" className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                            Contact us
                        </Link>
                    </div>
                    <div className="nav-elem">
                        <Link
                            // onClick={() => setOpenModal(true)}
                            to = "/login"
                            className="login-btn rounded-full flex justify-between items-center gap-2  px-6 py-2 text-white hover:text-black hover:bg-white"
                        >
                            Login
                        </Link>
                    {/* </div>
                    <div className="nav-elem"> */}
                        <Link
                            // onClick={() => setOpenModal(true)}
                            to="/signup"
                            className="login-btn rounded-full flex justify-between items-center gap-2  px-6 py-2 text-white hover:text-black hover:bg-white"
                        >
                            Sign Up
                        </Link>
                    </div>
                    {
                        navbarOpen ?
                            <span className="material-symbols-outlined nav-menu-icon" onClick={handleNavbarOpen}>
                                close
                            </span> :
                            <span className="material-symbols-outlined nav-menu-icon" onClick={handleNavbarOpen}>
                                menu
                            </span>
                    }
                    {
                        navbarOpen && (
                            <div className="nav-links-phone">
                                <Link to="/" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                                    Home
                                </Link>
                                <Link to="/about" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                                    Documentation
                                </Link>
                                <Link to="/contact" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                                    Contact us
                                </Link>
                                <Link to="/login" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                                    Login
                                </Link>
                                <Link to="/signup" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" activeclassname="active">
                                    Sign Up
                                </Link>
                                {/* <button
                                    onClick={() => setOpenModal(true)}
                                    className=" text-white flex justify-center gap-2  hover:bg-white px-3 py-2 rounded-full hover:text-black"
                                >
                                    Login
                                </button> */}
                            </div>
                        )
                    }
                </div>
            </nav>

            {/* <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <div className="flex justify-start m-2">
                    <button
                        className="cursor-pointer"
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
                </Modal.Body>
            </Modal> */}
        </>
    );
};

export default Head;
