// import { useState } from "react";
import { Dropdown } from "flowbite-react";

import { Link } from "react-router-dom";
import logo from "../assets/logoDark.png";
import '../styles/sidebar.css';

function Side({ openModal }) {
    console.log("openModal prop:", openModal);
    return (
        <div className="flex">
            <nav className="bg-black border-b border-gray-700 dark:bg-black dark:border-gray-700">
                <div className="flex items-center ms-3">
                    <div>
                        <Dropdown
                            label=""
                            className="bg-black"
                            dismissOnClick={false}
                            renderTrigger={() => (
                                <span className="material-symbols-outlined text-white">
                                    account_circle
                                </span>
                            )}
                        >
                            <Dropdown.Item className="text-gray-200 text-center">
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Item className="text-gray-200 text-center">
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item className="text-gray-200 text-center">
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </nav>

            <aside className="logo-sidebar" aria-label="Sidebar">
                <a href="/" className="flex items-center px-3 h-20 border-b">
                    <img src={logo} className="h-8 me-3" alt="Logo" />
                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
                        ChumsAI
                    </span>
                </a>
                <div className="flex flex-col justify-between h-screen px-3 pb-4 text-left  bg-black dark:bg-black">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                                <span className="material-symbols-outlined">
                                    home
                                </span>
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/companion-creation" className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                                <span className="material-symbols-outlined">
                                    stylus_note
                                </span>
                                <span className="ms-3">Create Companion</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                                <span className="material-symbols-outlined">
                                    description
                                </span>
                                <span className="ms-3">Documentations</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                                <span className="material-symbols-outlined">
                                    logout
                                </span>
                                <span className="ms-3">Log Out</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/settings" className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group">
                                <span className="material-symbols-outlined">
                                    settings
                                </span>
                                <span className="ms-3">Setting</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Side;
