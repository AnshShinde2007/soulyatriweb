"use client"

import { useState, useRef, useEffect } from "react"

const SoulYatriBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi Pooja, How can I help you?", sender: "bot", timestamp: new Date() },
  ])
  const [inputText, setInputText] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [negativePromptCount, setNegativePromptCount] = useState(0)
  const [showFrustrationPopup, setShowFrustrationPopup] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const negativeKeywords = [
    "bad",
    "terrible",
    "awful",
    "hate",
    "frustrated",
    "angry",
    "upset",
    "disappointed",
    "useless",
    "horrible",
  ]

  const isNegativeMessage = (text) => {
    return negativeKeywords.some((keyword) => text.toLowerCase().includes(keyword))
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])

    // Check for negative sentiment
    if (isNegativeMessage(inputText)) {
      const newCount = negativePromptCount + 1
      setNegativePromptCount(newCount)

      if (newCount >= 5) {
        setTimeout(() => {
          setShowFrustrationPopup(true)
        }, 1000)
      }
    }

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand how you're feeling. Let me help you work through this. Can you tell me more about what's bothering you?",
        sender: "bot",
        timestamp: new Date(),
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

  return (
    <div className="fixed inset-0 z-50 bg-white flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300 bg-gray-800 text-white flex flex-col h-full`}
      >
        {/* Header with close and toggle */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
            title="Close Chat"
          >
            ✕
          </button>
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
              title="Collapse Sidebar"
            >
              ◀
            </button>
          )}
        </div>

        {/* Sidebar content */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarOpen ? (
            <>
              <button className="w-full text-left px-4 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm">
                New Chat
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                Search Chats
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                Chat History
              </button>
            </>
          ) : (
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-full p-3 hover:bg-gray-700 rounded-lg transition-colors text-center"
              title="Expand Sidebar"
            >
              ▶
            </button>
          )}
        </div>

        {/* Logout button at bottom */}
        <div className="p-4 border-t border-gray-700">
          {sidebarOpen ? (
            <button className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-lg transition-colors flex items-center text-sm">
              <span className="mr-2">↗</span>
              Logout
            </button>
          ) : (
            <button className="w-full p-3 hover:bg-gray-700 rounded-lg transition-colors text-center" title="Logout">
              ↗
            </button>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white flex-shrink-0">
          <div className="flex items-center space-x-4">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ☰
              </button>
            )}
            <h2 className="text-xl font-semibold">SoulYatri</h2>
          </div>
          <button className="bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
            Book My Soul Sync
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 min-h-0">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xs">AI</span>
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-[#18A2B8] text-white rounded-br-md"
                        : "bg-white text-gray-800 shadow-sm border rounded-bl-md"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 bg-[#18A2B8] rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xs">P</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200 bg-white flex-shrink-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type Something..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#18A2B8] focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-[#18A2B8] text-white rounded-full hover:bg-[#1591a3] transition-colors flex items-center justify-center"
              >
                <span className="transform rotate-45">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frustration Popup */}
      {showFrustrationPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-60 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Noticed some frustration? Let's fix that!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We've seen a few concerns — and we're here to help. Book a quick call with us and we'll personally guide
              you through everything.
            </p>
            <p className="text-gray-600 mb-6 font-medium">Let's make it right, together.</p>
            <div className="space-y-3">
              <button
                onClick={() => setShowFrustrationPopup(false)}
                className="w-full bg-[#FF7B00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Book My Soul Sync
              </button>
              <button
                onClick={() => setShowFrustrationPopup(false)}
                className="w-full text-gray-500 hover:text-gray-700 px-6 py-2 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SoulYatriBot
