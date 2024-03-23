import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logoDark.webp";
import '../styles/Sidebar.css';
import localStorageUtils from "../Hooks/localStorageUtils";

const userId = localStorageUtils.getUserId();

function Side() {

    const [userDetails, setUserDetails] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    //  fetch user details from the server using the user id
    const fetchUserDetails = async () => {
        try {
            const response = await fetch(`http://localhost:8000/user/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
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
    }, []);

    useEffect(() => {
        // Check if user details contain admin email
        if (userId && userDetails.email === "chumsai.tech@gmail.com") {
            setIsAdmin(true);
        }
    }, [userDetails]);

    const history = useHistory();

    const handleLogout = () => {
        alert('Logged out successfully!');
        localStorage.removeItem('userId');
        history.push('/');
    };



    return (
        <aside className="logo-sidebar rounded-xl" aria-label="Sidebar">
            <a href="/" className="flex items-center gap-2 pl-3 h-20">
                <img src={logo} className="h-8 me-3" alt="Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
                    Chums AI
                </span>
            </a>
            <div className="dash-nav flex flex-col justify-between px-3 pb-4 text-left bg-opacity-95">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group">
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            <span className="ms-3">Home</span>
                        </a>
                    </li>
                    {
                        isAdmin &&
                        <li>
                            <Link to="/admin" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group">
                                <span className="material-symbols-outlined">
                                    admin_panel_settings
                                </span>
                                <span className="ms-3">Admin</span>
                            </Link>
                        </li>
                    }
                    <li>
                        <Link to={`/companion-creation/${userId}`} className="flex gap-2 items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                add_circle
                            </span>
                            <span className="ms-3">Create Companion</span>
                        </Link>
                    </li>
                    <li>
                        <a href="/documentation" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                description
                            </span>
                            <span className="ms-3">Documentations</span>
                        </a>
                    </li>
                    {/* <li>
                        <Link to="/companion-creation" className="flex gap-2 items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                api
                            </span>
                            <span className="ms-3">API key</span>
                        </Link>
                    </li> */}
                    {/* <li>
                        <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                workspace_premium
                            </span>
                            <span className="ms-3">Premium</span>
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                help
                            </span>
                            <span className="ms-3">FAQ</span>
                        </a>
                    </li> */}
                </ul>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max" onClick={handleLogout}>
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                            <p className="ms-3">Log Out</p>
                        </a>
                    </li>
                    <li>
                        <Link to={`/settings/${userId}`} className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                settings
                            </span>
                            <span className="ms-3">Setting</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Side;
