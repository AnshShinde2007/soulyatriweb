"use client"

import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Home,
  Calendar,
  FileText,
  Settings,
  Eye,
  MessageSquareText,
} from "lucide-react"

// === Types ===
interface StatCard {
  title: string
  icon: React.ReactNode
  value: number
  badgeText: string
  badgeVariant: "default" | "secondary" | "outline" | "destructive"
}

interface User {
  name: string
  email: string
  avatarUrl?: string
}

interface Event {
  title: string
  date: string
}

interface Report {
  user: string
  status: string
  reportType: string
}

// === Dummy Data ===
const statCards: StatCard[] = [
  {
    title: "Registered Users",
    icon: <Home className="h-6 w-6 text-blue-500" />,
    value: 1200,
    badgeText: "+5%",
    badgeVariant: "default",
  },
  {
    title: "Meetings Scheduled",
    icon: <Calendar className="h-6 w-6 text-green-500" />,
    value: 320,
    badgeText: "-2%",
    badgeVariant: "destructive",
  },
  {
    title: "Reports Generated",
    icon: <FileText className="h-6 w-6 text-purple-500" />,
    value: 180,
    badgeText: "+12%",
    badgeVariant: "default",
  },
  {
    title: "Settings Updated",
    icon: <Settings className="h-6 w-6 text-yellow-500" />,
    value: 75,
    badgeText: "+1%",
    badgeVariant: "secondary",
  },
]

const users: User[] = [
  { name: "Pooja Sharma", email: "pooja@example.com" },
  { name: "Ansh Shinde", email: "ansh@example.com" },
  { name: "Vinay Mehta", email: "vinay@example.com" },
]

const events: Event[] = [
  { title: "Therapist Training", date: "2025-07-20" },
  { title: "System Maintenance", date: "2025-07-22" },
]

const reports: Report[] = [
  { user: "Pooja Sharma", status: "Reviewed", reportType: "Journal" },
  { user: "Ansh Shinde", status: "Pending", reportType: "Booking" },
]

// === Main Component ===
export default function HeadofficeDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Head Office Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <Badge variant={card.badgeVariant} className="mt-1">
                {card.badgeText}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Eye className="inline mr-2" /> Recently Active Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatarUrl || ""} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Events */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Calendar className="inline mr-2" /> Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {events.map((event, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{event.title}</span>
                <span className="text-muted-foreground">{event.date}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Reports Summary */}
      <Card>
        <CardHeader>
          <CardTitle>
            <MessageSquareText className="inline mr-2" /> Reports Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report, idx) => (
                <TableRow key={idx}>
                  <TableCell>{report.user}</TableCell>
                  <TableCell>{report.status}</TableCell>
                  <TableCell>{report.reportType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
