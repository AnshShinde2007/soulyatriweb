"use client"
import {
  Home,
  Calendar,
  Users,
  HelpCircle,
  Bell,
  User,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const DashboardOverview = () => {
  const statsCards = [
    { title: "Total Employees", value: "250", change: "+10%" },
    { title: "Tasks Completed", value: "1,200", change: "+5%" },
    { title: "Active Projects", value: "15", change: "+2%" },
    { title: "Support Tickets", value: "30", change: "-3%" },
  ]

  const upcomingSessions = [
    {
      client: "Client Maya Kapoor",
      therapist: "Dr. Sarah Johnson",
      date: "July 10, 2024",
      time: "10:00 AM - 11:00 AM",
      image: "/placeholder.svg",
    },
    {
      client: "Client Ethan Chen",
      therapist: "Dr. Michael Brown",
      date: "July 12, 2024",
      time: "2:00 PM - 3:00 PM",
      image: "/placeholder.svg",
    },
    {
      client: "Client Olivia Rodriguez",
      therapist: "Dr. Emily Davis",
      date: "July 14, 2024",
      time: "4:00 PM - 5:00 PM",
      image: "/placeholder.svg",
    },
  ]

  const clientInquiries = [
    { client: "Chloe Lee", queries: "Anxiety + relationship", expert: "Ms. Divya Verma", type: "Astrologer", status: "Pending" },
    { client: "Owen Clark", queries: "Social anxiety", expert: "Dr. Aman Singh", type: "Therapist", status: "Assigned" },
    { client: "Isabella Green", queries: "Birth chart", expert: "Ms. Divya Verma", type: "Astrologer", status: "Completed" },
    { client: "Nolan Baker", queries: "Career guidance", expert: "Dr. Rohan Patel", type: "Therapist", status: "Pending" },
  ]

  const sessionData = [
    { name: "CBT", value: 20 },
    { name: "Zodiac Match", value: 40 },
    { name: "Career Guidance", value: 40 },
  ]

  const zodiacIssues = [
    { name: "Love", value: 90 },
    { name: "Career", value: 80 },
    { name: "Stress", value: 65 },
    { name: "Anxiety", value: 50 },
    { name: "Relationships", value: 40 },
  ]

  const experts = [
    { city: "Mumbai", lead: "Dr. Vikram Joshi", count: 12 },
    { city: "Bangalore", lead: "Ms. PriyaVer", count: 10 },
    { city: "Chennai", lead: "Mr. Karthik Subramanian", count: 8 },
  ]

  const weeklySchedule = [
    { day: "Monday", availability: "9 AM - 6 PM" },
    { day: "Tuesday", availability: "9 AM - 6 PM" },
    { day: "Wednesday", availability: "9 AM - 6 PM" },
    { day: "Thursday", availability: "9 AM - 6 PM" },
    { day: "Friday", availability: "9 AM - 6 PM" },
    { day: "Saturday", availability: "10 AM - 4 PM" },
    { day: "Sunday", availability: "Closed" },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
<aside className="w-64 bg-[#edf8fe] border-r border-gray-200 min-h-screen flex flex-col justify-between rounded-tr-3xl rounded-br-3xl">
  <div className="p-6 space-y-8">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="logo" className="h-6" />
      <span className="text-xl font-semibold text-amber-600">SoulYatri</span>
    </div>

    {/* Avatar */}
    <div className="flex items-center space-x-3">
      <img src="/placeholder.svg" className="w-10 h-10 rounded-full" />
      <div>
        <p className="text-sm font-medium text-gray-800">Dr. Arya Sharma</p>
        <p className="text-xs text-gray-500">Admin</p>
      </div>
    </div>

    {/* Navigation */}
    <nav className="space-y-2">
      {[
        { icon: Home, label: "Dashboard", active: true },
        { icon: Calendar, label: "Appointments" },
        { icon: Users, label: "Specialists" },
        { icon: HelpCircle, label: "Client Management" },
        { icon: User, label: "Head Office" },
      ].map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              item.active
                ? "bg-[#9aafec] text-black"
                : "text-gray-600 "
            }`}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </div>
        )
      })}
    </nav>
  </div>

  {/* Admin Button at Bottom */}
  <div className="p-6">
    <button className="w-full bg-[#484747] text-white py-2 rounded-full text-sm">
      Admin
    </button>
  </div>
</aside>


      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Head Office Dashboard</p>
            <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#9aafec] text- rounded-lg text-sm">Notification</button>
            <User size={20} className="text-gray-600" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-2 border-orange-200 p-4 rounded-lg text-center"
            >
              <h3 className="text-sm font-medium text-gray-600">{card.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
              <p
                className={`text-sm font-medium ${
                  card.change.startsWith("+") ? "text-green-600" : "text-red-600"
                }`}
              >
                {card.change}
              </p>
            </div>
          ))}
        </div>

        {/* Upcoming Sessions */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Sessions</h2>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {upcomingSessions.map((session, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-orange-100 p-4 flex justify-center">
                <img src={session.image} alt={session.client} className="w-20 h-20 rounded-full" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-800">{session.client}</p>
                <p className="text-sm text-gray-500">{session.therapist}</p>
                <p className="text-sm text-gray-500">{session.date}</p>
                <p className="text-sm text-gray-500">{session.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Inquiry Queue */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Client Inquiry Queue</h2>
        <div className="bg-[#edf8fe] rounded-lg shadow-sm overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead className=" bg-[#edf8fe] text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Client</th>
                <th className="px-6 py-3 text-left">Question</th>
                <th className="px-6 py-3 text-left">Assigned Expert</th>
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {clientInquiries.map((item, index) => (
                <tr key={index} >
                  <td className="px-6 py-3">{item.client}</td>
                  <td className="px-6 py-3 text-gray-600">{item.queries}</td>
                  <td className="px-6 py-3">{item.expert}</td>
                  <td className="px-6 py-3">{item.type}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Assigned"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Analytics */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Analytics</h2>
        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* Session Type */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-700 mb-4">Session Type Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sessionData}>
                <XAxis dataKey="name" />
                <Bar dataKey="value" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Popular Zodiac Signs */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-700 mb-4">Popular Zodiac Signs / Therapy Issues</h3>
            <div className="space-y-2">
              {zodiacIssues.map((issue, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="w-24 text-sm text-gray-600">{issue.name}</span>
                  <div className="bg-gray-200 h-2 w-full rounded-full">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: `${issue.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branch Info */}
        <div className="bg-[#edf8fe] rounded-lg shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead className="bg-[#edf8fe] text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">City</th>
                <th className="px-6 py-3 text-left">Branch Lead</th>
                <th className="px-6 py-3 text-left">Active Experts</th>
              </tr>
            </thead>
            <tbody>
              {experts.map((branch, index) => (
                <tr key={index} >
                  <td className="px-6 py-3">{branch.city}</td>
                  <td className="px-6 py-3">{branch.lead}</td>
                  <td className="px-6 py-3">{branch.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Admins", count: "5" },
            { label: "Active Therapists", count: "20" },
            { label: "Active Astrologers", count: "15" },
            { label: "Support Staff", count: "10" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 text-center rounded-lg shadow-sm">
              <h4 className="text-sm text-gray-600">{item.label}</h4>
              <p className="text-xl font-bold text-gray-800">{item.count}</p>
            </div>
          ))}
        </div>

        {/* Weekly Schedule */}
        <div className="bg-[#edf8fe] rounded-lg shadow-sm overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-[#edf8fe] text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Day</th>
                <th className="px-6 py-3 text-left">Availability</th>
              </tr>
            </thead>
            <tbody>
              {weeklySchedule.map((slot, index) => (
                <tr key={index} >
                  <td className="px-6 py-3">{slot.day}</td>
                  <td className="px-6 py-3">{slot.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Image */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Meditation"
            className="w-full h-48 object-cover"
          />
        </div>
      </main>
    </div>
  )
}

export default DashboardOverview
