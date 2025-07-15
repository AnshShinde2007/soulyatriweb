// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToJournal = () => {
    navigate('/journal');
  };

  const handleNavigateToSoothingSpace = () => {
    navigate('/soothing-sound-space');
  };

  const handleNavigateToSentiment = () => { // NEW: Handler for Sentiment Page
    navigate('/sentiment');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 w-full">
      <h1 className="text-5xl font-bold mb-6 text-center">Welcome to SoulYatri!</h1>
      <p className="text-xl text-center mb-8 max-w-2xl">
        Your personal companion for mental well-being and self-discovery.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleNavigateToJournal}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-lg"
        >
          Go to Journal
        </button>
        <button
          onClick={handleNavigateToSoothingSpace}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-lg"
        >
          Go to Soothing Sound Space
        </button>
        {/* NEW BUTTON FOR SENTIMENT PAGE */}
        <button
          onClick={handleNavigateToSentiment}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-lg"
        >
          Sentiment Tracker
        </button>
      </div>

      <p className="mt-12 text-md text-gray-500 dark:text-gray-400">
        Explore your mind, find peace, and track your progress.
      </p>
    </div>
  );
};

export default HomePage;
