// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';

// Firebase imports
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Import Components
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import SoothingSoundSpace from './components/SoothingSoundSpace';
import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';
import SentimentPage from './pages/SentimentPage';

// Import Data
import { songsData } from './data/soundData';
import { Bars3Icon } from '@heroicons/react/24/outline';
import SoulYatriLogo from './assets/images/logo.png';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongList, setCurrentSongList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // isDarkMode state
  const [userPhotoUrl, setUserPhotoUrl] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const DUMMY_USER_ID = 'dummy-userid';
  const APP_COLLECTION_NAME = 'soulyatrijournal';

  const location = useLocation();
  const navigate = useNavigate();

  const firebaseAppRef = useRef(null);
  const authRef = useRef(null);
  const dbRef = useRef(null);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    setIsSidebarOpen(false);
    switch (pageId) {
      case 'dashboard':
        navigate('/');
        break;
      case 'journal':
        navigate('/journal');
        break;
      case 'sentiment':
        navigate('/sentiment');
        break;
      default:
        console.log(`Navigating to placeholder: ${pageId}`);
        break;
    }
  };

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
          console.error("Firestore DB not initialized yet when trying to fetch profile.");
          setFirebaseInitialized(true);
          return;
        }

        try {
          const userDocRef = doc(dbRef.current, APP_COLLECTION_NAME, DUMMY_USER_ID, 'profile', 'details');
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const profileData = userDocSnap.data();
            console.log("Dummy user profile data from Firestore:", profileData);
            setUserProfileData(profileData);
            setUserPhotoUrl(profileData.photoURL || null);
          } else {
            console.log("No dummy user profile data in Firestore, creating a default one.");
            const defaultProfile = {
              displayName: 'Dev User',
              email: 'dev@example.com',
              createdAt: new Date().toISOString(),
              photoURL: 'https://placehold.co/100x100/ADD8E6/000000?text=DU'
            };
            await setDoc(userDocRef, defaultProfile);
            setUserProfileData(defaultProfile);
            setUserPhotoUrl(defaultProfile.photoURL);
          }
        } catch (error) {
          console.error("Error fetching/creating dummy user profile:", error);
          setUserProfileData(null);
          setUserPhotoUrl(null);
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
    if (location.pathname === '/') {
      setCurrentPage('dashboard');
    } else if (location.pathname === '/journal') {
      setCurrentPage('journal');
    } else if (location.pathname === '/soothing-sound-space') {
      setCurrentPage('soothingSoundSpace');
    } else if (location.pathname === '/sentiment') {
      setCurrentPage('sentiment');
    }
  }, [location.pathname]);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // This effect should only run once on mount to set the initial currentSongList
    // and then handle song changes via handleSelectSong.
    // If you want to clear currentSong when navigating away from soothing sound space,
    // that logic is already in the other useEffect.
  }, []);


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
    <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] min-h-screen bg-white dark:bg-gray-900 font-inter">
      <Sidebar
        onNavigate={handleNavigate}
        currentPage={currentPage}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        userPhotoUrl={userPhotoUrl}
        userProfileData={userProfileData}
      />

      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#e9f8ff] dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-50">
        <button onClick={toggleSidebar} className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Bars3Icon className="w-6 h-6" />
        </button>
        <Link to="/" className="flex items-center">
          <img src={SoulYatriLogo} alt="SoulYatri Logo" className="h-10" />
        </Link>
        <div className="w-6 h-6"></div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="flex-1 overflow-auto pt-20 md:pt-0 md:p-4">
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
          <Route
            path="/sentiment"
            element={
              <SentimentPage
                db={dbRef.current}
                appId={APP_COLLECTION_NAME}
                userId={DUMMY_USER_ID}
                isDarkMode={isDarkMode} // NEW: Pass isDarkMode prop
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
