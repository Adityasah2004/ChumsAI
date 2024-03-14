// import { Link } from "react-router-dom";
import logo from "../assets/logoDark.png";
import '../styles/AdminSideBar.css';

function AdminSideBar() {
    return (
        <aside className="admin-sidebar rounded-xl" aria-label="Sidebar">
            <a href="/" className="flex items-center gap-2 pl-3 h-20">
                <img src={logo} className="h-8 me-3" alt="Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
                    Admin Panel
                </span>
            </a>
            <div className="admin-nav flex flex-col justify-between px-3 pb-4 text-left bg-opacity-95">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group">
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            <span className="ms-3">Home</span>
                        </a>
                    </li>
                    {/* <>
                        <Link to="/companion-creation" className="flex gap-2 items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                add_circle
                            </span>
                            <span className="ms-3">Create Companion</span>
                        </Link>
                    <//
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
                    <li>
                        <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                            <p className="ms-3">Log Out</p>
                        </a>
                    </li>
                </ul>
                {/* <ul className="space-y-2 font-medium"> */}
                    {/* <li>
                        <Link to={`/settings`} className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group w-max">
                            <span className="material-symbols-outlined">
                                settings
                            </span>
                            <span className="ms-3">Setting</span>
                        </Link>
                    </li> */}
                {/* </ul> */}
            </div>
        </aside>
    );
}

export default AdminSideBar;
