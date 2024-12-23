import React from 'react';

const MainCard = ({ icon, title, stats }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">


        
      <div className="flex items-center mb-4">
        <img src={icon} alt="icon" className="w-8 h-8" />
        <h2 className="text-lg font-semibold ml-3 text-gray-800">{title}</h2>
      </div>

     
      <div className="border-t border-gray-200 my-4"></div>

   
      <div className="flex justify-between">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCard;
