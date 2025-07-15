// src/data/moodMapping.js

// Define a numerical score for each mood.
// You can adjust these values based on how you want to quantify each mood.
// For example, 1 for very negative, 5 for very positive.
export const moodScores = {
  'Sad': 1,
  'Angry': 2,
  'Neutral': 3,
  'Happy': 4,
  'Excited': 5,
};

// Define categories for sentiment analysis based on mood scores
export const sentimentCategories = {
  'Positive': ['Happy', 'Excited'],
  'Neutral': ['Neutral'],
  'Negative': ['Sad', 'Angry'],
};

// Map mood labels to their corresponding colors and emojis for consistency
export const moodDetails = {
  'Sad': { emoji: '😢', color: 'bg-[#dbeafe]', textColor: 'text-blue-900', score: 1 },
  'Angry': { emoji: '😠', color: 'bg-[#fee2e2]', textColor: 'text-red-900', score: 2 },
  'Neutral': { emoji: '😐', color: 'bg-[#f3f4f6]', textColor: 'text-gray-900', score: 3 },
  'Happy': { emoji: '🙂', color: 'bg-[#fef9c3]', textColor: 'text-yellow-900', score: 4 },
  'Excited': { emoji: '🤩', color: 'bg-[#dcfce7]', textColor: 'text-green-900', score: 5 },
};
