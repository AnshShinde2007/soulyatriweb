"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import MentalHealthAppSection from "./components/MentalHealthAppSection"
import SignupPage from "./components/SignupPage"
import SigninPage from "./components/SigninPage"
import Dashboard from "./components/Dashboard"
import AboutSection from "./components/AboutSection"
import AppSection from "./components/AppSection"
import CommunitySection from "./components/CommunitySection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import SoulYatriBot from "./components/SoulYatriBot"

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/soulyatri" element={<SoulYatriBot />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
