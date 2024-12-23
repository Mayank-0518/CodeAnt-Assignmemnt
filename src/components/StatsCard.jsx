import React from 'react';

const StatsCard = ({ icon, title, value, change, changeText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mt-4 relative"> 
      <div className="flex justify-between items-start">
        <div className=" p-3 rounded-full">
          <img src={icon} alt="icon" className=" w-16" />
        </div>
        <div className="text-sm text-green-500 font-medium pt-7">{changeText}</div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
