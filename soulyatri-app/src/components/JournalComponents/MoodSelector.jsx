// src/components/JournalComponents/MoodSelector.jsx
import React from 'react';

const MoodSelector = ({ selectedMood, onMoodSelect }) => {
  const moods = [
    // Updated colors as per your request
    { label: 'Sad', emoji: '😢', color: 'bg-[#dbeafe]', hoverColor: 'hover:bg-blue-200', textColor: 'text-blue-900' }, // Equivalent to bg-blue-100/200, adjusted hover
    { label: 'Angry', emoji: '😠', color: 'bg-[#fee2e2]', hoverColor: 'hover:bg-red-200', textColor: 'text-red-900' },   // Equivalent to bg-red-100/200, adjusted hover
    { label: 'Neutral', emoji: '😐', color: 'bg-[#f3f4f6]', hoverColor: 'hover:bg-gray-200', textColor: 'text-gray-900' }, // Equivalent to bg-gray-100/200, adjusted hover
    { label: 'Happy', emoji: '🙂', color: 'bg-[#fef9c3]', hoverColor: 'hover:bg-yellow-200', textColor: 'text-yellow-900' }, // Equivalent to bg-yellow-100/200, adjusted hover
    { label: 'Excited', emoji: '🤩', color: 'bg-[#dcfce7]', hoverColor: 'hover:bg-green-200', textColor: 'text-green-900' }, // Equivalent to bg-green-100/200, adjusted hover
  ];

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">How are you feeling?</label>
      <div className="flex flex-wrap justify-center gap-4 max-w-fit mx-auto">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => onMoodSelect(mood.label)}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl shadow-md transition-all duration-200
              ${mood.color} ${mood.hoverColor} ${mood.textColor}
              ${selectedMood === mood.label ? 'ring-4 ring-blue-500 ring-opacity-75 transform scale-105' : ''}
            `}
          >
            <span className="text-3xl sm:text-4xl leading-none">{mood.emoji}</span>
            <span className="text-xs sm:text-sm font-semibold mt-1">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
