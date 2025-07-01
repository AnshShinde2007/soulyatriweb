import ChromaGrid from "../bits/ChromaGrid"

const sacredTrinityItems = [
  {
    image: "https://cdn.vectorstock.com/i/1000v/37/05/cartoon-vedic-astrology-vector-39303705.jpg",
    title: "Vedic Astrology",
    subtitle: "Know your soul blueprint through ancient wisdom that maps your cosmic DNA.",
    handle: "@vedicastrology",
    borderColor: "#FF7B00",
    gradient: "linear-gradient(145deg, #FF7B00, #18A2B8)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image:
      "https://static7.depositphotos.com/1007989/747/i/450/depositphotos_7475502-stock-illustration-iq-and-personality-test.jpg",
    title: "Psychology",
    handle: "@psychology",
    subtitle: "Understand your mind and emotions with evidence-based therapeutic approaches.",
    borderColor: "#18A2B8",
    gradient: "linear-gradient(180deg, #18A2B8, #FF7B00)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/healing-caring-broken-heart-cartoon-illustration-man-patching-adhesive-bandages-43906140.jpg",
    title: "AI+Healing",
    subtitle: "Feel supported and guided daily with intelligent, personalized healing tools.",
    handle: "@aihealing",
    borderColor: "#FF7B00",
    gradient: "linear-gradient(225deg, #FF7B00, #18A2B8)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Mindfulness",
    subtitle: "Daily practices for inner peace and mental clarity",
    handle: "@mindfulness",
    borderColor: "#18A2B8",
    gradient: "linear-gradient(145deg, #18A2B8, #FF7B00)",
    url: "https://github.com/sarahjohnson",
  },
]

const healingToolkitItems = [
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Soul AI Chat",
    subtitle: "Seamless conversations with Soul AI and therapists for instant guidance.",
    handle: "@soulai",
    borderColor: "#FF7B00",
    gradient: "linear-gradient(135deg, #FF7B00, #18A2B8)",
  },
  {
    image: "https://i.pravatar.cc/300?img=6",
    title: "Journaling + Mood",
    subtitle: "Visual insights into your emotional patterns and daily reflections.",
    handle: "@journaling",
    borderColor: "#18A2B8",
    gradient: "linear-gradient(135deg, #18A2B8, #FF7B00)",
  },
  {
    image: "https://i.pravatar.cc/300?img=7",
    title: "Therapist Matching",
    subtitle: "AI-powered matching with perfect-fit healers for your journey.",
    handle: "@matching",
    borderColor: "#FF7B00",
    gradient: "linear-gradient(135deg, #FF7B00, #18A2B8)",
  },
  {
    image: "https://i.pravatar.cc/300?img=8",
    title: "Soul Score",
    subtitle: "Track your spiritual and emotional growth journey with analytics.",
    handle: "@soulscore",
    borderColor: "#18A2B8",
    gradient: "linear-gradient(135deg, #18A2B8, #FF7B00)",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Sacred Trinity Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent">
            Your Sacred Trinity of Healing
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12">
            Discover the three pillars of your spiritual transformation
          </p>
        </div>

        <div style={{ height: "500px", position: "relative", marginBottom: "40px" }} className="md:h-[600px] md:mb-16">
          <ChromaGrid items={sacredTrinityItems} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
        </div>

        {/* Healing Toolkit Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent">
            Your Healing Toolkit
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12">
            Powerful tools designed to support your daily healing practice
          </p>
        </div>

        <div style={{ height: "500px", position: "relative" }} className="md:h-[600px]">
          <ChromaGrid items={healingToolkitItems} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
        </div>
      </div>
    </section>
  )
}

export default Services
