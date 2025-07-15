import React, { useState } from 'react'; 
import { PlayIcon } from '@heroicons/react/24/solid'; 


import quickstressImage from '../assets/quickstress.png';
import mindfulImage from '../assets/mindful.png';
import gratitudeImage from '../assets/gratitude.png';
import focusImage from '../assets/focus.png';
import bodyImage from '../assets/body.png';
import positiveImage from '../assets/positive.png';
import deepImage from '../assets/deep.png';
import walkingImage from '../assets/walking.png';
import visualizeImage from '../assets/visualize.png';

const MiniMeditation = () => {
  
  const meditationSections = [
    {
      id: 'section1',
      title: 'Quick Stress Relief',
      description: 'A 2-minute meditation to quickly ease stress and anxiety.',
      imageUrl: quickstressImage,
      buttonText: 'Start',
      bgColor: '#e6fcff', 
      action: () => console.log('Starting Quick Stress Relief...'),
    },
    {
      id: 'section2',
      title: 'Mindful Breathing',
      description: 'Simple exercises to bring awareness to your breath and calm your mind.',
      imageUrl: mindfulImage,
      buttonText: 'Start',
      bgColor: '#fff7ef', 
      action: () => console.log('Starting Mindful Breathing...'),
    },
    {
      id: 'section3',
      title: 'Gratitude Practice',
      description: 'Cultivate appreciation with a short reflection on things you\'re grateful for.',
      imageUrl: gratitudeImage,
      buttonText: 'Start',
      bgColor: '#e6fcff', 
      action: () => console.log('Starting Gratitude Practice...'),
    },
  ];

  const focusSections = [
    {
      id: 'section4',
      title: 'Focus and Clarity',
      description: 'Enhance concentration and mental sharpness with a focused meditation.',
      imageUrl: focusImage,
      buttonText: 'Start',
      bgColor: '#fff7ef', 
      action: () => console.log('Starting Focus and Clarity...'),
    },
    {
      id: 'section5',
      title: 'Body Scan Relaxation',
      description: 'Gently release tension throughout your body with this guided scan.',
      imageUrl: bodyImage,
      buttonText: 'Start',
      bgColor: '#e6fcff', 
      action: () => console.log('Starting Body Scan Relaxation...'),
    },
    {
      id: 'section6',
      title: 'Positive Affirmations',
      description: 'Reinforce positive thoughts and beliefs with empowering statements.',
      imageUrl: positiveImage,
      buttonText: 'Start',
      bgColor: '#fff7ef', 
      action: () => console.log('Starting Positive Affirmations...'),
    },
  ];

  const deepRelaxationSections = [
    {
      id: 'section7',
      title: 'Deep Relaxation',
      description: 'Sink into profound calm with an extended guided relaxation.',
      imageUrl: deepImage,
      buttonText: 'Start',
      bgColor: '#e6fcff', 
      action: () => console.log('Starting Deep Relaxation...'),
    },
    {
      id: 'section8',
      title: 'Mindful Walking',
      description: 'Bring awareness to your steps and surroundings in this moving meditation.',
      imageUrl: walkingImage,
      buttonText: 'Start',
      bgColor: '#fff7ef', 
      action: () => console.log('Starting Mindful Walking...'),
    },
    {
      id: 'section9',
      title: 'Visualization for Calm',
      description: 'Imagine a peaceful scene to evoke feelings of tranquility.',
      imageUrl: visualizeImage,
      buttonText: 'Start',
      bgColor: '#e6fcff', 
      action: () => console.log('Starting Visualization for Calm...'),
    },
  ];

 
  const [selectedDuration1, setSelectedDuration1] = useState('5-min meditation');
 
  const [selectedDuration2, setSelectedDuration2] = useState('10-min meditation');

  const durationOptions = ['2-min meditation', '5-min meditation', '10-min meditation'];

  const DurationToggle = ({ options, selectedOption, onSelect }) => (
    <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`
            px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-200
            ${selectedOption === option
              ? 'bg-indigo-500 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );

 
  const MeditationBlock = ({ title, description, imageUrl, buttonText, action, bgColor }) => (
    <div
      style={{ backgroundColor: bgColor }} 
      className="p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center w-full"
    >
      <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button
          onClick={action}
          className="px-5 py-2 bg-[#2d2c2b] text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 text-sm"
        >
          {buttonText}
        </button>
      </div>
      <div className="w-full sm:w-auto flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto sm:w-80 sm:h-40 object-cover rounded-lg shadow-sm"
        />
      </div>
    </div>
  );

  return (
    
    <div className="w-full bg-white rounded-3xl shadow-lg">
    
      <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-2 px-4 lg:px-8 mt-8">Mini Meditations</h1>
      
      <p className="text-gray-600 text-lg mb-8 px-4 lg:px-8">
        Find a moment of calm with our curated selection of short guided meditations.
      </p>

      
      <div className="flex flex-col gap-6 mb-12 p-4 lg:p-8 pt-0">
        {meditationSections.map((block) => (
          <MeditationBlock
            key={block.id}
            title={block.title}
            description={block.description}
            imageUrl={block.imageUrl}
            buttonText={block.buttonText}
            action={block.action}
            bgColor={block.bgColor} 
          />
        ))}
      </div>

   
      <DurationToggle
        options={durationOptions}
        selectedOption={selectedDuration1}
        onSelect={setSelectedDuration1}
      />

      
      <div className="flex flex-col gap-6 mb-12 p-4 lg:p-8 pt-0">
        {focusSections.map((block) => (
          <MeditationBlock
            key={block.id}
            title={block.title}
            description={block.description}
            imageUrl={block.imageUrl}
            buttonText={block.buttonText}
            action={block.action}
            bgColor={block.bgColor} 
          />
        ))}
      </div>

      
      <DurationToggle
        options={durationOptions}
        selectedOption={selectedDuration2}
        onSelect={setSelectedDuration2}
      />

      
      <div className="flex flex-col gap-6 mb-12 p-4 lg:p-8 pt-0">
        {deepRelaxationSections.map((block) => (
          <MeditationBlock
            key={block.id}
            title={block.title}
            description={block.description}
            imageUrl={block.imageUrl}
            buttonText={block.buttonText}
            action={block.action}
            bgColor={block.bgColor} 
          />
        ))}
      </div>
    </div>
  );
};

export default MiniMeditation;
