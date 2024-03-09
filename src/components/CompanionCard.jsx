import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import localStorageUtils from '../Hooks/localStorageUtils';
import Side from './Sidebar';
import '../styles/CompanionCard.css'
import DashboardCreateCard from './DashboardCreateCard';

const CompanionCard = ({ data, onCardClick }) => {
    const { id, name, user_id, src } = data;
    // console.log(data);
    const handleCardClick = () => {
        // Store companion ID in local storage
        // localStorageUtils.setCompanionId(id);

        // Call the parent component's callback if provided
        if (onCardClick) {
            onCardClick(id);
        }
    };

    // get companion id from local storage
    // const companionId = localStorageUtils.getCompanionId();
    // console.log(companionId);
    return (
        <Link to={`/chat`} className="comp-card flex flex-col border h-full p-2 rounded-xl" onClick={handleCardClick}>
            {/* <div className="w-64 h-80 mx-4 my-4 border border-gray-600 bg-black shadow-md rounded-lg p-4 transition-transform transform hover:scale-105" > */}
            {/* <img
                    src={src}
                    alt="AI Companion Image"
                    className="w-full h-2/3 object-cover rounded-md mb-4"
                />
                <div>
                    <h2 className="text-white text-xl font-semibold mb-2">{name}</h2>
                    <p className="text-left text-gray-600 text-xs mt-2 mb-2">User ID: {user_id}</p>
                </div> */}
            {/* </div> */}
            <div className='flex items-center justify-center'>
                <img className="comp-card-img" src={src} alt="AI Companion Image" />
            </div>
            <h2 className="text-white text-xl mb-2">{name}</h2>
            <p className="text-gray-500 text-xs mt-2 mb-2">{user_id}</p>
        </Link>
    );
};

const CompanionList = () => {
    const [companionData, setCompanionData] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const userId = localStorageUtils.getUserId();
    const accessToken = localStorageUtils.getAccessToken();

    const handleCardClick = () => {
        // Handle card click if needed
        // You can perform additional actions here if necessary
    };

    useEffect(() => {
        if (!userId || !accessToken) {
            console.error('User ID or Access Token is missing.');
            return;
        }

        const fetchCompanionData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/companion/getAllCharacters/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                // Log the fetched data
                console.log('Fetched Companion Data:', response.data);

                setCompanionData(response.data);
            } catch (error) {
                console.error('Error fetching companion data:', error);

                if (error.response) {
                    console.error('Server responded with:', error.response.data);
                    console.error('Status code:', error.response.status);
                } else if (error.request) {
                    console.error('No response received. Request:', error.request);
                } else {
                    console.error('Error setting up the request:', error.message);
                }
            }
        };

        fetchCompanionData();
    }, [userId, accessToken]);

    const handleDashboardMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="dashboard-div w-full h-screen">
            <Side />
            <div className='companion-card-div w-full bg-opacity-90 overflow-y-auto'>
                {
                    menuOpen ? (
                        <div className='mobile-menu-div p-4 fixed bg-black rounded-3xl ml-2 top-16 h-max z-50'>
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <a href="/" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            home
                                        </span>
                                        <span className="ms-3">Home</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <Link to="/companion-creation" className="flex gap-2 items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            add_circle
                                        </span>
                                        <span className="ms-3">Create Companion</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            description
                                        </span>
                                        <span className="ms-3">Documentations</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <Link to="/companion-creation" className="flex gap-2 items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            api
                                        </span>
                                        <span className="ms-3">API key</span>
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            workspace_premium
                                        </span>
                                        <span className="ms-3">Premium</span>
                                    </a>
                                </li> */}
                                <li>
                                    <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            logout
                                        </span>
                                        <p className="ms-3 inline-block">Log Out</p>
                                    </a>
                                </li>
                                <li>
                                    <Link to={`/settings`} className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            settings
                                        </span>
                                        <span className="ms-3">Setting</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : null
                }
                <div className='dashboard-nav flex items-center mb-5'>

                    {
                        menuOpen ?
                        <span onClick={handleDashboardMenu} className="menu-icon material-symbols-outlined text-white cursor-pointer">
                            close
                        </span>
                        :
                        <span onClick={handleDashboardMenu} className="menu-icon material-symbols-outlined text-white cursor-pointer">
                            menu
                        </span>
                    }
                    <h1 className='heading'>
                        Companions
                    </h1>
                    <div className="skip-header"></div>
                    {/* <div className='profile-div flex text-white'>
                    </div> */}
                </div>
                <div className="dashboard-cards-div">
                    <DashboardCreateCard />
                    {companionData.map((companion) => (
                        <CompanionCard key={companion.id} data={companion} onCardClick={handleCardClick} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanionList;
