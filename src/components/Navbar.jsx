import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../styles/Navbar.css';
import logo from "../assets/logoDark.webp";
import localStorageUtils from '../Hooks/localStorageUtils';

const Navbar = () => {

    const history = useHistory();
    const userId = localStorageUtils.getUserId();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    window.onclick = function (event) {
        if (event.target === document.getElementsByClassName("nav-links-phone")) {
            setNavbarOpen(false);
        }
    };

    const handleNavbarOpen = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleLogout = () => {

        // Implement logout logic
        alert('Logged out successfully!');
        localStorage.removeItem('userId');
        setIsAdmin(false);
        history.push('/');
        // Redirect to the logout page or perform other logout actions
    };

    //  fetch user details from the server using the user id
    const fetchUserDetails = async () => {
        const bearerToken = localStorageUtils.getAccessToken();
        console.log('Bearer Token at Navbar fetch user details:', bearerToken);
        try {
            const response = await fetch(`https://apiv1-wsuwijidsa-el.a.run.app/user/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${bearerToken}`
                },
            });
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // console.log('User details from navbar:', data.data);
            setUserDetails(data.data);
            console.log('User details from navbar user:', userDetails);
            // return data;
        } catch (error) {
            console.error('Error fetching user details:', error);
            // return null;
        }
    }

    useEffect(() => {
        // if (userId) {
        fetchUserDetails();
        // }
    },[]);

    // useEffect(() => {
    //     // Check if user details contain admin email
    //     if (userId && userDetails.email === "chumsai.tech@gmail.com") {
    //         setIsAdmin(true);
    //     }
    // }, [userDetails]);

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
                        <Link to="/" className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                            Home
                        </Link>
                        {
                            userId && (
                                <Link to={`/dashboard/${userId}`} className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                    Dashboard
                                </Link>
                            )
                        }
                        {
                            isAdmin && (
                                <Link to="/admin" className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                    Admin Panel
                                </Link>
                            )
                        }
                        <Link to="/documentation" className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                            Documentation
                        </Link>
                        <Link to="/Contact" className="text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                            Contact us
                        </Link>
                    </div>
                    <div className="nav-elem">
                        {
                            userId ? (
                                <>
                                    <Link to={`/settings/${userId}`} className="login-btn text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                        Profile
                                    </Link>
                                    <button className="login-btn text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="login-btn text-white whitespace-nowrap hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="login-btn rounded-full flex justify-between items-center gap-2  px-6 py-2 text-white hover:text-black hover:bg-white"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )
                        }
                        {/* </div>
                    <div className="nav-elem"> */}

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
                                <Link to="/" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                    Home
                                </Link>
                                <Link to="/documentation" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                    Documentation
                                </Link>
                                <Link to="/contact" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                    Contact us
                                </Link>
                                {
                                    userId ? (
                                        <>
                                            <Link to={`/dashboard/${userId}`} className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                                Dashboard
                                            </Link>
                                            <Link to={`/settings/${userId}`} className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                                Profile
                                            </Link>
                                            {
                                                isAdmin && (
                                                    <Link to="/admin" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                                        Admin Panel
                                                    </Link>
                                                )
                                            }
                                            <button className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/login" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                                Login
                                            </Link>
                                            <Link to="/signup" className="text-white whitespace-nowrap  hover:bg-white px-3 py-2 rounded-full hover:text-black" >
                                                Sign Up
                                            </Link>
                                        </>
                                    )
                                }
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

export default Navbar;
