"use client";

import { useState } from "react";
import { Input } from "./ui/input";

interface Appointment {
  id: number;
  name: string;
  date: string;
  time: string;
  sessionType: string;
  status: string;
  revenue: string;
  image: string;
}

interface UpcomingAppointment {
  id: number;
  name: string;
  time: string;
  image: string;
}

interface Props {
  onBack?: () => void;
}

const TherapistAppointments: React.FC<Props> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2024, 6)); // July 2024

  const appointments: Appointment[] = [
    {
      id: 1,
      name: "Sophia Turner",
      date: "June 20, 2024",
      time: "10:00 AM",
      sessionType: "Individual Therapy",
      status: "Completed",
      revenue: "$150",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Ethan Carter",
      date: "June 20, 2024",
      time: "9:30 AM",
      sessionType: "Couples Therapy",
      status: "Completed",
      revenue: "$200",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Chloe Lin",
      date: "June 20, 2024",
      time: "2:00 PM",
      sessionType: "Individual Therapy",
      status: "Completed",
      revenue: "$150",
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  const upcomingAppointments: UpcomingAppointment[] = [
    {
      id: 1,
      name: "Sophia Turner",
      time: "10:00 AM - 11:00 AM",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Ethan Carter",
      time: "11:30 AM - 12:30 PM",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Chloe Lin",
      time: "2:00 PM - 3:00 PM",
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  const getDaysInMonth = (date: Date): (number | null)[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const navigateMonth = (direction: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction));
  };

  const bookedDates: number[] = appointments
    .map((appt) => new Date(appt.date))
    .filter(
      (date) =>
        date.getFullYear() === currentMonth.getFullYear() &&
        date.getMonth() === currentMonth.getMonth()
    )
    .map((date) => date.getDate());

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
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

              <button
                onClick={() => (window.location.href = "/therapist")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors"
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

              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left bg-blue-100 text-blue-700 transition-colors">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointments</h1>

            {/* Search Bar */}
            <div className="relative mb-6">
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
                className="pl-10 w-full bg-gray-100 border-none"
              />
            </div>

            {/* Calendar & Rest */}
            {/* Continue with your JSX calendar, upcoming appointments, and appointment history as in original — no changes needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistAppointments;
