const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      alt: 'Women empowerment workshop',
    },
    {
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
      alt: 'Skill training session',
    },
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
      alt: 'Community meeting',
    },
    {
      url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      alt: 'Education program',
    },
    {
      url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
      alt: 'Women entrepreneurs',
    },
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      alt: 'Health awareness camp',
    },
  ]

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Moments that capture our journey of empowerment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
