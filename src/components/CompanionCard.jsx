import React, { useState, useEffect } from 'react';
import axios from 'axios';
import localStorageUtils from '../Hooks/localStorageUtils';
import Side from './Sidebar';

const CompanionCard = ({ data }) => {
  const { name, user_id, src } = data;

  return (
      <div className="border border-gray-600 bg-black shadow-md  rounded-lg p-4 transition-transform transform hover:scale-105">
        <img
          src={src}
          alt="AI Companion Image"
          className="w-full h-auto rounded-md mb-4"
        />
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">{name}</h2>
          <p className="text-left text-gray-600 text-xs mt-2 mb-2">User ID: {user_id}</p>
        </div>
      </div>
  );
};

const CompanionList = () => {
  const [companionData, setCompanionData] = useState([]);
  const userId = localStorageUtils.getUserId();
  const accessToken = localStorageUtils.getAccessToken();

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

  return (
    <div className="container mx-auto ml-40 mt-8 p-8 flex flex-wrap">
      <h1 className="w-full text-center mt-4 text-2xl font-bold mb-4">Your Companions</h1>
      <Side/>
      {companionData.map((companion) => (
        <CompanionCard key={companion.id} data={companion} />
      ))}
    </div>
  );
};

export default CompanionList ;
