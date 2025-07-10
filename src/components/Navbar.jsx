// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URLS } from '../data/soundData'; 

const Navbar = ({ toggleSidebar, isDarkMode, toggleDarkMode, userPhotoUrl, userProfileData }) => {
  
  const profileImageSrc = userPhotoUrl || IMAGE_URLS.profile;
  const userName = userProfileData ? userProfileData.displayName : 'Guest'; 

  return (
   
    <nav className="bg-[#e9f8ff] dark:bg-gray-800 shadow-md p-4 flex items-center justify-between fixed w-full top-0 z-50 rounded-b-lg">
 
      <div className="flex items-center">
       
        <button onClick={toggleSidebar} className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <Link to="/" className="flex items-center">
        
          <img src={IMAGE_URLS.logo} alt="SoulYatri Logo" className="h-12" />
        </Link>
      </div>

     
      <div className="flex items-center space-x-4">
      
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</Link>
          <Link to="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">ToolBox</Link>
          <Link to="/journal" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Journal</Link>
          <Link to="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Progress</Link>
          <Link to="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Community</Link>
        </div>

    
        <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.325 5.325l-.707.707M6.364 6.364l-.707-.707m12.728 0l-.707-.707M6.364 17.636l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          )}
        </button>

    
        {userProfileData && (
          <span className="text-gray-700 dark:text-gray-300 text-sm hidden sm:block">
            Hi, {userName}
          </span>
        )}

        <img src={profileImageSrc} alt="Profile" className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover" />
      </div>
    </nav>
  );
};

export default Navbar;
