const Programs = () => {
  const programs = [
    {
      icon: '🎓',
      title: 'Women Skill Training',
      description:
        'Comprehensive vocational training programs in tailoring, handicrafts, computer skills, and entrepreneurship to help women gain financial independence.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    },
    {
      icon: '📚',
      title: 'Girl Child Education',
      description:
        'Scholarship programs, after-school support, and mentorship initiatives ensuring girls complete their education and pursue higher studies.',
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    },
    {
      icon: '💰',
      title: 'Micro Finance Support',
      description:
        'Financial assistance and guidance for women entrepreneurs, helping them start and scale small businesses through microloans and business training.',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    },
    {
      icon: '🏥',
      title: 'Health & Awareness Camps',
      description:
        'Regular health check-ups, awareness sessions on nutrition, hygiene, and reproductive health, ensuring women and girls lead healthy lives.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
    },
  ]

  return (
    <section id="programs" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Comprehensive initiatives designed to empower women at every stage
            of their journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-3xl sm:text-4xl bg-white/90 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  {program.icon}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
