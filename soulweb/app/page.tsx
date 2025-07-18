"use client";

import HeroSection from "../components/hero";
import MentalHealthAppSection from "../components/mentalhealthapp";
import AboutSection from "../components/about";
import AppSection from "../components/app";
import CommunitySection from "../components/community";
import ContactSection from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/Hume/Nav";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MentalHealthAppSection />
      <AboutSection />
      <AppSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
