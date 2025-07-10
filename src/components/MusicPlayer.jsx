// src/components/MusicPlayer.jsx
import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = ({ currentSong, isPlaying, togglePlayPause, onNext, onPrevious, onClosePlayer }) => {
  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Effect 1: Handles loading a NEW song when currentSong changes.
  // This effect is responsible for setting the audio source and loading it.
  useEffect(() => {
    const audio = audioRef.current;

    if (currentSong) {
      // Only update the audio source and load if the song URL has actually changed.
      // This prevents unnecessary reloads (and restarts) when isPlaying changes.
      if (audio.src !== currentSong.audio) {
        audio.src = currentSong.audio;
        audio.load(); // Load the new audio. This will reset playback to the start.
        setCurrentTime(0); // Reset current time for the new song in the UI.
      }
      // DO NOT call play() or pause() here. Let Effect 2 handle playback state.
    } else {
      // If currentSong becomes null (e.g., player is closed or navigated away),
      // stop playback and clear the source to prevent lingering audio.
      audio.pause();
      audio.src = '';
      setCurrentTime(0);
      setDuration(0);
    }

    // Cleanup function: This runs when the component unmounts or before this effect re-runs
    // (e.g., when currentSong changes to a different song).
    return () => {
      // Ensure the audio is paused and its source cleared if it was playing.
      if (audio.src) {
        audio.pause();
        audio.src = ''; // Crucial for stopping and unloading the audio.
      }
    };
  }, [currentSong]); // Dependency: This effect re-runs only when currentSong changes.

  // Effect 2: Controls play/pause state based on the 'isPlaying' prop.
  // This effect is separate from loading to allow seamless pausing/resuming.
  useEffect(() => {
    const audio = audioRef.current;
    if (currentSong) { // Only attempt to play/pause if a song is currently loaded.
      if (isPlaying) {
        audio.play().catch(e => console.error("Error playing audio:", e));
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, currentSong]); // Dependencies: Re-run when isPlaying or currentSong changes.

  // Effect 3: Handles audio event listeners (timeupdate, loadeddata, ended).
  // This effect sets up and cleans up event listeners for the audio element.
  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      // Update duration when audio metadata is loaded.
      setDuration(audio.duration);
      // If the audio just loaded and is at the beginning, set current time to 0.
      // This prevents resetting current time if the user seeks.
      if (audio.currentTime === 0 && duration === 0) { // Only set if it's a fresh load
         setCurrentTime(0);
      }
    };

    const updateTime = () => {
      // Update current time as the audio plays.
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      // When the song ends, play the next one.
      onNext();
    };

    // Add event listeners.
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);

    // Cleanup function: Remove event listeners when the component unmounts or dependencies change.
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onNext, duration]); // Depend on onNext and duration to ensure listeners are correctly managed.

  // Functions for seeking forward/backward (internal to MusicPlayer).
  const handleSeekBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  const handleSeekForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 10);
    }
  };

  // Handles manual progress bar changes.
  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Formats time from seconds into MM:SS format.
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // If no song is selected, don't render the music player.
  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col items-center z-50 rounded-t-lg">
      <div className="flex items-center w-full max-w-2xl">
        {/* Close Button */}
        <button
          onClick={onClosePlayer}
          className="absolute top-2 right-2 p-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Close Music Player"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>

        {/* Song Image */}
        <img src={currentSong.image} alt={currentSong.name} className="w-16 h-16 rounded-lg mr-4 object-cover" />

        {/* Song Info and Controls */}
        <div className="flex-grow flex flex-col items-center">
          <p className="font-bold text-lg text-gray-800 dark:text-gray-100">{currentSong.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{currentSong.artist}</p>

          {/* Progress Bar */}
          <div className="w-full flex items-center space-x-2 mb-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-xs text-gray-600 dark:text-gray-400">{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Previous Track */}
            <button onClick={onPrevious} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            {/* Replay 10 seconds */}
            <button onClick={handleSeekBackward} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V2L7 7l5 5V9c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
              </svg>
            </button>
            {/* Play/Pause Button */}
            <button onClick={togglePlayPause} className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg">
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            {/* Forward 10 seconds */}
            <button onClick={handleSeekForward} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19c-3.31 0-6-2.69-6-6s2.69-6 6-6v3l5-5-5-5v3c-4.42 0-8 3.58-8 8s3.58 8 8 8z" />
              </svg>
            </button>
            {/* Next Track */}
            <button onClick={onNext} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18l8.5-6L6 6v12zm9-12v12h2V6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
