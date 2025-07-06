"use client"

import { useState } from "react"
import TherapistAppointments from "./TherapistAppointments"
import TherapistSessionRecords from "./TherapistSessionRecords"
import TherapistSettings from "./TherapistSettings"

const TherapistDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Sample data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      name: "Anya Kapoor",
      time: "Gemini, 02/12/1993",
      image: "/placeholder.svg?height=80&width=80",
      bgColor: "bg-orange-100",
    },
    {
      id: 2,
      name: "Rohan Verma",
      time: "Gemini, 02/12/1993",
      image: "/placeholder.svg?height=80&width=80",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      name: "Divya Patel",
      time: "Gemini, 02/22/1993",
      image: "/placeholder.svg?height=80&width=80",
      bgColor: "bg-orange-100",
    },
  ]

  // Sample data for client inquiries
  const clientInquiries = [
    {
      id: 1,
      clientName: "Arjun Singh",
      question: "How can I manage my anxiety?",
      status: "New",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      clientName: "Kavya Iyer",
      question: "Need help with relationship issues",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      clientName: "Vikram Rao",
      question: "Seeking advice on career change",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
    },
  ]

  // Custom Bar Chart Component for Zodiac Signs
  const ZodiacChart = () => {
    const zodiacData = [
      { sign: "Aries", count: 12 },
      { sign: "Taurus", count: 8 },
      { sign: "Gemini", count: 15 },
      { sign: "Cancer", count: 10 },
      { sign: "Leo", count: 6 },
      { sign: "Virgo", count: 14 },
    ]

    const maxCount = Math.max(...zodiacData.map((d) => d.count))

    return (
      <div className="h-64 p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Client Distribution by SoulYatri</h3>
        <div className="flex items-end justify-between h-48 space-x-2">
          {zodiacData.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-8 bg-blue-400 rounded-t" style={{ height: `${(item.count / maxCount) * 180}px` }} />
              <span className="text-xs text-gray-600 transform -rotate-45 origin-center">{item.sign}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (activeTab === "appointments") {
    return <TherapistAppointments onBack={() => setActiveTab("dashboard")} />
  }

  if (activeTab === "session-records") {
    return <TherapistSessionRecords onBack={() => setActiveTab("dashboard")} />
  }

  if (activeTab === "settings") {
    return <TherapistSettings onBack={() => setActiveTab("dashboard")} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <span className="font-medium text-gray-800">Priya Sharma</span>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "dashboard" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab("session-records")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "session-records" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Session Records</span>
              </button>

              <button
                onClick={() => setActiveTab("appointments")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "appointments" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Appointments</span>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "settings" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Sessions */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Sessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className={`${session.bgColor} rounded-lg p-4 text-center`}>
                      <img
                        src={session.image || "/placeholder.svg"}
                        alt={session.name}
                        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                      />
                      <h3 className="font-semibold text-gray-800">{session.name}</h3>
                      <p className="text-sm text-gray-600">{session.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Inquiry Queue */}
              <div className="bg-white rounded-lg shadow p-6 mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Client Inquiry Queue</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Client Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Question</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clientInquiries.map((inquiry) => (
                        <tr key={inquiry.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-800">{inquiry.clientName}</td>
                          <td className="py-3 px-4 text-gray-600">{inquiry.question}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${inquiry.statusColor}`}>
                              {inquiry.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Client Distribution Chart */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <ZodiacChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TherapistDashboard
