
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URLS } from '../data/soundData'; 

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode, toggleDarkMode }) => {
  return (
 
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-[#e9f8ff] dark:bg-gray-800 shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col rounded-r-lg`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center" onClick={toggleSidebar}>
          
          <img src={IMAGE_URLS.logo} alt="SoulYatri Logo" className="h-10" />
        </Link>
        <button onClick={toggleSidebar} className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* Main Navigation Links (visible on mobile when sidebar is open) */}
      {/* These are the links that were previously in the Navbar on desktop */}
      <div className="p-4 md:hidden"> {/* Only show on mobile */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Navigation</h3>
        <nav>
          <ul>
            <li className="mb-3">
              <Link to="/" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 013 14v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1a1 1 0 011-1h1V8a8 8 0 0116 0v5h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 01-1-1v-.586l-.707-.707A1 1 0 0117 11V8a6 6 0 00-6-6zM10 18a3 3 0 110-6 3 3 0 010 6z"></path></svg>
                ToolBox
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/journal" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 3.414L14.586 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                Journal
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                Progress
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9v2a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h14a1 1 0 011 1zM3 5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H3zM3 13a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1H3z"></path></svg>
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Quick Links */}
      <div className="p-4 flex-grow overflow-y-auto custom-scrollbar">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
        <nav>
          <ul>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 013 14v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1a1 1 0 011-1h1V8a8 8 0 0116 0v5h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 01-1-1v-.586l-.707-.707A1 1 0 0117 11V8a6 6 0 00-6-6zM10 18a3 3 0 110-6 3 3 0 010 6z"></path></svg>
                Therapist Sessions
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                Astrologer Guidance
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9v2a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h14a1 1 0 011 1zM3 5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H3zM3 13a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1H3z"></path></svg>
                Arohi AI
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/soothing-sound-space" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.383 3.085A3.001 3.001 0 0112 5v5a3.001 3.001 0 01-2.617 2.915 1 1 0 00-.765.915v3.17a1 1 0 001.618.784L12 16.586V18a1 1 0 001 1h1a1 1 0 001-1v-1.414l1.382 1.382a1 1 0 001.414-1.414L16 14.586V12a1 1 0 00-1-1h-1a1 1 0 00-1 1v1.414l-1.382-1.382a1 1 0 00-1.414 1.414L12 14.586V16a1 1 0 00-1 1H9a1 1 0 00-1-1v-1.414l-1.382-1.382a1 1 0 00-1.414 1.414L6 12.586V10a1 1 0 00-1-1H4a1 1 0 00-1 1v2.586l-1.382 1.382a1 1 0 00-1.414-1.414L2 12.586V10a1 1 0 011-1h1a1 1 0 011-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1V6.586l-1.382 1.382a1 1 0 00-1.414-1.414L2 6.586V5a3.001 3.001 0 012.617-2.915A1 1 0 005 2h1a1 1 0 001-1h1a1 1 0 001 1h1a1 1 0 001-1h1a1 1 0 001 1h1a1 1 0 001-1h1a1 1 0 001 1h1a3.001 3.001 0 012.617 2.915A1 1 0 0018 5v.586l1.382 1.382a1 1 0 001.414-1.414L20 5.586V5a3.001 3.001 0 00-2.617-2.915z" clipRule="evenodd"></path></svg>
                Soothing Sound Space
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                Mini Meditations
              </Link>
            </li>
            {/* Keeping Daily Journaling in Quick Links as well, as per your reference image */}
            <li className="mb-3">
              <Link to="/journal" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 3.414L14.586 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                Daily Journaling
              </Link>
            </li>
            <li className="mb-3">
              <Link to="#" onClick={toggleSidebar} className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.5 7.5a.5.5 0 00-1 0v3.5a.5.5 0 00.5.5h3.5a.5.5 0 000-1h-3V7.5z" clipRule="evenodd"></path></svg>
                Emotion & Sentiment Tr...
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Book Consultation Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200">
          Book Your Next Consultation
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
