import React, { useState } from 'react';
import './index.css'; 
import Sidebar from './components/Sidebar.jsx'; 
import { Bars3Icon } from '@heroicons/react/24/outline'; 
import SoulYatriLogo from './assets/logo.png'; 

import HealingToolbox from './pages/HealingToolbox.jsx';
import MiniMeditation from './pages/MiniMeditation.jsx';



const App = () => {
  const [currentPage, setCurrentPage] = useState('healingToolbox'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'healingToolbox':
        return <HealingToolbox onNavigate={handleNavigate} />;
      case 'mySessions':
        return <MySessions />;
      case 'journal':
        return <Journal />;
      case 'arohiAI':
        return <ArohiAI />;
      case 'community':
        return <Community />;
      case 'settings':
        return <Settings />;
      case 'emotionSentiment':
        return <EmotionAndSentiment />;
      case 'miniMeditation':
        return <MiniMeditation />;
      default:
        return <Dashboard />;
    }
  };

  return (
   
    <div className="flex flex-col lg:flex-row h-screen bg-white font-sans">
      
      <header className="lg:hidden flex items-center justify-between p-4 bg-white shadow-md z-30">
     
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
          <Bars3Icon className="w-6 h-6 text-gray-700" />
        </button>
       
        <div className="flex items-center mr-auto ml-4"> 
          <img src={SoulYatriLogo} alt="SoulYatri Logo" className="h-8 w-auto" />  
        </div>
      </header>

     
      <Sidebar
        onNavigate={handleNavigate}
        currentPage={currentPage}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

     
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

     
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto min-h-0 flex flex-col">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
