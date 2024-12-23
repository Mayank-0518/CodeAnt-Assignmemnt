import React from 'react';

const Toggle = ({ options, selectedOption, onToggle }) => {
  return (
    <div className="flex bg-gray-200 rounded-md">
      {options.map((option, index) => (
        <div
          key={index}
          className={`flex-1 cursor-pointer py-2 text-center font-medium transition ${
            selectedOption === option
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => onToggle(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
