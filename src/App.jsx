"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import MentalHealthAppSection from "./components/MentalHealthAppSection"
import SignupPage from "./components/SignupPage"
import SigninPage from "./components/SigninPage"
import UserDashboard from "./components/UserDashboard"
import TherapistVerification from "./components/TherapistVerification"
import AdminDashboard from "./components/AdminDashboard"
import AboutSection from "./components/AboutSection"
import AppSection from "./components/AppSection"
import CommunitySection from "./components/CommunitySection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import SoulYatriBot from "./components/SoulYatriBot"
import TherapistDashboard from "./components/TherapistDashboard"

const Home = () => {
  return (
    <>
      <HeroSection />
      <MentalHealthAppSection />
      <AboutSection />
      <AppSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Home />
                </main>
              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/therapist-verification" element={<TherapistVerification />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/soulyatri" element={<SoulYatriBot />} />
          <Route path="/therapist-dashboard" element={<TherapistDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
