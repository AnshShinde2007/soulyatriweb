import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Home,
  Calendar,
  FileText,
  Settings,
  Eye,
  Bell,
  UserCog,
  Users,
  Building,
  MessageSquare,
  LucideIcon,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 md:p-8 lg:p-10 overflow-auto">
          <div className="space-y-8">
            <UpcomingSessions />
            <ClientInquiryQueue />
            <AnalyticsSection />
          </div>
        </main>
      </div>
    </div>
  );
}

// -------- Sidebar --------
interface SidebarItem {
  icon: LucideIcon;
  label: string;
  active: boolean;
}

function Sidebar() {
  const sidebarItems: SidebarItem[] = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Calendar, label: "Appointments", active: false },
    { icon: Users, label: "Sessions", active: false },
    { icon: UserCog, label: "Client Management", active: false },
    { icon: Building, label: "Head Office", active: false },
    { icon: MessageSquare, label: "Request", active: false },
  ];

  return (
    <aside className="w-64 bg-[#edf8fe] border-r border-gray-200 min-h-screen flex flex-col justify-between">
      <div>
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🕉</span>
            </div>
            <span className="text-xl font-semibold text-amber-600">
              SoulYatri
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-indigo-100 text-indigo-600">
                AS
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-slate-900">Anya Sharma</span>
          </div>
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-full transition-colors ${
                    item.active
                      ? "bg-[#9aafec] text-black"
                      : "text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-base">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div className="bg-gray-800 text-white text-center rounded-full py-2 text-sm font-medium">
          Admin
        </div>
        <div className="flex items-center space-x-2 text-slate-800 text-sm">
          <Eye className="w-4 h-4" />
          <span>View as</span>
        </div>
      </div>
    </aside>
  );
}

// -------- Dashboard Header --------
function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-6 md:p-8 bg-white border-b border-gray-200 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-700 bg-transparent"
        >
          Notifications
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="/placeholder.svg?height=36&width=36"
            alt="User Profile"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

// -------- Upcoming Sessions --------
interface Session {
  clientName: string;
  expert: string;
  date: string;
  time: string;
  type: string;
}

function UpcomingSessions() {
  const sessions: Session[] = [
    {
      clientName: "Maya Kapoor",
      expert: "Dr. Rohan Patel",
      date: "July 20, 2024",
      time: "2:00 PM",
      type: "CBT",
    },
    {
      clientName: "Ethan Chen",
      expert: "Dr. Arnav Singh",
      date: "July 21, 2024",
      time: "10:00 AM",
      type: "Zodiac Match",
    },
    {
      clientName: "Olivia Rodriguez",
      expert: "Ms. Divya Verma",
      date: "July 22, 2024",
      time: "4:00 PM",
      type: "CBT",
    },
  ];

  return (
    <section>
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Upcoming Sessions
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session, index) => (
          <Card key={index} className="shadow-sm rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Client: {session.clientName}
              </p>
              <p className="text-sm text-gray-600">
                Expert: {session.expert}, Date: {session.date},
              </p>
              <p className="text-sm text-gray-600">
                Time: {session.time}, Type: {session.type}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// -------- Client Inquiry Queue --------
interface Inquiry {
  client: string;
  question: string;
  assignedExpert: string;
  type: string;
  status: "Pending" | "Assigned" | "Completed";
}

function ClientInquiryQueue() {
  const inquiries: Inquiry[] = [
    {
      client: "Chloe Lee",
      question: "Inquiry about relationship compatibility",
      assignedExpert: "Ms. Divya Verma",
      type: "Astrologer",
      status: "Pending",
    },
    {
      client: "Owen Clark",
      question: "Seeking therapy for anxiety",
      assignedExpert: "Dr. Arnav Singh",
      type: "Therapist",
      status: "Assigned",
    },
    {
      client: "Isabella Green",
      question: "Requesting a birth chart reading",
      assignedExpert: "Ms. Divya Verma",
      type: "Astrologer",
      status: "Completed",
    },
  ];

  const getStatusBadgeVariant = (
    status: Inquiry["status"],
  ): "outline" | "default" | "secondary" => {
    switch (status) {
      case "Pending":
        return "outline";
      case "Assigned":
        return "default";
      case "Completed":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <section>
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Client Inquiry Queue
      </h3>
      <Card className="shadow-sm rounded-lg overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Client</TableHead>
                <TableHead>Question</TableHead>
                <TableHead className="w-[180px]">Assigned Expert</TableHead>
                <TableHead className="w-[120px]">Type</TableHead>
                <TableHead className="w-[100px] text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.map((inquiry, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {inquiry.client}
                  </TableCell>
                  <TableCell>{inquiry.question}</TableCell>
                  <TableCell>{inquiry.assignedExpert}</TableCell>
                  <TableCell>{inquiry.type}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={getStatusBadgeVariant(inquiry.status)}>
                      {inquiry.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}

// -------- Analytics Section --------
interface Issue {
  name: string;
  value: number;
}

function AnalyticsSection() {
  const popularIssues: Issue[] = [
    { name: "Healer", value: 80 },
    { name: "Seeker", value: 60 },
    { name: "Believer", value: 30 },
    { name: "Anxiety", value: 75 },
    { name: "Relationships", value: 50 },
  ];

  return (
    <section>
      <h3 className="text-lg font-medium text-gray-800 mb-4">Analytics</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Session Type Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around items-end h-40 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-24 bg-gray-200 rounded-t-md" />
                <span className="text-sm text-gray-600 mt-2">CBT</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-32 bg-gray-200 rounded-t-md" />
                <span className="text-sm text-gray-600 mt-2">Zodiac Match</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-28 bg-gray-200 rounded-t-md" />
                <span className="text-sm text-gray-600 mt-2">
                  Career Guidance
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Popular Astrologer / Therapy Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {popularIssues.map((issue, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-24 text-sm text-gray-700">{issue.name}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${issue.value}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
