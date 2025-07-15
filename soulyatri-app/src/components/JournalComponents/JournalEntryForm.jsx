
import React, { useState } from 'react';

import { collection, addDoc, serverTimestamp, doc } from 'firebase/firestore';
import MoodSelector from './MoodSelector';

const JournalEntryForm = ({ db, appId, userId }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [selectedMood, setSelectedMood] = useState(null);
  const [thoughts, setThoughts] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !date || !selectedMood || !thoughts) {
      setMessage('Please fill in all fields (Title, Date, Mood, Thoughts).');
      return;
    }

    if (!db) {
      setMessage('Firebase database not initialized. Please try again.');
      console.error("Firestore DB instance is null in JournalEntryForm. Cannot submit.");
      return;
    }

    console.log("Attempting to create journal entry with data:", {
      title, date, mood: selectedMood, thoughts, userId,
   
      intendedPath: `${appId}/${userId}/journalEntries`
    });

    try {

      const userDocRef = doc(db, appId, userId);

    
      const journalCollectionRef = collection(userDocRef, 'journalEntries');

      console.log("Firestore Collection Reference path:", journalCollectionRef.path);

      await addDoc(journalCollectionRef, {
        title,
        date,
        mood: selectedMood,
        thoughts,
        createdAt: serverTimestamp(),
        userId: userId,
      });

      setMessage('Journal entry created successfully!');
      console.log("Journal entry successfully added to Firestore.");
      setTitle('');
      setDate('');
      setSelectedMood(null);
      setThoughts('');
    } catch (error) {
      
      console.error("Error creating journal entry:", error.code, error.message, error);
      setMessage(`Failed to create journal entry: ${error.message}. Check console for details.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full mx-auto">
      {message && (
        <div className={`p-3 mb-4 rounded-md text-center ${message.includes('successfully') ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`}>
          {message}
        </div>
      )}
      <div className="mb-6">
        <label htmlFor="journalTitle" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Journal Title</label>
        <input type="text" id="journalTitle" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 placeholder-gray-400" placeholder="Give your entry a meaningful title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="mb-6">
        <label htmlFor="journalDate" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
        <input type="date" id="journalDate" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <MoodSelector selectedMood={selectedMood} onMoodSelect={setSelectedMood} />
      <div className="mb-8">
        <label htmlFor="journalThoughts" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Your Thoughts</label>
        <textarea id="journalThoughts" rows="8" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 placeholder-gray-400" placeholder="Write about your day, feelings, thoughts, or anything on your mind..." value={thoughts} onChange={(e) => setThoughts(e.target.value)} required></textarea>
      </div>
      <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors duration-300 text-xl dark:bg-gray-700 dark:hover:bg-gray-600">
        Create Journal Entry
      </button>
    </form>
  );
};

export default JournalEntryForm;
