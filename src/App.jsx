import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Impact from './components/Impact'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DonationModal from './components/DonationModal'

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  const handleDonateClick = () => {
    setIsDonationModalOpen(true)
  }

  const handleVolunteerClick = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar onDonateClick={handleDonateClick} />
      <Hero
        onDonateClick={handleDonateClick}
        onVolunteerClick={handleVolunteerClick}
      />
      <About />
      <Programs />
      <Impact />
      <Gallery />
      <Testimonials />
      <CTA onDonateClick={handleDonateClick} />
      <Footer />
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  )
}

export default App
