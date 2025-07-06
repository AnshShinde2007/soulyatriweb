"use client"

import { useState } from "react"

const HealingToolbox = ({ onBack }) => {
  const [selectedMood, setSelectedMood] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const quickLinks = [
    { id: "therapist", label: "Therapist Sessions", icon: "👥" },
    { id: "astrologer", label: "Astrologer Guidance", icon: "🌙" },
    { id: "arohi", label: "Arohi AI", icon: "🤖" },
    { id: "sound", label: "Soothing Sound Space", icon: "🎵" },
    { id: "meditation", label: "Mini Meditations", icon: "🧘‍♀️" },
    { id: "journaling", label: "Daily Journaling", icon: "📝" },
    { id: "emotion", label: "Emotion & Sentiment Tracker", icon: "💝" },
  ]

  const healingTools = [
    {
      id: "therapist",
      title: "Therapist Sessions",
      rating: 4.8,
      description: "Connect with licensed therapists for personalized support.",
      buttonText: "Book Now",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-04%20135440-d2zl1PcHKLhLn8SQ67hngE5k7Z77CH.png",
      bgColor: "bg-orange-100",
    },
    {
      id: "astrologer",
      title: "Astrologer Guidance",
      rating: 4.6,
      description: "Gain insights into your life path with expert astrologers.",
      buttonText: "Explore",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-04%20135440-d2zl1PcHKLhLn8SQ67hngE5k7Z77CH.png",
      bgColor: "bg-blue-100",
    },
    {
      id: "arohi",
      title: "Arohi AI",
      rating: 4.9,
      description: "Your AI companion for instant support and guidance.",
      buttonText: "Chat Now",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-04%20135451-5ywerBHrXRLThz4BW4RCHNFm8jU7bf.png",
      bgColor: "bg-gray-100",
    },
    {
      id: "sound",
      title: "Soothing Sound Space",
      rating: 4.7,
      description: "Relax and unwind with calming soundscapes and music.",
      buttonText: "Listen",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-04%20135451-5ywerBHrXRLThz4BW4RCHNFm8jU7bf.png",
      bgColor: "bg-orange-100",
    },
    {
      id: "meditation",
      title: "Mini Meditations",
      rating: 4.5,
      description: "Quick guided meditations to center yourself throughout the day.",
      buttonText: "Meditate",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-04%20135451-5ywerBHrXRLThz4BW4RCHNFm8jU7bf.png",
      bgColor: "bg-green-100",
    },
    {
      id: "journaling",
      title: "Daily Journaling",
      rating: 4.6,
      description: "Reflect on your thoughts and emotions with guided prompts.",
      buttonText: "Start Journaling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-04%20135451-5ywerBHrXRLThz4BW4RCHNFm8jU7bf.png",
      bgColor: "bg-yellow-100",
    },
    {
      id: "emotion",
      title: "Emotion & Sentiment Tracker",
      rating: 4.7,
      description: "Track your emotional well-being and identify patterns.",
      buttonText: "Track Now",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-04%20135451-5ywerBHrXRLThz4BW4RCHNFm8jU7bf.png",
      bgColor: "bg-pink-100",
    },
  ]

  const moods = ["Happy", "Calm", "Neutral", "Anxious", "Sad"]

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar - Same UI as Dashboard */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:relative z-50 lg:z-auto w-64 bg-white shadow-sm flex-shrink-0 transition-transform duration-300 ease-in-out h-full`}
      >
        <div className="p-4 sm:p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">S</span>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent">
                SoulYatri
              </span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* User Info */}
          <div className="mb-6 sm:mb-8">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Aanya</h3>
            <p className="text-xs sm:text-sm text-gray-600">Healing Streak: 7 days</p>
          </div>

          {/* Back to Dashboard Button */}
          <div className="mb-4 sm:mb-6">
            <button
              onClick={onBack}
              className="w-full bg-gradient-to-r from-[#FF7B00] to-[#ffb067] hover:from-[#e06f00] hover:to-[#ffe1c4] text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>←</span>
              <span>Back to Dashboard</span>
            </button>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4">Quick Links</h3>
            <nav className="space-y-1 sm:space-y-2">
              {quickLinks.map((item) => (
                <button
                  key={item.id}
                  className="w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <span className="text-base sm:text-lg">{item.icon}</span>
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Book Consultation Button */}
          <button className="w-full bg-gradient-to-r from-[#17A2B7] to-[#20B2C7] hover:from-[#158A9E] hover:to-[#1A9FB4] text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm">
            Book Your Next Consultation
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-4 sm:space-x-8 mb-2">
              <span className="text-xs sm:text-sm text-gray-600">Home</span>
              <span className="text-xs sm:text-sm text-gray-600">Toolbox</span>
              <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">Journal</span>
              <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">Progress</span>
              <span className="text-xs sm:text-sm text-gray-600 hidden md:inline">Community</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hidden sm:block">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                />
              </svg>
            </button>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-gradient-to-r from-[#FF7B00] to-[#ffb067] hover:from-[#e06f00] hover:to-[#ffe1c4] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
            <p className="text-blue-600 mb-4 sm:mb-6 text-sm sm:text-base">How are you feeling today?</p>

            {/* Progress Bar */}
            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm text-gray-600">You've completed 70% of your healing tools</span>
                <span className="text-xs sm:text-sm font-medium text-gray-900">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>

          {/* Healing Toolbox Report */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Healing Toolbox Report</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Healing_Toolbox_Report.pdf</p>
                  <p className="text-xs sm:text-sm text-gray-500">1.2 MB • Updated 2 days ago</p>
                </div>
              </div>
              <button className="sm:ml-auto px-3 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50">
                Preview
              </button>
            </div>

            {/* Mood Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    selectedMood === mood ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button className="px-4 sm:px-6 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 text-sm sm:text-base">
                Talk to Arohi AI
              </button>
              <button className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 text-sm sm:text-base">
                Start Journaling
              </button>
              <button className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 text-sm sm:text-base">
                Begin Meditation
              </button>
            </div>
          </div>

          {/* Your Healing Toolbox */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Your Healing Toolbox</h2>
            <div className="space-y-4 sm:space-y-6">
              {healingTools.map((tool) => (
                <div key={tool.id} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-base sm:text-lg font-semibold text-gray-900">{tool.rating}</span>
                        <span className="text-yellow-400">★</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                      <p className="text-gray-600 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">{tool.description}</p>
                      <button className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 text-sm sm:text-base">
                        {tool.buttonText}
                      </button>
                    </div>
                    <div
                      className={`w-full lg:w-48 h-24 sm:h-32 ${tool.bgColor} rounded-lg flex items-center justify-center lg:ml-6`}
                    >
                      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-xl sm:text-2xl">🎨</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealingToolbox
