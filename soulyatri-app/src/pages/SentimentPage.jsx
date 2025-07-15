// src/pages/SentimentPage.jsx
import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { format, subDays, startOfWeek, endOfWeek, addWeeks, subWeeks, addDays } from 'date-fns';

// Import mood mapping for consistent scoring and details
import { moodScores, sentimentCategories, moodDetails } from '../data/moodMapping';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const SentimentPage = ({ db, appId, userId, isDarkMode }) => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 })); // Monday as start

  // Determine stroke colors based on dark mode
  const axisStrokeColor = isDarkMode ? '#d1d5db' : '#6b7280'; // text-gray-300 / text-gray-700
  // The graph.png shows a dark grey/black line, so we'll use that.
  const graphColor = '#333333'; // Dark grey/black from graph.png
  const graphFillColor = '#333333'; // Fill with the same color

  // --- Data Fetching from Firestore ---
  useEffect(() => {
    if (!db || !appId || !userId) {
      setError("Firebase database or user ID not fully initialized. Cannot fetch entries.");
      setLoading(false);
      return;
    }

    const journalCollectionRef = collection(db, appId, userId, 'journalEntries');
    const q = query(journalCollectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        const entries = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() // Convert Firestore Timestamp to JS Date
        }));
        setJournalEntries(entries);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("SentimentPage: Error fetching journal entries:", err.code, err.message, err);
        setError(`Failed to load journal entries: ${err.message}`);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [db, appId, userId]);

  // --- Data Processing and Calculations ---

  // Filter entries for the current week
  const filterEntriesForWeek = (entries, weekStart) => {
    const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
    return entries.filter(entry =>
      entry.createdAt && entry.createdAt >= weekStart && entry.createdAt <= weekEnd
    );
  };

  const currentWeekEntries = filterEntriesForWeek(journalEntries, currentWeekStart);

  // Prepare data for Mood Trends Area Graph (creating "hill" shape for each day)
  const getMoodTrendData = (entries) => {
    const dailyMoods = {};
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Initialize dailyMoods for the current week with 0 score and 0 count
    for (let i = 0; i < 7; i++) {
      const dayDate = addDays(startOfWeek(currentWeekStart, { weekStartsOn: 1 }), i);
      const dateKey = format(dayDate, 'yyyy-MM-dd');
      dailyMoods[dateKey] = { totalScore: 0, count: 0, dayLabel: daysOfWeek[i] };
    }

    entries.forEach(entry => {
      const dateKey = format(entry.createdAt, 'yyyy-MM-dd');
      if (moodScores[entry.mood]) {
        if (dailyMoods[dateKey]) {
          dailyMoods[dateKey].totalScore += moodScores[entry.mood];
          dailyMoods[dateKey].count += 1;
        }
      }
    });

    const data = [];
    let previousMood = 0; // Initialize a baseline for the start of the week

    // Iterate through each day of the week to create the "hill" effect
    for (let i = 0; i < 7; i++) {
      const dayDate = addDays(startOfWeek(currentWeekStart, { weekStartsOn: 1 }), i);
      const dateKey = format(dayDate, 'yyyy-MM-dd');
      const dailyData = dailyMoods[dateKey];
      const averageMood = dailyData.count > 0 ? parseFloat((dailyData.totalScore / dailyData.count).toFixed(1)) : null; // Use null if no data

      // If there's no data for the day, we still want to maintain the flow.
      // If previousMood is 0 and current is null, we want to stay at 0.
      // If previousMood is a value and current is null, we want to smoothly transition to 0 or a neutral value.
      // For the "hill" effect, we need points that define the rise and fall.

      // Point at the start of the day (connecting from previous day's end)
      data.push({
        name: daysOfWeek[i], // X-axis label for this day
        mood: previousMood, // Start from where the previous day ended (or 0)
        dayIndex: i * 2 // Use an index for X-axis positioning
      });

      // Point at the peak of the mood for the current day
      data.push({
        name: daysOfWeek[i], // X-axis label for this day
        mood: averageMood !== null ? averageMood : previousMood, // If no data, maintain previous mood for continuity
        dayIndex: i * 2 + 1 // Use an index for X-axis positioning
      });

      // Update previousMood for the next iteration
      previousMood = averageMood !== null ? averageMood : previousMood; // The "end" of this day's mood is its average (or previous if no data)
    }

    // Add a final point at the very end to bring the line down if necessary, or smooth out the end
    data.push({
      name: daysOfWeek[6], // Last day of the week
      mood: previousMood, // End at the last known mood
      dayIndex: 7 * 2 // Final index
    });

    // Console log the generated data for debugging
    console.log("Generated Mood Trend Data:", data);

    return data;
  };

  const moodTrendData = getMoodTrendData(currentWeekEntries);

  // Calculate Average Mood Score
  const calculateAverageMoodScore = (entries) => {
    if (entries.length === 0) return 0;
    const totalScore = entries.reduce((sum, entry) => sum + (moodScores[entry.mood] || 0), 0);
    return (totalScore / entries.length).toFixed(1);
  };

  const averageMoodScore = calculateAverageMoodScore(currentWeekEntries);

  // Prepare data for Sentiment Analysis Bar Graph
  const getSentimentAnalysisData = (entries) => {
    const sentimentCounts = { 'Positive': 0, 'Neutral': 0, 'Negative': 0 };
    entries.forEach(entry => {
      if (sentimentCategories.Positive.includes(entry.mood)) {
        sentimentCounts.Positive++;
      } else if (sentimentCategories.Neutral.includes(entry.mood)) {
        sentimentCounts.Neutral++;
      } else if (sentimentCategories.Negative.includes(entry.mood)) {
        sentimentCounts.Negative++;
      }
    });

    const totalEntries = entries.length;
    return [
      { name: 'Positive', value: totalEntries > 0 ? (sentimentCounts.Positive / totalEntries) * 100 : 0, fill: '#82ca9d' },
      { name: 'Neutral', value: totalEntries > 0 ? (sentimentCounts.Neutral / totalEntries) * 100 : 0, fill: '#ffc658' },
      { name: 'Negative', value: totalEntries > 0 ? (sentimentCounts.Negative / totalEntries) * 100 : 0, fill: '#ff7300' },
    ];
  };

  const sentimentAnalysisData = getSentimentAnalysisData(currentWeekEntries);

  // Generate Insights
  const generateInsights = (entries, avgMood) => {
    if (entries.length === 0) {
      return "No journal entries found for this period. Start writing to see your emotional patterns!";
    }

    let insight = `Over the past week, your mood has shown an average mood score of ${avgMood}. `;

    const positiveCount = sentimentAnalysisData.find(s => s.name === 'Positive')?.value || 0;
    const neutralCount = sentimentAnalysisData.find(s => s.name === 'Neutral')?.value || 0;
    const negativeCount = sentimentAnalysisData.find(s => s.name === 'Negative')?.value || 0;

    if (positiveCount > negativeCount && positiveCount > neutralCount) {
      insight += "Your sentiment analysis indicates a predominantly positive outlook. ";
    } else if (negativeCount > positiveCount && negativeCount > neutralCount) {
      insight += "Your sentiment analysis indicates a predominantly negative outlook. ";
    } else if (neutralCount > positiveCount && neutralCount > negativeCount) {
      insight += "Your sentiment analysis shows a balanced mix of emotions. ";
    } else {
      insight += "Your sentiment analysis shows a balanced mix of emotions. ";
    }

    const previousWeekStart = subWeeks(currentWeekStart, 1);
    const previousWeekEntries = filterEntriesForWeek(journalEntries, previousWeekStart);
    const previousAvgMood = calculateAverageMoodScore(previousWeekEntries);

    if (entries.length > 0 && previousWeekEntries.length > 0) {
      const moodChange = (parseFloat(avgMood) - parseFloat(previousAvgMood)).toFixed(1);
      if (moodChange > 0) {
        insight += `Your average mood has slightly improved by ${moodChange} compared to the previous week. `;
      } else if (moodChange < 0) {
        insight += `Your average mood has slightly decreased by ${Math.abs(moodChange)} compared to the previous week. `;
      } else {
        insight += "Your average mood remained consistent compared to the previous week. ";
      }
    }

    insight += "Consider exploring the factors contributing to these trends to continue to nurture your emotional well-being.";
    return insight;
  };

  const insightsText = generateInsights(currentWeekEntries, averageMoodScore);

  // --- Week Navigation ---
  const goToPreviousWeek = () => {
    setCurrentWeekStart(subWeeks(currentWeekStart, 1));
  };

  const goToNextWeek = () => {
    const nextWeek = addWeeks(currentWeekStart, 1);
    if (nextWeek <= startOfWeek(new Date(), { weekStartsOn: 1 })) {
      setCurrentWeekStart(nextWeek);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 dark:text-gray-300">
        <p>Loading your emotional data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600 dark:text-red-400">
        <p>Error: {error}</p>
        <p>Please ensure your Firebase rules allow read access to `soulyatrijournal/{userId}/journalEntries`.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen rounded-lg shadow-lg">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Emotion & Sentiment Tracker</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Monitor your emotional patterns over time</p>

      {/* Mood Trends Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Mood Trends</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousWeek}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Previous week"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <span className="text-md font-medium text-gray-700 dark:text-gray-300">
              {format(currentWeekStart, 'MMM dd')} - {format(endOfWeek(currentWeekStart, { weekStartsOn: 1 }), 'MMM dd')}
            </span>
            <button
              onClick={goToNextWeek}
              className={`p-2 rounded-full ${addWeeks(currentWeekStart, 1) > startOfWeek(new Date(), { weekStartsOn: 1 }) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'} text-gray-700 dark:text-gray-300`}
              disabled={addWeeks(currentWeekStart, 1) > startOfWeek(new Date(), { weekStartsOn: 1 })}
              aria-label="Next week"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          Average Mood Score: <span className="font-bold text-indigo-600 dark:text-indigo-400">{averageMoodScore}</span>
        </p>

        {currentWeekEntries.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={moodTrendData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              {/* Removed CartesianGrid */}
              <XAxis
                dataKey="dayIndex" // Use dayIndex for positioning
                tickFormatter={(value, index) => {
                  // Only show the day label for the "peak" point of each day
                  if (index % 2 === 1) { // Assuming peak is at odd indices
                    return moodTrendData[index]?.name;
                  }
                  return ''; // Hide other labels
                }}
                interval={0} // Show all labels, then format to hide
                stroke={axisStrokeColor}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                stroke={axisStrokeColor}
                // Removed hide={true} to make Y-axis labels visible
              />
              <Tooltip
                formatter={(value, name, props) => [`Mood: ${value}`, props.payload.name]}
                contentStyle={{ backgroundColor: isDarkMode ? '#374151' : 'white', border: `1px solid ${isDarkMode ? '#4b5563' : '#ccc'}`, borderRadius: '8px', padding: '10px' }}
                labelStyle={{ color: isDarkMode ? '#d1d5db' : '#333' }}
              />
              <Area
                type="monotoneX" // "monotoneX" for smooth horizontal transitions, good for this
                dataKey="mood"
                stroke={graphColor}
                fill={graphFillColor}
                fillOpacity={0.8}
                strokeWidth={3}
                connectNulls={true} // Connects lines across null data points for continuity
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10">
            No journal entries for this week. Write some entries to see your mood trends!
          </div>
        )}
      </div>

      {/* Sentiment Analysis Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Sentiment Analysis</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          Overall Sentiment: <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {sentimentAnalysisData.reduce((acc, curr) => curr.value > acc.value ? curr : acc, { value: 0 }).name || 'N/A'}
          </span>
        </p>

        {currentWeekEntries.length > 0 ? (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sentimentAnalysisData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={axisStrokeColor} />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke={axisStrokeColor} />
              <Tooltip
                formatter={(value) => `${value.toFixed(1)}%`}
                contentStyle={{ backgroundColor: isDarkMode ? '#374151' : 'white', border: `1px solid ${isDarkMode ? '#4b5563' : '#ccc'}`, borderRadius: '8px', padding: '10px' }}
                labelStyle={{ color: isDarkMode ? '#d1d5db' : '#333' }}
              />
              <Bar dataKey="value" barSize={50}>
                {sentimentAnalysisData.map((entry, index) => (
                  <Bar key={`bar-${index}`} dataKey="value" fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10">
            No journal entries for this week to analyze sentiment.
          </div>
        )}
      </div>

      {/* Insights Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Insights</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {insightsText}
        </p>
      </div>
    </div>
  );
};

export default SentimentPage;
