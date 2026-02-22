const Testimonials = () => {
  const testimonials = [
    {
      name: 'Lakshmi Devi',
      role: 'Entrepreneur, Anantapur',
      quote:
        'The skill training program changed my life. I started my own tailoring business and now support my family. Thank you, Shakti Jyothi Foundation!',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    {
      name: 'Priya Reddy',
      role: 'Student, Visakhapatnam',
      quote:
        "The scholarship helped me complete my graduation. I am now pursuing my master's degree and hope to become a teacher to inspire other girls.",
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    },
    {
      name: 'Sunita Kumari',
      role: 'SHG Leader, Guntur',
      quote:
        'Through the microfinance support, our SHG started a small business. We now employ 15 women and are expanding. This foundation gave us wings!',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Stories of transformation from our beneficiaries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
