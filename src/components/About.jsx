const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=80"
              alt="Women empowerment"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Shakti Jyothi Foundation
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Founded with a vision to transform lives, Shakti Jyothi Foundation
              has been at the forefront of women empowerment in Andhra Pradesh
              since its inception. We believe that when women are empowered,
              entire communities thrive. Our comprehensive programs focus on
              education, skill development, financial independence, and health
              awareness, creating a ripple effect of positive change across
              rural India.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Through strategic partnerships, dedicated volunteers, and the
              unwavering support of our donors, we have touched thousands of
              lives, helping women break barriers and achieve their dreams.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="text-primary text-4xl sm:text-5xl mb-4">🎯</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              To empower women and girls in Andhra Pradesh through education,
              skill development, and economic opportunities, enabling them to
              become self-reliant and contribute meaningfully to their
              communities and society at large.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="text-primary text-4xl sm:text-5xl mb-4">👁️</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              A transformed Andhra Pradesh where every woman and girl has access
              to quality education, economic opportunities, and the confidence to
              lead. We envision communities where gender equality is the norm,
              and women are recognized as powerful agents of change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
