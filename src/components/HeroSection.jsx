"use client"

import { useNavigate } from "react-router-dom"
// import SplashCursor from "../bits/SplashCursor.jsx";
import heroImg from "../assets/hero.png" // Use as background image

const HeroSection = () => {
  const navigate = useNavigate()

  const handleBeginJourney = () => {
    navigate("/signup")
  }

  return (
    <>
      {/* <SplashCursor /> */}
      <section
        id="home"
        className="w-full min-h-screen bg-gradient-to-br from-[#FF7B00] to-[#18A2B8] bg-no-repeat bg-center bg-cover text-white py-20 px-4 pt-32"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 123, 0, 0.8), rgba(24, 162, 184, 0.8)), url(${heroImg})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center min-h-[70vh]">
          <div className="text-white max-w-xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
              You Have Been Wondering
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              Try to understand what's missing?
            </p>

            {/* Begin Journey Button */}
            <div className="mt-16 md:mt-32">
              <button
                onClick={handleBeginJourney}
                className="bg-white/90 hover:bg-white text-[#FF7B00] px-6 md:px-8 py-3 rounded-[30px] font-semibold text-base md:text-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                Begin Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
