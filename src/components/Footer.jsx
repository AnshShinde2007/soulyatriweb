"use client"

const Footer = () => {
  const exploreItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "App", href: "#app" },
    { label: "Soul Quiz", href: "#contact" },
  ]

  const supportItems = [
    { label: "Help Center", href: "#contact" },
    { label: "Community", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#contact" },
  ]

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId.replace("#", ""))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent">
              SoulYatri
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">Journey Within That Thrives Beyond</p>
          </div>

          {/* Explore Section */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-2">
              {exploreItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => smoothScrollTo(item.href)}
                    className="text-gray-400 hover:text-[#FF7B00] transition-colors duration-200 text-left text-sm md:text-base"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              {supportItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => smoothScrollTo(item.href)}
                    className="text-gray-400 hover:text-[#18A2B8] transition-colors duration-200 text-left text-sm md:text-base"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Today's Affirmation */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold text-white">Today's Affirmation</h4>
            <blockquote className="text-[#FF7B00] italic leading-relaxed text-sm md:text-base">
              "I am exactly where I need to be on my healing journey."
            </blockquote>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2024 SoulYatri. All rights reserved. Made with ❤️ for your healing journey.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
