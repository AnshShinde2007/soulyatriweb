import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Home, Calendar, FileText, Settings, Eye } from "lucide-react"

const chartData = [
  { name: "Seeker", value: 34 },
  { name: "Skeptic", value: 15 },
  { name: "Devotee", value: 24 },
  { name: "Planner", value: 28 },
  { name: "Healer", value: 18 },
]

const upcomingSessions = [
  {
    id: 1,
    name: "Anjali Kapoor",
    sign: "Gemini",
    date: "May 22, 1993",
    bgColor: "bg-[#eccab3]",
  },
  {
    id: 2,
    name: "Rohan Verma",
    sign: "Scorpio",
    date: "November 15, 1998",
    bgColor: "bg-gray-600",
  },
  {
    id: 3,
    name: "Meera Patel",
    sign: "Leo",
    date: "August 5, 1983",
    bgColor: "bg-[#f0d0b7]",
  },
]

const inquiryQueue = [
  {
    client: "Anjali Kapoor",
    question: "What does my career look like in the next 6 months?",
    status: "Pending",
  },
  {
    client: "Rohan Verma",
    question: "When will I find love?",
    status: "Assigned",
  },
  {
    client: "Meera Patel",
    question: "What is the best time to invest in property?",
    status: "Pending",
  },
]

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: FileText, label: "Session Records", active: false },
  { icon: Calendar, label: "Appointments", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🕉</span>
              </div>
              <span className="text-xl font-semibold text-amber-600">SoulYatri</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-700 hover:text-slate-900">Home</a>
              <a href="#" className="text-slate-700 hover:text-slate-900">Find a therapist</a>
              <a href="#" className="text-slate-700 hover:text-slate-900">How it works</a>
              <a href="#" className="text-slate-700 hover:text-slate-900">Pricing</a>
              <a href="#" className="text-slate-700 hover:text-slate-900">Resources</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-gray-700 hover:bg-gray-800 text-white">Get started</Button>
            <Button variant="ghost" className="text-slate-700">Log in</Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#edf8fe] border-r border-gray-200 min-h-screen flex flex-col justify-between">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-indigo-100 text-indigo-600">PS</AvatarFallback>
              </Avatar>
              <span className="font-medium text-slate-900">Priya Sharma</span>
            </div>
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => {
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

          {/* Admin Button + View As */}
          <div className="p-6 space-y-3">
            <div className="w-full bg-gray-800 text-white py-2 text-center text-sm rounded-full">
              Admin
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-700">
              <Eye className="w-4 h-4" />
              <span>View as</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Sessions */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Sessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {upcomingSessions.map((session) => (
                    <Card key={session.id} className="overflow-hidden">
                      <div className={`h-32 ${session.bgColor} flex items-center justify-center`}>
                        <Avatar className="w-20 h-20">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" />
                          <AvatarFallback className="text-lg bg-white">
                            {session.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-slate-900">{session.name}</h3>
                        <p className="text-sm text-slate-600">
                          {session.sign}, {session.date}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Client Inquiry Queue */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Client Inquiry Queue</h2>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#bac5d3]">
                        <TableHead className="font-semibold text-slate-900">Client</TableHead>
                        <TableHead className="font-semibold text-slate-900">Question</TableHead>
                        <TableHead className="font-semibold text-slate-900">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiryQueue.map((inquiry, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{inquiry.client}</TableCell>
                          <TableCell className="max-w-xs">{inquiry.question}</TableCell>
                          <TableCell>
                            <Badge
                              variant={inquiry.status === "Assigned" ? "default" : "secondary"}
                              className={
                                inquiry.status === "Assigned"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {inquiry.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Client Distribution Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Client Distribution</CardTitle>
                  <p className="text-sm text-slate-500">Client Distribution by SoulYatri</p>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                        <YAxis hide />
                        <Bar dataKey="value" fill="#94a0b0" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-slate-500">
                    {chartData.map((item) => (
                      <div key={item.name} className="text-center">
                        <div className="font-semibold text-lg text-slate-900">{item.value}</div>
                        <div>{item.name}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <Card className="bg-[#e5e7eb]">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Total Client Handled-</div>
                    <div className="text-3xl font-bold text-slate-900">5</div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-sm text-slate-600 mb-1">Total Revenue Generated This Month-</div>
                    <div className="text-3xl font-bold text-slate-900">$1000</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#d9dfe7]">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Total Upcoming Appointment:</div>
                    <div className="text-3xl font-bold text-slate-900">5</div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-sm text-slate-600 mb-1">This Month Total Appointment Finished:</div>
                    <div className="text-3xl font-bold text-slate-900">7</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
