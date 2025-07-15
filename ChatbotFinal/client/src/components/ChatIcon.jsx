import React from 'react';

const ChatIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-5 right-5 bg-[#ff7b00] text-white rounded-full
                 w-16 h-16 flex items-center justify-center text-3xl cursor-pointer
                 shadow-lg hover:scale-105 transition-transform duration-200 z-[1000]"
    >
      💬
    </div>
  );
};

export default ChatIcon;
