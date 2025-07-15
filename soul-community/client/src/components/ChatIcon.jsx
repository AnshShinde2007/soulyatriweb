import React from 'react';

const ChatIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#ff7b00',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '28px',
        cursor: 'pointer',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)'
      }}
    >
      💬
    </div>
  );
};

export default ChatIcon;
