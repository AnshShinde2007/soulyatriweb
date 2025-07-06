"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const TherapySession = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTherapist, setSelectedTherapist] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6)) // July 2025

  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Specializes in Anxiety, Depression",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-orange-100",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Specializes in Relationship Issues, Stress",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Specializes in Trauma, Grief",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-gray-100",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Specializes in ADHD, Career Counseling",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-teal-100",
    },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const filteredTherapists = therapists.filter((therapist) =>
    therapist.specialization.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const formatDate = (day) => {
    if (!day) return ""
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return `${monthNames[currentMonth.getMonth()]} ${day}, ${currentMonth.getFullYear()}`
  }

  const handleConfirmBooking = () => {
    if (selectedTherapist && selectedDate && selectedTime) {
      setShowConfirmation(true)
    }
  }

  const handleFinalConfirm = () => {
    setShowConfirmation(false)
    setShowThankYou(true)
  }

  const navigateMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction))
  }

  if (showThankYou) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col h-screen w-screen overflow-hidden">
        {/* Thank You Content */}
        <div className="flex-1 flex items-center justify-center bg-gray-50 p-4 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
            title="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center">
            {/* Mountain Illustration */}
            <div className="mb-6 sm:mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-02%20224345-yRV3ETRFKu5isdpSfDr82IRgUlob3c.png"
                alt="Mountain landscape"
                className="w-full h-32 sm:h-48 object-cover rounded-2xl"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Thank You</h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              We are very grateful for the booking therapist session, your healing journey is about to begin.
            </p>

            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              We've sent a confirmation email with all the details of your session. Please check your inbox, and don't
              hesitate to reach out if you have any questions.
            </p>

            <Button className="bg-gradient-to-r from-[#4A90E2] to-[#5B9BD5] hover:from-[#3A7BC8] hover:to-[#4A8BC2] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base">
              View Booking Details
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col h-screen w-screen overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex justify-between items-start">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Find the right therapist for you
              </h1>

              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                  placeholder="What are you struggling with?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 sm:pl-10 py-2 sm:py-3 w-full bg-gray-100 border-none rounded-xl text-gray-700 placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <button
              onClick={onClose}
              className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              title="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Therapist Options */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Therapist options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-h-80 sm:max-h-96 overflow-y-auto">
              {filteredTherapists.map((therapist) => (
                <div
                  key={therapist.id}
                  onClick={() => setSelectedTherapist(therapist)}
                  className={`${therapist.bgColor} rounded-2xl p-4 sm:p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedTherapist?.id === therapist.id ? "ring-2 ring-orange-500 shadow-lg" : ""
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={therapist.image || "/placeholder.svg"}
                      alt={therapist.name}
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-3 sm:mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{therapist.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{therapist.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {/* Date Selection */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Select a date</h2>
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </h3>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-3 sm:mb-4">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                    <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {getDaysInMonth(currentMonth).map((day, index) => {
                    const today = new Date()
                    const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                    const isPastDate = currentDate < today.setHours(0, 0, 0, 0)

                    return (
                      <button
                        key={index}
                        onClick={() => day && !isPastDate && setSelectedDate(day)}
                        disabled={!day || isPastDate}
                        className={`h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm rounded-lg transition-colors ${
                          !day
                            ? "invisible"
                            : isPastDate
                              ? "text-gray-300 cursor-not-allowed"
                              : selectedDate === day
                                ? "bg-gray-900 text-white"
                                : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                {/* Selected Date Display */}
                {selectedDate && (
                  <div className="mt-3 sm:mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600">Selected Date:</p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{formatDate(selectedDate)}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Select a time</h2>
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                        selectedTime === time ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {/* Selected Time Display */}
                {selectedTime && (
                  <div className="mt-3 sm:mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600">Selected Time:</p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{selectedTime}</p>
                  </div>
                )}

                {/* Confirm Booking Button */}
                <Button
                  onClick={handleConfirmBooking}
                  disabled={!selectedTherapist || !selectedDate || !selectedTime}
                  className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-[#FF7B00] to-[#ffb067] hover:from-[#e06f00] hover:to-[#ffe1c4] text-white py-2 sm:py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Confirm Your Booking
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">Selected Therapist:</p>
                <p className="font-medium text-gray-900 text-sm sm:text-base">{selectedTherapist?.name}</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">Selected Date:</p>
                <p className="font-medium text-gray-900 text-sm sm:text-base">{formatDate(selectedDate)}</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">Selected Time:</p>
                <p className="font-medium text-gray-900 text-sm sm:text-base">{selectedTime}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => setShowConfirmation(false)}
                variant="outline"
                className="flex-1 py-2 sm:py-3 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
              >
                Cancel
              </Button>
              <Button
                onClick={handleFinalConfirm}
                className="flex-1 bg-gradient-to-r from-[#FF7B00] to-[#ffb067] hover:from-[#e06f00] hover:to-[#ffe1c4] text-white py-2 sm:py-3 text-sm sm:text-base"
              >
                Confirm Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TherapySession
