import React, { useState } from 'react';
import ChatIcon from './components/ChatIcon';
import Chatbot from './components/Chatbot';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
      <ChatIcon onClick={() => setShowChat(true)} />
    </div>
  );
}

export default App;
