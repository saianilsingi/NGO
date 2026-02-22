const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Shakti Jyothi Foundation
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Empowering women and transforming communities across Andhra
              Pradesh through education, skill development, and economic
              opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors text-sm sm:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('impact')}
                  className="hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Impact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@shaktijyothi.org"
                  className="hover:text-primary transition-colors text-sm sm:text-base break-all"
                >
                  info@shaktijyothi.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition-colors text-sm sm:text-base"
                >
                  +91 9876543210
                </a>
              </li>
              <li className="pt-2 text-gray-400 text-sm sm:text-base">
                Andhra Pradesh, India
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="https://instagram.com/shaktijyothi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-sm sm:text-base"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/shaktijyothi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-sm sm:text-base"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/shaktijyothi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-sm sm:text-base"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2026 Shakti Jyothi Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
