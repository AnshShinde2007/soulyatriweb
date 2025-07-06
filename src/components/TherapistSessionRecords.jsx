"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const TherapistSessionRecords = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [dateRange, setDateRange] = useState("all")
  const [sessionType, setSessionType] = useState("all")

  const sessionRecords = [
    {
      id: 1,
      clientName: "Sophia Carter",
      sessionDate: "2024-07-20",
      sessionType: "Video",
      numberOfSessions: 5,
      videoRecording: "View",
      suggestedExercises: "Breathing exercises, mindfulness app",
      report: "Download",
      notesSummary: "Reviewed progress on anxiety management techniques.",
      download: "Download",
    },
    {
      id: 2,
      clientName: "Ethan Bennett",
      sessionDate: "2024-07-18",
      sessionType: "In-Person",
      numberOfSessions: 3,
      videoRecording: "N/A",
      suggestedExercises: "Career assessment tools, time management tools",
      report: "Download",
      notesSummary: "Discussed career goals and strategies for work-life balance.",
      download: "Download",
    },
    {
      id: 3,
      clientName: "Olivia Hayes",
      sessionDate: "2024-07-15",
      sessionType: "Video",
      numberOfSessions: 7,
      videoRecording: "View",
      suggestedExercises: "Communication skills workshop, relationship workbook",
      report: "Download",
      notesSummary: "Explored relationship dynamics and communication patterns.",
      download: "Download",
    },
    {
      id: 4,
      clientName: "Liam Foster",
      sessionDate: "2024-07-12",
      sessionType: "In-Person",
      numberOfSessions: 2,
      videoRecording: "N/A",
      suggestedExercises: "Grief support group information, coping strategies guide",
      report: "Download",
      notesSummary: "Addressed grief and loss, developed coping mechanisms.",
      download: "Download",
    },
    {
      id: 5,
      clientName: "Ava Morgan",
      sessionDate: "2024-07-10",
      sessionType: "Video",
      numberOfSessions: 4,
      videoRecording: "View",
      suggestedExercises: "Stress reduction techniques, sleep hygiene tips",
      report: "Download",
      notesSummary: "Developed strategies for managing stress and improving sleep.",
      download: "Download",
    },
  ]

  const filteredRecords = sessionRecords.filter((record) => {
    const matchesSearch = record.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = sessionType === "all" || record.sessionType.toLowerCase() === sessionType.toLowerCase()
    return matchesSearch && matchesType
  })

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
                onClick={() => window.history.back()}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors"
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

              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left bg-blue-100 text-blue-700 transition-colors">
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
                onClick={() => (window.location.href = "/therapist-dashboard")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors"
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
                onClick={() => (window.location.href = "/therapist-dashboard")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors"
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Session Records</h1>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <Input
                  type="text"
                  placeholder="Search by client name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-100 border-none"
                />
              </div>

              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 bg-gray-100 border-none rounded-lg"
              >
                <option value="all">Date Range</option>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="year">Last Year</option>
              </select>

              <select
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
                className="px-4 py-2 bg-gray-100 border-none rounded-lg"
              >
                <option value="all">Session Type</option>
                <option value="video">Video</option>
                <option value="in-person">In-Person</option>
              </select>
            </div>

            {/* Session Records Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Client Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Session Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Session Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Number of Sessions</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Video Recording</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Suggested Exercises/Resources</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Report</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Notes Summary</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.map((record) => (
                      <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-800 font-medium">{record.clientName}</td>
                        <td className="py-4 px-4 text-gray-600">{record.sessionDate}</td>
                        <td className="py-4 px-4 text-gray-600">{record.sessionType}</td>
                        <td className="py-4 px-4 text-gray-600">{record.numberOfSessions}</td>
                        <td className="py-4 px-4">
                          {record.videoRecording === "View" ? (
                            <Button className="text-blue-600 hover:text-blue-800 text-sm p-0" variant="link">
                              View
                            </Button>
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-gray-600 max-w-xs">
                          <div className="truncate" title={record.suggestedExercises}>
                            {record.suggestedExercises}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Button className="text-blue-600 hover:text-blue-800 text-sm p-0" variant="link">
                            Download
                          </Button>
                        </td>
                        <td className="py-4 px-4 text-gray-600 max-w-xs">
                          <div className="truncate" title={record.notesSummary}>
                            {record.notesSummary}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Button className="text-blue-600 hover:text-blue-800 text-sm p-0" variant="link">
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TherapistSessionRecords
