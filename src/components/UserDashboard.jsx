"use client"

import { useState } from "react"
import SoulYatriBot from "./SoulYatriBot"
import TherapySession from "./TherapySession"
import HealingToolbox from "./HealingToolbox"

const UserDashboard = () => {
  const [showSoulYatriBot, setShowSoulYatriBot] = useState(false)
  const [showTherapySession, setShowTherapySession] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Custom Bar Chart Component for Mood Distribution
  const MoodDistributionChart = () => {
    const moodData = [
      { mood: "Happy", value: 40, color: "#10B981" },
      { mood: "Calm", value: 30, color: "#3B82F6" },
      { mood: "Neutral", value: 20, color: "#6B7280" },
      { mood: "Sad", value: 10, color: "#EF4444" },
    ]

    const maxValue = Math.max(...moodData.map((d) => d.value))

    return (
      <div className="h-24 sm:h-32 flex items-end justify-between space-x-2">
        {moodData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1 sm:space-y-2 flex-1">
            <div
              className="w-full rounded-t"
              style={{
                height: `${(item.value / maxValue) * 80}px`,
                backgroundColor: item.color,
              }}
            />
            <span className="text-xs text-gray-600">{item.mood}</span>
          </div>
        ))}
      </div>
    )
  }

  // Custom Line Chart Component for Mood Trend
  const MoodTrendChart = () => {
    const trendData = [4.2, 3.8, 4.1, 4.5, 3.9, 4.3, 4.5]
    const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"]

    return (
      <div className="h-24 sm:h-32 relative">
        <svg width="100%" height="100%" className="overflow-visible">
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            points={trendData
              .map((value, index) => `${(index / (trendData.length - 1)) * 100}%,${100 - (value / 5) * 100}%`)
              .join(" ")}
          />
          {trendData.map((value, index) => (
            <circle
              key={index}
              cx={`${(index / (trendData.length - 1)) * 100}%`}
              cy={`${100 - (value / 5) * 100}%`}
              r="3"
              fill="#3B82F6"
            />
          ))}
        </svg>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          {weeks.map((week, index) => (
            <span key={index} className="hidden sm:inline">
              {week}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "therapy-sessions", label: "Therapy Sessions", icon: "👩‍⚕️" },
    { id: "healing-toolbox", label: "Healing Toolbox", icon: "🧰" },
    { id: "my-sessions", label: "My Sessions", icon: "📅" },
    { id: "journal", label: "Journal", icon: "📖" },
    { id: "progress", label: "Progress", icon: "📊" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ]

  const favoriteTools = [
    {
      title: "Mindful Breathing",
      color: "bg-orange-200",
      icon: "🧘‍♀️",
    },
    {
      title: "Gratitude Journal",
      color: "bg-orange-100",
      icon: "📔",
    },
    {
      title: "Sleep Stories",
      color: "bg-teal-200",
      icon: "🌙",
    },
    {
      title: "Guided Meditation",
      color: "bg-gray-200",
      icon: "🧘‍♂️",
    },
  ]

  // Show Healing Toolbox when selected
  if (activeTab === "healing-toolbox") {
    return <HealingToolbox onBack={() => setActiveTab("dashboard")} />
  }

  // Show Therapy Sessions when selected
  if (activeTab === "therapy-sessions") {
    return <TherapySession onClose={() => setActiveTab("dashboard")} />
  }

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:relative z-50 lg:z-auto w-64 bg-white shadow-sm transition-transform duration-300 ease-in-out h-full`}
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

          {/* Navigation */}
          <nav className="space-y-1 sm:space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span className="font-medium text-sm sm:text-base">{item.label}</span>
              </button>
            ))}

            {/* Logout button below settings */}
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <span className="text-base sm:text-lg">🚪</span>
              <span className="font-medium text-sm sm:text-base">Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 text-sm sm:text-base">Hi Aanya 👋</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hidden sm:block">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
            </button>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Healing Progress */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Healing Progress</h2>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-xs sm:text-sm font-medium text-gray-900">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">You're doing great!</p>
            </div>
          </div>

          {/* Emotion & Mood Tracker */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Emotion & Mood Tracker</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Mood Distribution */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <h3 className="font-medium text-gray-700 mb-2 text-sm sm:text-base">Mood Distribution</h3>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">4.2</div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Last 7 Days <span className="text-green-600">+5%</span>
                </p>
                <MoodDistributionChart />
              </div>

              {/* Mood Trend */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <h3 className="font-medium text-gray-700 mb-2 text-sm sm:text-base">Mood Trend</h3>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">4.5</div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Last 30 Days <span className="text-green-600">+3%</span>
                </p>
                <MoodTrendChart />
              </div>
            </div>
          </div>

          {/* Last Activity Summary */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Last Activity Summary</h2>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <p className="text-gray-700 text-sm sm:text-base">
                You completed a 'Mindful Breathing' session yesterday and journaled about your day. Keep up the great
                work!
              </p>
            </div>
          </div>

          {/* Favorite Tools */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Favorite Tools</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {favoriteTools.map((tool, index) => (
                <div
                  key={index}
                  className={`${tool.color} rounded-lg p-4 sm:p-6 text-center cursor-pointer hover:shadow-md transition-shadow`}
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{tool.icon}</div>
                  <h3 className="font-medium text-gray-800 text-xs sm:text-sm">{tool.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Upcoming Sessions</h2>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">Therapy Session with Dr. Maya</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Tomorrow, 3:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">Group Meditation</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Next Week, Monday, 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arohi Chat Snapshot */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Arohi Chat Snapshot</h2>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xs sm:text-sm font-medium">A</span>
                </div>
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">Arohi</p>
                  <p className="text-gray-900 text-sm sm:text-base">How are you feeling today, Aanya?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Sentiment Meter */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Daily Sentiment Meter</h2>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Today's Sentiment</span>
                <span className="text-xs sm:text-sm font-medium text-gray-900">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3 sm:mb-4">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Positive</p>
              <blockquote className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 italic">
                "The mind is everything. What you think you become." - Buddha
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showSoulYatriBot && <SoulYatriBot onClose={() => setShowSoulYatriBot(false)} />}
      {showTherapySession && <TherapySession onClose={() => setShowTherapySession(false)} />}
    </div>
  )
}

export default UserDashboard
