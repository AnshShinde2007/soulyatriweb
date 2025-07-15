// src/components/Card.jsx
import React from 'react';

const Card = ({ item, onClick }) => (
  <div
    className="flex-shrink-0 w-48 h-60 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 m-2 flex flex-col justify-between"
    onClick={() => onClick(item.id)}
  >
    <img src={item.image} alt={item.name} className="w-full h-3/4 object-cover rounded-t-lg" />
    <div className="p-3 text-center">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-md">{item.name}</h4>
      {item.description && (
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.description}</p>
      )}
    </div>
  </div>
);

export default Card;