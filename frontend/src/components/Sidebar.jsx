import React from 'react';
// Import icons from @heroicons/react/24/outline for general use
import {
  HomeIcon, BriefcaseIcon, CalendarIcon, BookOpenIcon,
  SparklesIcon, UsersIcon, CogIcon, ArrowLeftOnRectangleIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';
import SoulYatriLogo from '../assets/logo.png'; // Import your logo image

const Sidebar = ({ onNavigate, currentPage, isSidebarOpen, toggleSidebar }) => {
  // Define navigation items with their IDs, names, and corresponding Heroicons
  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: HomeIcon },
    { id: 'healingToolbox', name: 'Healing Toolbox', icon: BriefcaseIcon },
    { id: 'mySessions', name: 'My Sessions', icon: CalendarIcon },
    { id: 'journal', name: 'Journal', icon: BookOpenIcon },
    { id: 'arohiAI', name: 'Arohi AI', icon: SparklesIcon },
    { id: 'community', name: 'Community', icon: UsersIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon },
  ];

  return (
    <div
      className={`
        bg-[#F0F8FF] text-gray-800 h-screen p-4 flex flex-col shadow-lg
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:w-64 lg:m-4 lg:rounded-3xl
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      {/* Close button for mobile sidebar */}
      <div className="flex justify-end lg:hidden mb-4">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
          <XMarkIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* SoulYatri Logo (hidden on mobile when header is present) */}
      <div className="hidden lg:flex items-center justify-center mb-8 mt-4">
        <img src={SoulYatriLogo} alt="SoulYatri Logo" className="h-10 w-auto mr-2" /> {/* Use actual logo */}
       
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
                <item.icon className="w-5 h-5 mr-3" />
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
            src="https://placehold.co/40x40/E0E7FF/4F46E5?text=A" // Placeholder for Aanya's image
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <span className="text-lg font-semibold text-gray-800">Aanya</span>
        </div>

        <button
          onClick={() => console.log('Logout clicked')} // Replace with actual logout logic
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
