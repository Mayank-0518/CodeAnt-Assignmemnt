import React from 'react';

const RepositoryItem = ({ name, type, size, language, lastUpdated }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <div className="text-base flex items-center  gap-2 font-medium">{name}
          <span
            className={`px-2 py-1 rounded-2xl text-sm border-2 ${type === 'Public' ? 'bg-blue-100 text-blue-600  ' : 'bg-gray-100 text-gray-600'
              }`}
          >
            {type}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          {language} • {size} KB • Updated {lastUpdated}
        </div>
      </div>



    </div>
  );
};

export default RepositoryItem;
