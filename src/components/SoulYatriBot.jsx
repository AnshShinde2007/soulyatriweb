"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const SoulYatriBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! I'm doing great. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      reactions: { thumbsUp: 90, neutral: 5, thumbsDown: 5 },
    },
    {
      id: 2,
      text: "Hi Arohi, how are you today?",
      sender: "user",
      timestamp: new Date(),
      reactions: { thumbsUp: 90, neutral: 5, thumbsDown: 5 },
    },
    {
      id: 3,
      text: "I'm here for you. Want to talk about what's been bothering you?",
      sender: "bot",
      timestamp: new Date(),
      reactions: { thumbsUp: 90, neutral: 5, thumbsDown: 5 },
    },
  ])
  const [inputText, setInputText] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [chats] = useState([
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
    { id: 3, name: "Chat 3" },
  ])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
      reactions: { thumbsUp: 90, neutral: 5, thumbsDown: 5 },
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand how you're feeling. Let me help you work through this. Can you tell me more about what's bothering you?",
        sender: "bot",
        timestamp: new Date(),
        reactions: { thumbsUp: 90, neutral: 5, thumbsDown: 5 },
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)

    setInputText("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleDeleteChat = (chatId) => {
    console.log("Delete chat:", chatId)
  }

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col h-screen w-screen overflow-hidden">
      {/* Fixed Dashboard Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg px-4 py-4 border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent">
            SoulYatri
          </h1>
          <div className="hidden md:flex space-x-8">
            <button className="text-gray-700 hover:text-[#FF7B00] font-medium transition-colors">My Soul Sync</button>
            <button className="text-gray-700 hover:text-[#FF7B00] font-medium transition-colors">
              Therapy Session
            </button>
            <button className="text-gray-700 hover:text-[#FF7B00] font-medium transition-colors">
              Sleep Resources
            </button>
            <button className="text-gray-700 hover:text-[#FF7B00] font-medium transition-colors">
              Healing Toolkit
            </button>
            <button className="text-gray-700 hover:text-[#FF7B00] font-medium transition-colors">Community</button>
            <button className="text-gray-700 hover:text-[#FF7B00] font-medium transition-colors">Blogs</button>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="default"
              className="bg-gradient-to-r from-[#36828c] to-[#6bd7e7] hover:from-[#0E4E57] hover:to-[#A8E1EA] text-white px-6 py-2 rounded-[60px] font-medium"
            >
              Therapy Session
            </Button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Close Chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
            {/* Sidebar Header with Close Button */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Chats</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                title="Close Sidebar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* New Chat Button */}
            <div className="px-6 py-4">
              <Button className="w-full bg-gradient-to-r from-[#FF7B00] to-[#ffb067] hover:from-[#e06f00] hover:to-[#ffe1c4] text-white border border-transparent rounded-[3rem] py-2 px-4 flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>New Chat</span>
              </Button>
            </div>

            {/* Chat List */}
            <div className="flex-1 px-4 space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{chat.name}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteChat(chat.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Welcome Header */}
          <div className="p-6 border-b border-gray-200 bg-white flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 text-center">Welcome to Arohi</h1>
              <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mt-4">
                Arohi is designed to be transparent, competent, secure, and empathetic. We prioritize your privacy and
                ensure your data is protected with end-to-end encryption.
              </p>
            </div>
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Open Sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="space-y-3">
                  <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-start space-x-3 max-w-2xl">
                      {message.sender === "bot" && (
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=32&width=32"
                              alt="Arohi"
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                          <span className="text-xs text-gray-500">Arohi</span>
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-[#36828c] to-[#6bd7e7] text-white rounded-br-md"
                            : "bg-white text-gray-800 shadow-sm border rounded-bl-md"
                        }`}
                      >
                        {message.text}
                      </div>
                      {message.sender === "user" && (
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#36828c] to-[#6bd7e7] rounded-full flex items-center justify-center flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=32&width=32"
                              alt="User"
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                          <span className="text-xs text-gray-500">User</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Reaction Buttons */}
                  <div className={`flex space-x-2 ${message.sender === "user" ? "justify-end mr-12" : "ml-12"}`}>
                    <button className="flex items-center space-x-1 px-2 py-1 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-xs">
                      <span>😊</span>
                      <span className="text-gray-600">{message.reactions.thumbsUp}%</span>
                    </button>
                    <button className="flex items-center space-x-1 px-2 py-1 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-xs">
                      <span>😐</span>
                      <span className="text-gray-600">{message.reactions.neutral}%</span>
                    </button>
                    <button className="flex items-center space-x-1 px-2 py-1 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-xs">
                      <span>😞</span>
                      <span className="text-gray-600">{message.reactions.thumbsDown}%</span>
                    </button>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl p-2">
                <Input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Message Arohi..."
                  className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-500"
                />
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a2 2 0 000-2.828z"
                    />
                  </svg>
                </button>
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-[#36828c] to-[#6bd7e7] hover:to-[#4A8BC2] text-white px-4 py-2 rounded-xl"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoulYatriBot
