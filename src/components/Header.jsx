import React from 'react';
import { CiSearch } from "react-icons/ci";
import { HiOutlineRefresh } from "react-icons/hi";

const Header = ({ count }) => {
  return (
    <div className="flex flex-col bg-white p-4 shadow-sm rounded-t-md">
      
      <div className="lg:flex lg:p-0 py-4  justify-between items-center mb-2">
        <div>
          <div className="text-4xl py-2 font-bold">Repositories</div>
          <div className="text-sm text-gray-600 mb-2">{count} total repositories</div></div>
        <div className="flex items-center gap-2">
          <button className="bg-gray-100 p-2 rounded-md flex items-center gap-2 text-sm hover:bg-gray-200">
            <HiOutlineRefresh className="text-lg" /> Refresh All
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            + Add Repository
          </button>
        </div>
      </div>

      
      <div>
        <div className="flex items-center border rounded-md overflow-hidden w-full sm:w-[300px]">
          <div className="flex items-center justify-center px-3">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search Repositories"
            className="p-2 text-sm w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;