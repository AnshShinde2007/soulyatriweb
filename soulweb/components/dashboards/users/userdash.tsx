"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Home,
  Briefcase,
  CalendarDays,
  BookOpen,
  Sparkles,
  Users,
  Settings,
} from "lucide-react";

const SOULYATRI_LOGO_PATH = "/assets/Full logo.png";
const THERAPY_IMAGE_PATH = "/assets/9097fb435c.png";
const JOURNAL_IMAGE_PATH = "/assets/journal1.png";
const AROHI_IMAGE_PATH = "/assets/group.png";
const COMMUNITY_IMAGE_PATH = "/assets/community.png";
const HEADER_PERSON_IMAGE_PATH = "/assets/FitzMeditation.png";
const AANYA_AVATAR_PATH = "/assets/aanya-avatar.png";

import TherapySession from "./therapyuser";
import HealingToolbox from "./healingtoolbox";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

  const MoodTrendChart = () => {
    return (
      <div>
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-4xl font-bold text-gray-800">0.0</span>
          <span className="text-sm text-gray-500">Last 30 Days</span>
          <span className="text-sm font-semibold text-green-500">0</span>
        </div>
        <div className="w-full h-24 bg-gray-200 rounded-lg flex items-end overflow-hidden">
          <div className="bg-blue-400 h-1/3 w-1/4 rounded-r-md"></div>
          <div className="bg-green-400 h-2/3 w-1/4 rounded-r-md ml-1"></div>
          <div className="bg-yellow-400 h-1/2 w-1/4 rounded-r-md ml-1"></div>
          <div className="bg-red-400 h-3/4 w-1/4 rounded-r-md ml-1"></div>
        </div>
      </div>
    );
  };

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    {
      id: "healing-toolbox",
      label: "Healing Toolbox",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      id: "my-sessions",
      label: "My Sessions",
      icon: <CalendarDays className="h-5 w-5" />,
    },
    { id: "journal", label: "Journal", icon: <BookOpen className="h-5 w-5" /> },
    {
      id: "arohi-ai",
      label: "Arohi AI",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: "community",
      label: "Community",
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  if (activeTab === "healing-toolbox")
    return <HealingToolbox onBack={() => setActiveTab("dashboard")} />;
  if (activeTab === "therapy-sessions")
    return <TherapySession onClose={() => setActiveTab("dashboard")} />;

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="p-4 lg:p-6">
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative z-50
            w-60 bg-[#E6F6FF] rounded-2xl shadow-md
            transition-transform duration-300 ease-in-out
            flex flex-col h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)]
          `}
          style={{ top: "1rem", left: "1rem" }}
        >
          {/* Logo */}
          <div className="pt-8 px-6 pb-6">
            <Image
              src={SOULYATRI_LOGO_PATH}
              alt="SoulYatri logo"
              width={180}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 space-y-3">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-[15px] font-medium
                  ${
                    activeTab === item.id
                      ? "bg-[#C2C4FF] text-black rounded-full shadow-inner"
                      : "text-gray-900 hover:bg-[#e4eaff] rounded-md"
                  }
                  transition-colors
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Profile & Logout */}
          <div className="px-6 pt-8 pb-6 border-t border-gray-300">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={AANYA_AVATAR_PATH}
                alt="Aanya avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-medium text-gray-900">Aanya</span>
            </div>

            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2 text-sm text-gray-800 hover:text-black font-semibold"
            >
              <span className="text-lg">←</span>
              Logout
            </button>
          </div>

          {/* Mobile close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col bg-white">
        <header className="relative z-0 bg-white px-6 py-8 flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-sm">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Dashboard
              </h1>
              <p className="text-gray-500 text-sm">{currentDate}</p>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 space-y-6 overflow-visible">
          {/* Welcome Banner */}
          <div className="relative z-30 bg-[#ffe3e3] p-6 rounded-2xl flex items-center justify-between">
            <div className="relative z-20 max-w-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Hi, Aanya
              </h2>
              <p className="text-gray-600">
                Welcome to a space where your soul is seen, your pain is heard,
                and your healing begins.
              </p>
            </div>
            <Image
              src={HEADER_PERSON_IMAGE_PATH}
              alt="Meditating person"
              width={320}
              height={320}
              priority
              className="hidden sm:block absolute -top-5 -right-2 w-56 md:w-64 lg:w-72 object-contain pointer-events-none z-50"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Welcome to the Soul Yatri
          </h2>

          {/* Content Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setActiveTab("therapy-sessions")}
            >
              <Image
                src={THERAPY_IMAGE_PATH}
                alt="Therapy"
                width={150}
                height={120}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Therapy</h3>
            </div>

            <div
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setActiveTab("journal")}
            >
              <Image
                src={JOURNAL_IMAGE_PATH}
                alt="Journal"
                width={150}
                height={120}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Journal</h3>
            </div>

            <div
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setActiveTab("arohi-ai")}
            >
              <Image
                src={AROHI_IMAGE_PATH}
                alt="Arohi AI"
                width={150}
                height={120}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Arohi</h3>
            </div>

            <div
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setActiveTab("community")}
            >
              <Image
                src={COMMUNITY_IMAGE_PATH}
                alt="Community"
                width={150}
                height={120}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Community</h3>
            </div>
          </div>

          {/* Mood Trend Section */}
          <section className="bg-white rounded-lg p-6 shadow-md mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Mood Trend
            </h2>
            <MoodTrendChart />
            <div className="flex justify-between mt-4 text-xs text-gray-600">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
