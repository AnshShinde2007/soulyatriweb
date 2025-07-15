// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URLS } from '../data/soundData';
import {
  HomeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  SparklesIcon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import SoulYatriLogo from '../assets/images/logo.png';

const Sidebar = ({ onNavigate, currentPage, isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const userName = "Aanya";
  const profileImageSrc = "https://placehold.co/40x40/E0E7FF/4F46E5?text=A";

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: HomeIcon, path: '/' },
    { id: 'healingToolbox', name: 'Healing Toolbox', icon: BriefcaseIcon, path: '#' },
    { id: 'mySessions', name: 'My Sessions', icon: CalendarDaysIcon, path: '#' },
    { id: 'journal', name: 'Journal', icon: BookOpenIcon, path: '/journal' },
    { id: 'arohiAI', name: 'Arohi AI', icon: SparklesIcon, path: '#' },
    { id: 'community', name: 'Community', icon: UsersIcon, path: '#' },
    { id: 'settings', name: 'Settings', icon: Cog6ToothIcon, path: '#' },
  ];

  return (
    <div
      className={`
        bg-[#F0F8FF] text-gray-800 h-screen p-4 flex flex-col shadow-lg
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:w-64 lg:rounded-3xl /* Removed lg:m-4 here */
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      style={{ borderRadius: '0 24px 24px 0', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
    >
    
      <div className="flex justify-end lg:hidden mb-4">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
          <XMarkIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>

     
      <div className="hidden lg:flex items-center justify-center mb-8 mt-4">
        <img src={SoulYatriLogo} alt="SoulYatri Logo" className="h-10 w-auto mr-2" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => onNavigate(item.id)}
                className={`flex items-center w-full text-left py-3 px-4 rounded-xl transition-all duration-200 ease-in-out
                  ${currentPage === item.id
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'hover:bg-gray-100 hover:text-indigo-600'
                  }`}
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span className="text-lg font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile and Logout */}
      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <img
            src={profileImageSrc}
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <span className="text-lg font-semibold text-gray-800">{userName}</span>
        </div>

        <button
          onClick={() => console.log('Logout clicked')}
          className="flex items-center w-full text-left py-3 px-4 rounded-xl transition-all duration-200 ease-in-out
            hover:bg-red-100 hover:text-red-600 text-gray-700"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
          <span className="text-lg font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
