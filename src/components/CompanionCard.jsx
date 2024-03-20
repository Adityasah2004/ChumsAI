import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import localStorageUtils from '../Hooks/localStorageUtils';
import Side from './Sidebar';
import '../styles/CompanionCard.css'
import DashboardCreateCard from './DashboardCreateCard';

const userId = localStorageUtils.getUserId();

const CompanionCard = ({ data, key }) => {
    const { name, front_src, companion_id, message_count, category } = data;
    // const userId = localStorageUtils.getUserId();
    console.log(data);
    const handleCardClick = () => {
        // Store companion ID in local storage
        localStorageUtils.setCompanionId(companion_id);
        const companionId = localStorageUtils.getCompanionId();
        console.log('Companion ID:', companionId);
        // Call the parent component's callback if provided
        // if (onCardClick) {
        //     onCardClick(companion_id);
        // }
    };
    return (
        <Link key={key} to={`/chat/${userId}/${companion_id}`} className="comp-card flex flex-col border h-full p-2 rounded-xl" onClick={handleCardClick}>
            <div className='flex items-center justify-center'>
                <img className="comp-card-img" src={front_src} alt="AI Companion Image" />
            </div>
            <h2 className="text-white text-xl font-medium">{name}</h2>
            <p className='text-white font-thin'>{category}</p>
            <div className='flex justify-between'>
                <span className="text-gray-500 text-xs mt-2 mb-2">{userId}</span>
                <div className='flex items-center gap-1 text-white' title='Message count'>
                    <span className="material-symbols-outlined ">
                        chat
                    </span>
                    {message_count}
                </div>
            </div>
        </Link>
    );
};

const CompanionList = () => {

    const history = useHistory();

    const [companionData, setCompanionData] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    const accessToken = localStorageUtils.getAccessToken();

    // const handleCardClick = () => {
    //     // Handle card click if needed
    //     // You can perform additional actions here if necessary
    // };

    const handleLogout = () => {

        // Implement logout logic
        alert('Logged out successfully!');
        localStorage.removeItem('userId');
        history.push('/');
        // Redirect to the logout page or perform other logout actions
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
                                <li>
                                    <Link to={`/companion-creation/${userId}`} className="flex gap-2 items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
                                        <span className="material-symbols-outlined">
                                            add_circle
                                        </span>
                                        <span className="ms-3">Create Companion</span>
                                    </Link>
                                </li>
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
                                    <a href="#" className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap" onClick={handleLogout}>
                                        <span className="material-symbols-outlined">
                                            logout
                                        </span>
                                        <p className="ms-3 inline-block">Log Out</p>
                                    </a>
                                </li>
                                <li>
                                    <Link to={`/settings/${userId}`} className="flex items-center p-2 gap-2 text-gray-200 rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700 group whitespace-nowrap">
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
                        <CompanionCard key={companion.id} data={companion}
                        // onCardClick={handleCardClick} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanionList;
