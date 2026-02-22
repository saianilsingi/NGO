const CTA = ({ onDonateClick }) => {
  return (
    <section className="py-12 sm:py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
          Your Contribution Creates Change
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Every donation helps us reach more women and girls, creating a ripple
          effect of empowerment across Andhra Pradesh.
        </p>
        <button
          onClick={onDonateClick}
          className="bg-white text-primary px-6 py-3 sm:px-10 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
        >
          Donate Now
        </button>
      </div>
    </section>
  )
}

export default CTA
