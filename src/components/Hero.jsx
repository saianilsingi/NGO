const Hero = ({ onDonateClick, onVolunteerClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20 md:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
          Empowering Women.
          <br />
          Transforming Andhra Pradesh.
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-200 px-2">
          Join us in creating lasting change through education, skill development,
          and empowerment programs that uplift women and girls across rural
          communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button
            onClick={onDonateClick}
            className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Donate Now
          </button>
          <button
            onClick={onVolunteerClick}
            className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
          >
            Volunteer
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
