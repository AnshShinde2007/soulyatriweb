// src/components/JournalComponents/JournalEntryList.jsx
import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

// Helper mapping for mood colors and emojis, consistent with MoodSelector
const moodDetails = {
  // Updated colors as per your request, with adjusted text colors for contrast
  'Sad': { emoji: '😢', color: 'bg-[#dbeafe]', textColor: 'text-blue-900' },
  'Angry': { emoji: '😠', color: 'bg-[#fee2e2]', textColor: 'text-red-900' },
  'Neutral': { emoji: '😐', color: 'bg-[#f3f4f6]', textColor: 'text-gray-900' },
  'Happy': { emoji: '🙂', color: 'bg-[#fef9c3]', textColor: 'text-yellow-900' },
  'Excited': { emoji: '🤩', color: 'bg-[#dcfce7]', textColor: 'text-green-900' },
};

const JournalEntryList = ({ db, appId, userId }) => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log("JournalEntryList useEffect triggered. Checking props...");
    console.log("Inside useEffect - db:", !!db, "appId:", appId, "userId:", userId);

    if (!db || !appId || !userId) {
      setError("Firebase database or user ID not fully initialized. Cannot fetch entries.");
      setLoading(false);
      console.error("JournalEntryList: Missing required props for fetching. Exiting useEffect.");
      return;
    }

    const collectionPath = `${appId}/${userId}/journalEntries`;
    console.log("JournalEntryList: Attempting to fetch from path:", collectionPath);

    const journalCollectionRef = collection(db, appId, userId, 'journalEntries');
    const q = query(journalCollectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        console.log("JournalEntryList: onSnapshot received a snapshot.");
        console.log("Number of documents in snapshot:", snapshot.docs.length);

        if (snapshot.empty) {
          console.log("JournalEntryList: Snapshot is empty. No documents found at this path.");
        }

        const entries = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data
          };
        });
        setJournalEntries(entries);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("JournalEntryList: Error fetching journal entries:", err.code, err.message, err);
        setError(`Failed to load journal entries: ${err.message}`);
        setLoading(false);
      }
    );

    return () => {
      console.log("JournalEntryList: Unsubscribing from Firestore listener.");
      unsubscribe();
    };
  }, [db, appId, userId]);

  const handleDeleteEntry = async (entryId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this journal entry? This action cannot be undone.");
    if (!confirmDelete) {
      return;
    }

    if (!db) {
      console.error("Firestore DB instance is null. Cannot delete entry.");
      setError("Database not initialized. Cannot delete entry.");
      return;
    }

    try {
      const entryDocRef = doc(db, appId, userId, 'journalEntries', entryId);
      await deleteDoc(entryDocRef);
      console.log("Journal entry successfully deleted:", entryId);
    } catch (err) {
      console.error("Error deleting journal entry:", err);
      setError(`Failed to delete entry: ${err.message}`);
    } finally {
      setOpenDropdownId(null);
    }
  };

  const toggleDropdown = (entryId) => {
    setOpenDropdownId(openDropdownId === entryId ? null : entryId);
  };

  if (loading) {
    return (
      <div className="text-center text-gray-700 dark:text-gray-300 py-8">
        Loading your journal entries...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 py-8">
        Error: {error}
      </div>
    );
  }

  if (journalEntries.length === 0) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400 py-8">
        No journal entries found. Start writing in the "Write" tab!
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto w-full">
      {journalEntries.map((entry) => {
        const moodDetail = moodDetails[entry.mood] || { emoji: '❓', color: 'bg-gray-300', textColor: 'text-gray-900' };
        const entryDate = entry.date ? new Date(entry.date).toLocaleDateString('en-GB') : 'No Date';

        return (
          <div key={entry.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 w-full">
            <div className={`p-4 flex items-center justify-between ${moodDetail.color} ${moodDetail.textColor} font-semibold text-lg rounded-t-lg relative`}>
              <div className="flex items-center space-x-2">
                <span>{entryDate}</span>
                <span className="text-3xl leading-none">{moodDetail.emoji}</span>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); toggleDropdown(entry.id); }}
                className="p-2 rounded-full hover:bg-opacity-20 transition-colors duration-200"
                style={{ color: moodDetail.textColor }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>

              {openDropdownId === entry.id && (
                <div
                  ref={dropdownRef}
                  className="absolute right-4 top-full mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10 py-1"
                >
                  <button
                    onClick={() => handleDeleteEntry(entry.id)}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd"></path>
                    </svg>
                    Delete
                  </button>
                </div>
              )}
            </div>

            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{entry.title}</h3>
            </div>

            <div className="p-4 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              <p>{entry.thoughts}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JournalEntryList;
