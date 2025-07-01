"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export function SignupCard() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate signup process
    setTimeout(() => {
      navigate("/dashboard")
    }, 1000)
  }

  return (
    <Card className="w-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent">
          Begin Your Journey
        </CardTitle>
        <CardDescription className="text-gray-600 text-base md:text-lg mt-2">
          Join thousands on their path to healing and self-discovery
        </CardDescription>
        <div className="mt-3">
          <Link to="/signin">
            <Button
              variant="link"
              className="text-[#18A2B8] hover:text-[#FF7B00] transition-colors text-sm md:text-base p-0"
            >
              Already have an account? Login
            </Button>
          </Link>
        </div>
      </CardHeader>

      <CardContent className="px-4 md:px-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-gray-700 font-medium text-sm md:text-base">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                className="h-10 md:h-11 border-2 border-gray-200 focus:border-[#FF7B00] focus:ring-[#FF7B00] rounded-lg text-sm md:text-base"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-700 font-medium text-sm md:text-base">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-10 md:h-11 border-2 border-gray-200 focus:border-[#18A2B8] focus:ring-[#18A2B8] rounded-lg text-sm md:text-base"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role" className="text-gray-700 font-medium text-sm md:text-base">
                Role
              </Label>
              <select
                id="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="h-10 md:h-11 border-2 border-gray-200 focus:border-[#FF7B00] focus:ring-[#FF7B00] rounded-lg text-sm md:text-base px-3 bg-white"
                required
              >
                <option value="">Select your role</option>
                <option value="admin">Admin</option>
                <option value="therapist">Therapist</option>
                <option value="user">User</option>
              </select>
            </div>

            {selectedRole === "therapist" && (
              <div className="grid gap-2">
                <Label htmlFor="address" className="text-gray-700 font-medium text-sm md:text-base">
                  Address
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Your practice address"
                  className="h-10 md:h-11 border-2 border-gray-200 focus:border-[#18A2B8] focus:ring-[#18A2B8] rounded-lg text-sm md:text-base"
                  required
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-700 font-medium text-sm md:text-base">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                className="h-10 md:h-11 border-2 border-gray-200 focus:border-[#FF7B00] focus:ring-[#FF7B00] rounded-lg text-sm md:text-base"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium text-sm md:text-base">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="h-10 md:h-11 border-2 border-gray-200 focus:border-[#18A2B8] focus:ring-[#18A2B8] rounded-lg text-sm md:text-base"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-3 px-4 md:px-6 pb-4 md:pb-6">
        <Button
          onClick={handleSubmit}
          type="submit"
          className="w-full h-10 md:h-11 bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] hover:from-[#e66a00] hover:to-[#1591a3] text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Healing Journey
        </Button>
        <Button
          variant="outline"
          className="w-full h-10 md:h-11 border-2 border-gray-300 hover:border-[#FF7B00] hover:text-[#FF7B00] font-medium rounded-lg transition-all duration-300 bg-transparent text-sm md:text-base"
        >
          <svg className="w-4 md:w-5 h-4 md:h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
