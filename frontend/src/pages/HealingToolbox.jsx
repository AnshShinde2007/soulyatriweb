import React from 'react';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';


import therapistImage from '../assets/therapist.png';
import arohiImage from '../assets/arohi.png';
import soothingImage from '../assets/sentiment.png';
import miniImage from '../assets/mini.png';
import journalImage from '../assets/journal.png';

import emotionTrackerImage from '../assets/soothing.png'; 



const HealingToolbox = ({ onNavigate }) => {
  const healingTools = [
    {
      id: 1,
      name: 'Therapist Consultation',
      rating: 4.8,
      description: 'Take a consultation from the experts now.',
      buttonText: 'Consult Now',
      imageUrl: therapistImage,
      bgColor: '#fff7ef', 
      action: () => console.log('Navigating to Therapist Consultation...'),
    },
    {
      id: 2,
      name: 'Arohi AI',
      rating: 4.9,
      description: 'Your AI companion for instant support and guidance.',
      buttonText: 'Chat Now',
      imageUrl: arohiImage,
      bgColor: '#e6fcff', 
      action: () => console.log('Navigating to Arohi AI...'),
    },
    {
      id: 3,
      name: 'Soothing Sound Space',
      rating: 4.7,
      description: 'Relax and unwind with calming soundscapes and music.',
      buttonText: 'Listen',
      imageUrl: soothingImage,
      bgColor: '#fff7ef', 
      action: () => console.log('Navigating to Soothing Sound Space...'),
    },
    {
      id: 4,
      name: 'Mini Meditations',
      rating: 4.5,
      description: 'Quick guided meditations to center yourself throughout the day.',
      buttonText: 'Meditate',
      imageUrl: miniImage,
      bgColor: '#e6fcff', 
      action: () => onNavigate('miniMeditation'),
    },
    {
      id: 5,
      name: 'Daily Journaling',
      rating: 4.6,
      description: 'Reflect on your thoughts and emotions with guided prompts.',
      buttonText: 'Start Journaling',
      imageUrl: journalImage,
      bgColor: '#fff7ef', 
      action: () => console.log('Navigating to Daily Journaling...'),
    },
    {
      id: 6,
      name: 'Emotion & Sentiment Tracker',
      rating: 4.7,
      description: 'Track your emotional well-being and identify patterns.',
      buttonText: 'Track Now',
      imageUrl: emotionTrackerImage,
      bgColor: '#e6fcff', 
      action: () => console.log('Navigating to Emotion & Sentiment Tracker...'),
    },
  ];

  return (
    
    <div className="w-full bg-white rounded-3xl shadow-lg"> 
      <div className="mb-8 p-4 lg:p-8"> 
        <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-2">Welcome back, Sarah!</h1>
        <p className="text-gray-600 text-lg mb-4">How are you feeling today?</p>

        <p className="text-gray-700 text-md mb-2">You've completed 70% of your healing tools</p>
        <div className="flex items-center mb-6">
          <div className="w-full bg-blue-100 rounded-full h-2.5">
            <div
              className="bg-orange-500 h-2.5 rounded-full"
              style={{ width: '70%' }}
            ></div>
          </div>
          <span className="ml-3 text-sm font-semibold text-gray-700">70%</span>
        </div>
      </div>

    
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 px-4 lg:px-8">Healing Toolbox Report</h2> 
      <div className="mb-8 p-4 bg-blue-50 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between mx-4 lg:mx-8"> 
        <div className="flex items-center mb-3 sm:mb-0">
          <DocumentTextIcon className="w-6 h-6 text-indigo-600 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Healing_Toolbox_Report.pdf</h3>
            <p className="text-sm text-gray-500">1.2MB updated 2 days ago</p>
          </div>
        </div>
        <button
          onClick={() => console.log('Preview Report clicked')}
          className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-200 text-sm"
        >
          <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
          Preview
        </button>
      </div>

      {/* Section 3: Your Healing Toolbox */}
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 px-4 lg:px-8">Your Healing Toolbox</h2> 

      <div className="flex flex-col gap-6 p-4 lg:p-8 pt-0"> 
        {healingTools.map((tool) => (
          <div
            key={tool.id}
            style={{ backgroundColor: tool.bgColor }}
            className="w-full p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center"
          >
            <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
              <div className="flex items-center mb-2">
                <StarSolidIcon className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-gray-700 font-semibold">{tool.rating}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              <button
                onClick={tool.action}
                className="px-5 py-2 bg-[#2d2c2b] text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 text-sm"
              >
                {tool.buttonText}
              </button>
            </div>
            <div className="w-full sm:w-auto flex-shrink-0">
              <img
                src={tool.imageUrl}
                alt={tool.name}
                className="w-full h-auto sm:w-60 sm:h-36 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealingToolbox;
