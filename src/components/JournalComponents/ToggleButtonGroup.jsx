// src/components/JournalComponents/ToggleButtonGroup.jsx
import React from 'react';

const ToggleButtonGroup = ({ activeTab, onTabChange }) => {
  const buttonClasses = (tab) =>
    `flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300
    ${activeTab === tab
      ? 'bg-gray-800 text-white shadow-lg dark:bg-gray-700' // Darker active button
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
    }`;

  const iconClasses = "w-5 h-5 mr-2";

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {/* "Write" Button */}
      <button
        className={buttonClasses('write')}
        onClick={() => onTabChange('write')}
      >
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
        </svg>
        Write
      </button>
      {/* "Stats" Button */}
      <button
        className={buttonClasses('stats')}
        onClick={() => onTabChange('stats')}
      >
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M14 4H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zm-1 9a1 1 0 10-2 0V7a1 1 0 102 0v6zM9 9a1 1 0 00-2 0v4a1 1 0 102 0V9z" clipRule="evenodd"></path>
        </svg>
        Stats
      </button>
      {/* "My Pages" Button - Re-added as requested */}
      <button
        className={buttonClasses('my-pages')}
        onClick={() => onTabChange('my-pages')}
      >
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 3.414L14.586 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
        My Pages
      </button>
    </div>
  );
};

export default ToggleButtonGroup;
