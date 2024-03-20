import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../styles/Settings.css';
import localStorageUtils from '../Hooks/localStorageUtils';
import Navbar from '../components/Navbar';

// Settings component
const Settings = () => {
    const history = useHistory();
    const [userProfileDetails, setUserProfileDetails] = useState({});
    const [editCard, setEditCard] = useState(false);
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

    const handleEditButton = () => {
        setEditCard(true);
    }

    const handleEditedSumit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            // password: form.password.value
        }
        console.log(data);
        try {
            const response = await fetch(`http://localhost:8000/user/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                alert('Profile updated successfully!');
                setEditCard(false);
                fetchUserProfile();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="settings-main-div text-white flex flex-col items-center justify-center h-screen w-full relative">
                <div className='profile-settings-card'>
                    <div className='flex items-center'>
                        <h1 className="text-2xl font-bold">{userProfileDetails.first_name}&apos;s Profile</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user avatar" className="w-24 h-24 rounded-full" />
                        <h2 className="text-xl font-bold mt-2">{userProfileDetails.first_name} {userProfileDetails.last_name}</h2>
                        <p className="text-gray-200 text-sm mt-2">{userProfileDetails.email}</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className=" bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-between gap-2" onClick={handleEditButton}>
                            <span className="material-symbols-outlined cursor-pointer">
                                edit
                            </span>
                            Edit Profile
                        </button>
                        <button onClick={handleLogout} className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-between gap-2">
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                            Logout
                        </button>
                    </div>
                </div>
                {
                    editCard &&
                    <div className='edit-profile-card absolute'>
                        <form className='flex flex-col items-center gap-4' onSubmit={handleEditedSumit}>
                            <div className="flex flex-col gap-2 items-start">
                                <label htmlFor="first_name" className="text-white">First Name</label>
                                <input type="text" name="first_name" id="first_name" value={userProfileDetails.first_name} onChange={(e) => setUserProfileDetails({ ...userProfileDetails, first_name: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="last_name" className="text-white">Last Name</label>
                                <input type="text" name="last_name" id="last_name" value={userProfileDetails.last_name} onChange={(e) => setUserProfileDetails({ ...userProfileDetails, last_name: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white">Email</label>
                                <input type="email" name="email" id="email" value={userProfileDetails.email} onChange={(e) => setUserProfileDetails({ ...userProfileDetails, email: e.target.value })} />
                            </div>
                            <div className='flex gap-4'>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                                <button type="reset" className='bg-gray-800 text-white px-4 py-2 rounded-md' onClick={() => { setEditCard(false); fetchUserProfile(); }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </>
    );
};

export default Settings;
