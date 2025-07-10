
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Firebase imports (directly in App.js)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Import Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import SoothingSoundSpace from './components/SoothingSoundSpace';
import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';

// Import Data
import { songsData } from './data/soundData';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongList, setCurrentSongList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const DUMMY_USER_ID = 'dummy-userid';
  const APP_COLLECTION_NAME = 'soulyatrijournal';

  const location = useLocation();

  const firebaseAppRef = useRef(null);
  const authRef = useRef(null);
  const dbRef = useRef(null); 

  
  useEffect(() => {

   const firebaseConfig = {
  apiKey: "AIzaSyCfZ1I4zaqNN-JmME33lkPQpgmnz07ALx0",
  authDomain: "soulyatri-journal.firebaseapp.com",
  projectId: "soulyatri-journal",
  storageBucket: "soulyatri-journal.firebasestorage.app",
  messagingSenderId: "1080219508747",
  appId: "1:1080219508747:web:929a0a024ffd75e0b2670e"
};

    try {
     
      if (!firebaseAppRef.current) {
        firebaseAppRef.current = initializeApp(firebaseConfig);
        authRef.current = getAuth(firebaseAppRef.current);
        dbRef.current = getFirestore(firebaseAppRef.current); 
        console.log("Firebase services initialized and stored in refs.");
      }

    
      setCurrentUserId(DUMMY_USER_ID);

      const fetchUserProfile = async () => {
        
        if (!dbRef.current) {
          console.error("Firestore DB not initialized yet when trying to fetch profile. Retrying...");
     
          setFirebaseInitialized(true);
          return;
        }

        try {
          const userDocRef = doc(dbRef.current, APP_COLLECTION_NAME, DUMMY_USER_ID, 'profile', 'details');
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            console.log("Dummy user profile data from Firestore:", userDocSnap.data());
            setUserProfileData(userDocSnap.data());
          } else {
            console.log("No dummy user profile data in Firestore, creating a default one.");
            const defaultProfile = {
              displayName: 'Dev User',
              email: 'dev@example.com',
              createdAt: new Date().toISOString(),
            };
            await setDoc(userDocRef, defaultProfile);
            setUserProfileData(defaultProfile);
          }
        } catch (error) {
          console.error("Error fetching/creating dummy user profile:", error);
          setUserProfileData(null);
        } finally {
          setFirebaseInitialized(true); 
        }
      };

      fetchUserProfile();

    } catch (error) {
      console.error("Critical error during Firebase initialization:", error);
      setFirebaseInitialized(true); 
    }
  }, []); 

  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (currentSong && location.pathname !== '/soothing-sound-space') {
      setCurrentSong(null);
      setIsPlaying(false);
    }
  }, [location.pathname, currentSong]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSelectSong = (song) => {
    if (!currentSong || currentSong.id !== song.id) {
      setCurrentSong(song);
      setIsPlaying(true);
    } else {
      setIsPlaying(prevIsPlaying => !prevIsPlaying);
    }

    const categoryId = Object.keys(songsData).find(key =>
      songsData[key].some(s => s.id === song.id)
    );
    if (categoryId) {
      setCurrentSongList(songsData[categoryId]);
    } else {
      setCurrentSongList([]);
    }
  };

  const handleCloseMusicPlayer = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const playNextSong = () => {
    if (currentSong && currentSongList.length > 0) {
      const currentIndex = currentSongList.findIndex(s => s.id === currentSong.id);
      const nextIndex = (currentIndex + 1) % currentSongList.length;
      setCurrentSong(currentSongList[nextIndex]);
      setIsPlaying(true);
    }
  };

  const playPreviousSong = () => {
    if (currentSong && currentSongList.length > 0) {
      const currentIndex = currentSongList.findIndex(s => s.id === currentSong.id);
      const prevIndex = (currentIndex - 1 + currentSongList.length) % currentSongList.length;
      setCurrentSong(currentSongList[prevIndex]);
      setIsPlaying(true);
    }
  };

  if (!firebaseInitialized) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        Loading application...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 font-inter">
      <Navbar
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        userPhotoUrl={userPhotoUrl}
        userProfileData={userProfileData}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="flex-1 overflow-hidden pt-32 md:pl-64">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/soothing-sound-space"
            element={
              <SoothingSoundSpace
                onSelectSong={handleSelectSong}
                currentSong={currentSong}
                isPlaying={isPlaying}
                togglePlayPause={togglePlayPause}
              />
            }
          />
          <Route
            path="/journal"
            element={
              <JournalPage
                db={dbRef.current} 
                appId={APP_COLLECTION_NAME}
                userId={DUMMY_USER_ID}
              />
            }
          />
        </Routes>
      </div>
      {currentSong && (
        <MusicPlayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          onNext={playNextSong}
          onPrevious={playPreviousSong}
          onClosePlayer={handleCloseMusicPlayer}
        />
      )}
    </div>
  );
}

export default App;

