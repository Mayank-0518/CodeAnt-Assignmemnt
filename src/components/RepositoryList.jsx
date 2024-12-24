import React from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-b-md">
      {repositories.map((repo, index) => (
        <RepositoryItem key={index} {...repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
