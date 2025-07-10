// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 pb-40"> {/* Increased pb-40 */}
      <h1 className="text-5xl font-bold mb-4">Welcome to SoulYatri</h1>
      <p className="text-xl text-center mb-8">Your journey to well-being begins here.</p>
      {/*<Link
        to="/soothing-sound-space"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 transform hover:scale-105"
      >
        Go to Soothing Sound Space
      </Link>*/}
    </div>
  );
};

export default HomePage;