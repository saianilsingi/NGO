import { useState, useEffect } from 'react'

const Navbar = ({ onDonateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2 md:py-3'
          : 'bg-white/95 backdrop-blur-sm py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            className="text-lg md:text-2xl font-bold text-primary cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Shakti Jyothi Foundation
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onDonateClick}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Donate
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onDonateClick}
              className="bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-xs"
            >
              Donate
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
