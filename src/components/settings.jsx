import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from 'react-icons/hi';

// Settings component
const Settings = () => {
  // State to manage user profile
  const [userProfile, setUserProfile] = useState({
    photo: 'path/to/default-photo.jpg',
    displayName: 'John Doe',
    totalCompanions: 0,
  });

  // State for the edit mode
  const [editMode, setEditMode] = useState(false);

  // State for form inputs
  const [newDisplayName, setNewDisplayName] = useState(userProfile.displayName);
  const [newPhoto, setNewPhoto] = useState('');

  // Function to handle the edit button click
  const handleEditClick = () => {
    setEditMode(true);
  };

  // Function to handle the cancel button click
  const handleCancelClick = () => {
    setEditMode(false);
    setNewDisplayName(userProfile.displayName);
    setNewPhoto('');
  };

  // Function to handle the save button click
  const handleSaveClick = () => {
    setUserProfile({
      ...userProfile,
      displayName: newDisplayName,
      photo: newPhoto || 'path/to/default-photo.jpg',
    });
    setEditMode(false);
  };

  // Function to handle delete companions button click
  const handleDeleteCompanions = () => {
    // Implement logic to delete companions
    setUserProfile({
      ...userProfile,
      totalCompanions: 0,
    });
    alert('Companions deleted!');
  };

  // Function to handle logout button click
  const handleLogout = () => {
    // Implement logout logic
    alert('Logging out...');
    // Redirect to the logout page or perform other logout actions
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 p-4 max-w-md bg-gray-100 shadow-md rounded-md">
        <div className="flex justify-start m-2">
  <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 cursor-pointer">
    <HiOutlineArrowLeft size={24} />
  </Link>
</div>
      <h1 className="text-black text-2xl font-bold mb-4">User Profile</h1>
      <img src={userProfile.photo} alt="User Photo" className="mb-4 rounded-full" />
      <p className="text-xl font-semibold">{userProfile.displayName}</p>
      <p className="text-gray-600">Total AI Companions Created: {userProfile.totalCompanions}</p>
      <button onClick={openModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
        Edit Profile
      </button>
      <button
        onClick={handleDeleteCompanions}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md mr-2"
      >
        Delete Companions
      </button>
      <button onClick={handleLogout} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md">
        Log Out
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <form className="mb-4">
            {/* ... (form fields) */}
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
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
