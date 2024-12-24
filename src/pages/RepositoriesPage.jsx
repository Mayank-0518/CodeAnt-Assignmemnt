import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import RepositoryList from '../components/RepositoryList';

const repositories = [
  { name: 'design-system', type: 'Public', size: 7320, language: 'React', lastUpdated: '1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', size: 5871, language: 'Javascript', lastUpdated: '2 days ago' },
  { name: 'analytics-dashboard', type: 'Private', size: 4521, language: 'Python', lastUpdated: '5 days ago' },
  { name: 'mobile-app', type: 'Public', size: 3096, language: 'Swift', lastUpdated: '3 days ago' },
  { name: 'e-commerce-platform', type: 'Private', size: 6210, language: 'Java', lastUpdated: '6 days ago' },
  { name: 'blog-website', type: 'Public', size: 1876, language: 'HTML/CSS', lastUpdated: '4 days ago' },
  { name: 'social-network', type: 'Private', size: 5432, language: 'PHP', lastUpdated: '7 days ago' },
];
const count = repositories.length;

const RepositoriesPage = () => {
  return ( <>
 <div className='flex w-full'>
 <div className=''>
      <Sidebar />
      </div>
    <div className="flex flex-col sm:flex-row w-full h-screen bg-gray-100">
      
      <div className="flex-grow p-6 mt-[50px] ">
       
        <div>
        <Header count={count} />
        </div>
        <RepositoryList repositories={repositories} />
      </div>
    </div>
 </div>
    </>
  );
};

export default RepositoriesPage;