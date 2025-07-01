"use client"

import { Link } from "react-router-dom"

const DashboardNavbar = ({ onOpenBot }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg px-4 py-4 flex justify-between items-center border-b border-gray-100">
      {/* Left - Logo */}
      <div className="flex-1">
        <Link
          to="/dashboard"
          className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent"
        >
          SoulYatri
        </Link>
      </div>

      {/* Center - Dashboard Navigation */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex space-x-6 lg:space-x-8">
          <button className="text-black hover:text-[#FF7B00] font-medium transition-colors duration-200 px-3 py-2">
            Dashboard
          </button>
          <button className="text-black hover:text-[#FF7B00] font-medium transition-colors duration-200 px-3 py-2">
            Journal
          </button>
          <button className="text-black hover:text-[#FF7B00] font-medium transition-colors duration-200 px-3 py-2">
            Sessions
          </button>
          <button
            onClick={onOpenBot}
            className="text-black hover:text-[#FF7B00] font-medium transition-colors duration-200 px-3 py-2"
          >
            SoulYatri Bot
          </button>
        </div>
      </div>

      {/* Right - User Actions */}
      <div className="flex-1 flex justify-end space-x-2 md:space-x-4">
        <button className="bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all hover:shadow-lg">
          Book Soul Sync
        </button>
        <Link to="/">
          <button className="text-gray-600 hover:text-[#FF7B00] px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default DashboardNavbar
