import React from 'react';
import Side from '../components/Sidebar';
import CompanionCard from '../components/CompanionCard';

const Dashboard = ({ companions }) => {
  return (
    <div className="flex">
      <Side />
      <div className="ml-64 mt-8 p-8">
        <h1 className="text-2xl font-bold mb-4">AI Companion List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Check if companions is an array before mapping */}
          {Array.isArray(companions) &&
            companions.map((companion, index) => (
              <CompanionCard key={index} data={companion} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
