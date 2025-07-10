// src/components/SoothingSoundSpace.jsx
import React, { useState } from 'react';
import Card from './Card';
import SongList from './SongList';
import { soundCategories, featuredSoundscapes, songsData } from '../data/soundData';

const SoothingSoundSpace = ({ onSelectSong, currentSong, isPlaying, togglePlayPause }) => {
  const [selectedCategoryOrSoundscapeId, setSelectedCategoryOrSoundscapeId] = useState(null);
  const [currentSongList, setCurrentSongList] = useState([]);

  const handleCardClick = (id) => {
    const songs = songsData[id] || [];
    setCurrentSongList(songs);
    setSelectedCategoryOrSoundscapeId(id);
  };

  const handleCloseSongList = () => {
    setSelectedCategoryOrSoundscapeId(null);
  };

  return (
    <div className="p-4 pb-40 dark:bg-gray-900 min-h-screen rounded-lg"> {/* Increased pb-40 to prevent music player overlap */}
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Soothing Sound Space</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Relax and unwind with calming soundscapes and music.</p>

      {/* Sound Categories */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Sound Categories</h2>
      {/* Wrapper to hide scrollbar */}
      <div className="hide-scrollbar">
        <div className="flex overflow-x-auto pb-4 -mx-2">
          {soundCategories.map(category => (
            <Card key={category.id} item={category} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      {/* Featured Soundscapes */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">Featured Soundscapes</h2>
      {/* Wrapper to hide scrollbar */}
      <div className="hide-scrollbar">
        <div className="flex overflow-x-auto pb-4 -mx-2">
          {featuredSoundscapes.map(soundscape => (
            <Card key={soundscape.id} item={soundscape} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      {/* Song List Modal */}
      {selectedCategoryOrSoundscapeId && (
        <SongList
          songs={currentSongList}
          onSelectSong={onSelectSong}
          onClose={handleCloseSongList}
        />
      )}
    </div>
  );
};

export default SoothingSoundSpace;