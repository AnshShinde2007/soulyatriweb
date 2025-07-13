"use client"

import { useState } from "react"
import { Search, ChevronLeft, ChevronRight, Home, FileText, Calendar, Settings } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const AppointmentsDashboard = () => {
  const [currentMonth, setCurrentMonth] = useState("July 2024")
  const [nextMonth, setNextMonth] = useState("August 2024")

  const julyDays = [
    ["S", "M", "T", "W", "T", "F", "S"],
    ["", "1", "2", "3", "4", "5", "6"],
    ["7", "8", "9", "10", "11", "12", "13"],
    ["14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27"],
    ["28", "29", "30", "", "", "", ""],
  ]

  const augustDays = [
    ["S", "M", "T", "W", "T", "F", "S"],
    ["", "", "", "", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16", "17"],
    ["18", "19", "20", "21", "22", "23", "24"],
    ["25", "26", "27", "28", "29", "30", "31"],
  ]

  const upcomingAppointments = [
    {
      name: "Sophia Turner",
      time: "10:00 AM - 11:00 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Ethan Carter",
      time: "11:30 AM - 12:30 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Chloe Lin",
      time: "2:00 PM - 3:00 PM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const appointmentHistory = [
    {
      clientName: "Sophia Turner",
      date: "June 20, 2024",
      time: "10:00 AM",
      sessionType: "Individual Therapy",
      status: "Completed",
      revenue: "$150",
    },
    {
      clientName: "Ethan Carter",
      date: "June 20, 2024",
      time: "11:30 AM",
      sessionType: "Couples Therapy",
      status: "Completed",
      revenue: "$200",
    },
    {
      clientName: "Chloe Lin",
      date: "June 20, 2024",
      time: "2:00 PM",
      sessionType: "Individual Therapy",
      status: "Completed",
      revenue: "$150",
    },
  ]

  const CalendarGrid = ({ days, highlightDay = null }) => (
    <div className="grid grid-cols-7 gap-1 text-sm">
      {days.map((week, weekIndex) =>
        week.map((day, dayIndex) => (
          <div
            key={`${weekIndex}-${dayIndex}`}
            className={`h-8 flex items-center justify-center ${
              weekIndex === 0
                ? "font-medium text-gray-600"
                : day === highlightDay
                  ? "bg-[#e89856] text-white rounded-full"
                  : day === ""
                    ? ""
                    : "hover:bg-gray-100 rounded cursor-pointer"
            }`}
          >
            {day}
          </div>
        ))
      )}
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#edf8fe] border-r border-gray-200 min-h-screen">
        <div className="p-6 space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🕉</span>
            </div>
            <span className="text-xl font-semibold text-amber-600">SoulYatri</span>
          </div>

          {/* Avatar */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-indigo-100 text-indigo-600">PS</AvatarFallback>
            </Avatar>
            <span className="font-medium text-slate-900">Priya Sharma</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { icon: Home, label: "Dashboard", active: false },
              { icon: FileText, label: "Session Records", active: false },
              { icon: Calendar, label: "Appointments", active: true },
              { icon: Settings, label: "Settings", active: false },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    item.active ? "bg-[#9aafec] text-indigo-900" : "text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Appointments</h1>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by client name"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Calendar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <div className="flex space-x-16">
              <h2 className="text-xl font-semibold text-gray-800">{currentMonth}</h2>
              <h2 className="text-xl font-semibold text-gray-800">{nextMonth}</h2>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CalendarGrid days={julyDays} highlightDay="5" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CalendarGrid days={augustDays} />
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Appointments</h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={appointment.avatar || "/placeholder.svg"}
                  alt={appointment.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{appointment.name}</p>
                  <p className="text-gray-600 text-sm">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment History */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment History</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Client Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Session Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Per-Person Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointmentHistory.map((appointment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-800">{appointment.clientName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{appointment.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{appointment.time}</td>
                    <td className="px-6 py-4 text-sm text-blue-600">{appointment.sessionType}</td>
                    <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {appointment.status}
                    </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">{appointment.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentsDashboard
