// src/components/SongList.jsx
import React from 'react';

const SongList = ({ songs, onSelectSong, onClose }) => {
  return (
    // Increased pb-56 to ensure enough space for the music player
    <div className="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 z-50 flex flex-col p-4 rounded-lg pb-56">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Songs</h3>
        <button onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-3xl font-bold">
          &times;
        </button>
      </div>
      <div className="flex-grow overflow-y-auto custom-scrollbar">
        {songs.length > 0 ? (
          <ul>
            {songs.map(song => (
              <li key={song.id} className="flex items-center justify-between p-3 mb-2 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <div className="flex items-center">
                  <img src={song.image} alt={song.name} className="w-12 h-12 rounded-md mr-3 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{song.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{song.artist}</p>
                  </div>
                </div>
                <button
                  onClick={() => onSelectSong(song)}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-10">No songs available for this category/soundscape yet.</p>
        )}
      </div>
    </div>
  );
};

export default SongList;