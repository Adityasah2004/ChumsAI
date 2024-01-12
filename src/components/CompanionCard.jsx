import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanionCard = ({ data }) => {
  const { name, description, instructions, seed, user_id, src } = data;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Description: {description}</p>
      <p className="text-gray-600 mb-2">Instructions: {instructions}</p>
      <p className="text-gray-600 mb-2">Seed: {seed}</p>
      <p className="text-gray-600 mb-2">User ID: {user_id}</p>
      <img src={src} alt="AI Companion Image" className="w-full h-auto" />
    </div>
  );
};

const CompanionList = ({ userId }) => {
  const [companionData, setCompanionData] = useState([]);

  useEffect(() => {
    const fetchCompanionData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/companion/getAllCharacters/${userId}`);
        setCompanionData(response.data);
      } catch (error) {
        console.error('Error fetching companion data:', error);
      }
    };

    fetchCompanionData();
  }, [userId]);

  return (
    <div>
      <h1>Your Companions</h1>
      {companionData.map((companion) => (
        <CompanionCard key={companion.id} data={companion} />
      ))}
    </div>
  );
};

export default CompanionList;
