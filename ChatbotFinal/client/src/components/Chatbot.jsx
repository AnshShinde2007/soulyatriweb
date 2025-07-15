import React, { useState, useRef, useEffect } from 'react';

import { db } from '../firebase';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp
} from 'firebase/firestore';
import axios from 'axios';


const Chatbot = ({ onClose }) => { 
  const [name, setName] = useState('');
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const userId = 'test_user_1'; 

  const handleSubmit = async () => {
    if (name) {
    
      const userRef = doc(db, 'users', userId);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        await updateDoc(userRef, { lastUsed: serverTimestamp() });
      } else {
        await setDoc(userRef, {
          name,
          lastUsed: serverTimestamp()
        });
      }
      setMessages([{ sender: 'bot', text: 'How are you feeling today?' }]);
      setSubmitted(true);
      setShowOptions(true);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToAI = async (text) => {
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setIsTyping(true);
    setUserInput('');

    try {
      const res = await axios.post('http://localhost:5000/ask-ai', {
        userMessage: text,
        userName: name 
      });

      const reply = res.data.reply;
      const botReply = { sender: 'bot', text: reply };

      setMessages((prev) => [...prev, botReply]);

     
      const messageRef = doc(db, 'messages', userId);
      await setDoc(
        messageRef,
        {
          name,
          chat: arrayUnion({
            text,
            response: reply,
            timestamp: new Date()
          })
        },
        { merge: true }
      );
    } catch (err) {
      console.error('AI error:', err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);
    if (option === 'book') {
      window.location.href = '/book-consultation';
    } else if (option === 'other') {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'How can I help you?' }]);
    } else {
      sendToAI(option);
    }
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;
    await sendToAI(userInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="fixed bottom-20 right-5 w-[90%] max-w-md h-[85%] max-h-[600px]
                 bg-[url('./components/background.jpeg')] bg-cover bg-center
                 border border-gray-300 rounded-xl shadow-2xl p-3
                 flex flex-col z-[999] backdrop-blur-sm overflow-hidden
                 sm:w-[95%] sm:h-[80%]" 
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2.5">
        <div className="font-bold text-lg text-black">Yatri Bot</div>
        <button onClick={onClose} className="bg-none border-none text-lg cursor-pointer">✖</button>
      </div>

      {!submitted ? (
        // Initial name input screen
        <div className="flex flex-col gap-2.5">
          <p className="text-black">
            <b className="font-bold">🧘 Hi! I’m YatriBot, your Soul Yatri assistant.</b>
            <br />
            Please enter your name to begin:
          </p>
          <input
            className="p-3 text-base rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff69b4]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <button
            onClick={handleSubmit}
            className="px-3.5 py-2.5 rounded-lg bg-[#ff69b4] text-white border-none cursor-pointer shadow-md
                       hover:bg-[#ff85c1] transition-colors duration-200"
          >
            Start Chat
          </button>
        </div>
      ) : (
        // Chat interface
        <>
          <div className="flex-1 overflow-y-auto mb-2.5 pr-2"> {/* Added pr-2 for scrollbar space */}
            {messages.map((msg, i) => (
              <div key={i} className={`my-1.5 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block px-3.5 py-2.5 rounded-xl max-w-[80%] mb-2.5 text-black break-words
                             ${msg.sender === 'user' ? 'bg-[#ffb6c1]' : 'bg-[#ffe4e1]'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />

            {isTyping && (
              <div className="italic text-gray-500 text-sm mt-1">
                YatriBot is typing...
              </div>
            )}
          </div>

          {showOptions && (
            // Options for initial bot reply
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => handleOptionClick('What to know about Soul Yatri')}
                className="px-3.5 py-2.5 rounded-lg bg-[#ff69b4] text-white border-none cursor-pointer shadow-md
                           hover:bg-[#ff85c1] transition-colors duration-200"
              >
                What to know about Soul Yatri
              </button>
              <button
                onClick={() => handleOptionClick('book')}
                className="px-3.5 py-2.5 rounded-lg bg-[#ff69b4] text-white border-none cursor-pointer shadow-md
                           hover:bg-[#ff85c1] transition-colors duration-200"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => handleOptionClick('Our Services')}
                className="px-3.5 py-2.5 rounded-lg bg-[#ff69b4] text-white border-none cursor-pointer shadow-md
                           hover:bg-[#ff85c1] transition-colors duration-200"
              >
                Our Services
              </button>
              <button
                onClick={() => handleOptionClick('other')}
                className="px-3.5 py-2.5 rounded-lg bg-[#ff69b4] text-white border-none cursor-pointer shadow-md
                           hover:bg-[#ff85c1] transition-colors duration-200"
              >
                Others
              </button>
            </div>
          )}

          {!showOptions && (
            // Message input area
            <div className="flex gap-2 mt-auto">
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message"
                className="flex-1 p-2.5 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff69b4]"
              />
              <button
                onClick={handleSend}
                className="px-3.5 py-2.5 rounded-lg bg-[#ff69b4] text-white border-none cursor-pointer shadow-md
                           hover:bg-[#ff85c1] transition-colors duration-200"
              >
                Send
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Chatbot;
