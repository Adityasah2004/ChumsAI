// import { useState } from "react";
// import { Dropdown } from "flowbite-react";

import { Link } from "react-router-dom";
import logo from "../assets/logoDark.png";
import '../styles/sidebar.css';

function Side({ openModal }) {
    console.log("openModal prop:", openModal);
    return (
        <aside className="logo-sidebar rounded-xl" aria-label="Sidebar">
            <a href="/" className="flex items-center gap-2 px-3 h-20">
                <img src={logo} className="h-8 me-3" alt="Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
                    ChumsAI
                </span>
            </a>
            <div className="dash-nav flex flex-col justify-between px-3 pb-4 text-left  bg-black dark:bg-black">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/companion-creation" className="flex gap-2 items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                add_circle
                            </span>
                            <span className="ms-3">Create Companion</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                description
                            </span>
                            <span className="ms-3">Documentations</span>
                        </a>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                            <p className="ms-3 inline-block">Log Out</p>
                        </a>
                    </li>
                    <li>
                        <Link to="/settings" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group w-max">
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
