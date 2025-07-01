"use client"

import { useNavigate } from "react-router-dom"

const SoulYatriOptionsSection = () => {
  const navigate = useNavigate()

  const options = [
    {
      id: "stress-less",
      title: "Stress less",
      icon: "⚡",
      color: "#FFD700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      hoverColor: "hover:bg-yellow-100",
      route: "/stress-management",
    },
    {
      id: "sleep-soundly",
      title: "Sleep soundly",
      icon: "🌙",
      color: "#8B5CF6",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:bg-purple-100",
      route: "/sleep-improvement",
    },
    {
      id: "manage-anxiety",
      title: "Manage anxiety",
      icon: "🎯",
      color: "#3B82F6",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:bg-blue-100",
      route: "/anxiety-management",
    },
    {
      id: "process-thoughts",
      title: "Process thoughts",
      icon: "🧠",
      color: "#EC4899",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      hoverColor: "hover:bg-pink-100",
      route: "/thought-processing",
    },
    {
      id: "practice-meditation",
      title: "Practice meditation",
      icon: "🧘",
      color: "#F97316",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:bg-orange-100",
      route: "/meditation-practice",
    },
    {
      id: "start-therapy",
      title: "Start therapy",
      icon: "💬",
      color: "#06B6D4",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      hoverColor: "hover:bg-cyan-100",
      route: "/therapy-matching",
    },
  ]

  const handleOptionClick = (route) => {
    navigate(route)
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What kind of SoulYatri are you looking for?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.route)}
              className={`${option.bgColor} ${option.borderColor} ${option.hoverColor} border-2 rounded-xl p-6 md:p-8 text-left transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-sm"
                    style={{ backgroundColor: option.color + "20" }}
                  >
                    {option.icon}
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-gray-800">{option.title}</span>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoulYatriOptionsSection
