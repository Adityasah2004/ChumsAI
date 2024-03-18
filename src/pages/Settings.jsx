import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../styles/Settings.css';
import localStorageUtils from '../Hooks/localStorageUtils';
import Navbar from '../components/Navbar';

// Settings component
const Settings = () => {
    const history = useHistory();
    const [userProfileDetails, setUserProfileDetails] = useState({});
    const userId = localStorageUtils.getUserId();
    console.log(userId);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch(`http://localhost:8000/user/${userId}`);
            const data = await response.json();
            console.log(data.data);
            setUserProfileDetails(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUserProfile();
    }, []);
    
    // Function to handle logout button click
    const handleLogout = () => {
        alert('Logged out successfully!');
        localStorage.removeItem('userId');
        history.push('/');
    };

    return (
        <>
            <Navbar />
            <div className="settings-main-div text-white flex flex-col items-center justify-center h-screen">
                <div className='profile-settings-card'>
                    <div className='flex items-center'>
                        <h1 className="text-2xl font-bold">{userProfileDetails.first_name}&apos;s Profile</h1>
                    </div>
                    <div>
                        <div>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                                Edit Profile
                            </button>
                            <button onClick={handleLogout} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md">
                                Log Out
                            </button>
                        </div>
                    </div>
                    {/* <div>
                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                        <form className="mb-4">
                            <button
                                type="button"
                                onClick={handleSaveClick}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                            >
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={handleCancelClick}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                        </form>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Settings;
