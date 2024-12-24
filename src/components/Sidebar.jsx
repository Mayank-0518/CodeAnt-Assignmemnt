import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { AiOutlineHome } from "react-icons/ai";
import { FaBars, FaCode } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import codeant from "../assets/Frame 10.png"


const Sidebar = () => {

  const [isDropdownOpen, setisDropdownOpen] = useState(false)
  const toggleMenu = () => {
    setisDropdownOpen(prevState => !prevState)
  }

  const username = useSelector((state) => state.auth.user?.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };


  return (
    <>
      <div className="bg-white h-full w-64 p-4 lg:flex flex-col hidden">
        <img src={codeant} className='py-7 px-2' alt="" />
        <select className="bg-white rounded-md border-2 p-2 mb-6">
          <option className="w-60">{username}</option>
          <option className="w-60">Another Account</option>
        </select>
        <nav className="flex-grow">
          <ul>
            <li className="mb-4">
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-zinc-600 font-medium bg-white rounded-md hover:bg-blue-100"
              >
                <AiOutlineHome /> Repositories
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
              >
                <FaCode /> AI Code Review
              </button>
            </li>
            <li >
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
              >
                <CiCloudOn /> Cloud Security
              </button>
            </li>
            <li >
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
              >
                <LuBookText /> How to Use
              </button>
            </li>
            <li className="mb-4">
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
              >
                <CiSettings /> Settings
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <button
            className="w-full flex items-center gap-2 px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200 mb-4"
          >
            <IoCallOutline /> Support
          </button>
          <button
            className="w-full flex items-center gap-2 px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
            onClick={handleLogout}
          >
            <IoIosLogOut /> Logout
          </button>
        </div>
      </div>

      <div className='lg:hidden fixed top-0 left-0 w-full h-[55px] p-4 z-[10] border-2 flex justify-between items-center bg-white '>
      <img src={codeant} alt="" />

        <button onClick={toggleMenu}>
         <FaBars/>
        </button>
        <div className={`lg:hidden flex-col items-center justify-center fixed top-0 left-0 z-20 w-full h-auto bg-white  transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'translate-y-0' : '-translate-y-full'}`}>

          <div className=" flex items-center justify-between font-bold mb-6">
            <img src={codeant} alt="" />
            <button onClick={toggleMenu}>
            <IoIosClose size={35}/>
            </button>
            
          </div>
          <div className='flex items-center  justify-start px-4'>
            <select className="bg-white rounded-md p-2 w-full border-2 mb-6">
            <option className="">{username}</option>
            <option className="">Another Account</option>
          </select>
          </div>
          <nav className="flex-grow">
            <ul>
              <li >
                <button
                  className="flex items-center justify-start gap-2 w-full px-4 py-2 text-zinc-600 font-medium bg-white rounded-md hover:bg-blue-100"
                >
                  <AiOutlineHome /> Repositories
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 justify-start w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
                >
                  <FaCode /> AI Code Review
                </button>
              </li>
              <li >
                <button
                  className="flex items-center gap-2 justify-start w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
                >
                  <CiCloudOn /> Cloud Security
                </button>
              </li>
              <li >
                <button
                  className="flex items-center gap-2 justify-start w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
                >
                  <LuBookText /> How to Use
                </button>
              </li>
              <li >
                <button
                  className="flex items-center gap-2 justify-start w-full px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
                >
                  <CiSettings /> Settings
                </button>
              </li>
            </ul>
          </nav>
          <div>
            <button
              className="w-full flex items-center gap-2 justify-start px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200 "
            >
              <IoCallOutline /> Support
            </button>
            <button
              className="w-full flex items-center gap-2 justify-start px-4 py-2 text-zinc-600 bg-white rounded-md hover:bg-gray-200"
              onClick={handleLogout}
            >
              <IoIosLogOut /> Logout
            </button>
          </div>
        </div>
      </div>

    </>

  );
};

export default Sidebar;
