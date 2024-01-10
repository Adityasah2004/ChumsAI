import React from 'react';

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

export default CompanionCard;
