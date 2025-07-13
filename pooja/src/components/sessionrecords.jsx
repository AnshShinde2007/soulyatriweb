import { Search, ChevronDown, Home, Calendar, FileText, Settings } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function SessionRecords() {
  const sessionData = [
    {
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
      clientName: "Ethan Bennett",
      sessionDate: "2024-07-18",
      sessionType: "In-Person",
      numberOfSessions: 3,
      videoRecording: "N/A",
      suggestedExercises: "Career assessment, time management tools",
      report: "Download",
      notesSummary: "Discussed career goals and strategies for work-life balance.",
      download: "Download",
    },
    {
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
      clientName: "Liam Foster",
      sessionDate: "2024-07-12",
      sessionType: "In-Person",
      numberOfSessions: 2,
      videoRecording: "N/A",
      suggestedExercises: "Grief support group information, coping strategies guide",
      report: "Download",
      notesSummary: "Addressed grief and loss, focusing on coping mechanisms.",
      download: "Download",
    },
    {
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
              { icon: FileText, label: "Session Records", active: true },
              { icon: Calendar, label: "Appointments", active: false },
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
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Session Records</h1>

          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by client name"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#e89856] text-white hover:opacity-90">
                  <span className="text-sm">Date Range</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#e89856] text-white hover:opacity-90">
                  <span className="text-sm">Session Type</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Sessions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video Recording</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suggested Exercises/Resources</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes Summary</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sessionData.map((session, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{session.clientName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.sessionDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.sessionType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.numberOfSessions}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.videoRecording}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{session.suggestedExercises}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.report}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{session.notesSummary}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.download}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
