    // src/pages/JournalPage.jsx
    import React, { useState, useEffect } from 'react'; 
    import ToggleButtonGroup from '../components/JournalComponents/ToggleButtonGroup';
    import JournalEntryForm from '../components/JournalComponents/JournalEntryForm';
    import JournalEntryList from '../components/JournalComponents/JournalEntryList';

    const JournalPage = ({ db, appId, userId }) => {
      const [activeTab, setActiveTab] = useState('write');

      const handleTabChange = (tab) => {
        console.log("JournalPage: Changing active tab to:", tab); 
        setActiveTab(tab);
      };

      
      useEffect(() => {
        console.log("JournalPage: Mounted with props - db:", !!db, "appId:", appId, "userId:", userId);
      }, [db, appId, userId]);


      return (
        <div className="w-full px-4 py-8 min-h-screen md:px-8 lg:px-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
            My Journal
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-8">
            You write your story, one feeling at a time
          </p>

          <ToggleButtonGroup activeTab={activeTab} onTabChange={handleTabChange} />

          {activeTab === 'write' && (
            <JournalEntryForm db={db} appId={appId} userId={userId} />
          )}
          {activeTab === 'stats' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl mx-auto text-center text-gray-700 dark:text-gray-300 w-full max-w-4xl">
              <h2 className="text-2xl font-semibold mb-4">Journal Statistics</h2>
              <p>This section will display insights and statistics about your journal entries.</p>
              <p className="mt-4 text-sm">Coming soon!</p>
            </div>
          )}
          {activeTab === 'my-pages' && (
           
            <JournalEntryList db={db} appId={appId} userId={userId} />
          )}
        </div>
      );
    };

    export default JournalPage;
    