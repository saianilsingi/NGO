import { useState, useEffect, useRef } from 'react'

const Impact = () => {
  const [counts, setCounts] = useState({
    women: 0,
    villages: 0,
    shgs: 0,
    girls: 0,
  })

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const targets = {
      women: 10000,
      villages: 250,
      shgs: 500,
      girls: 5000,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        women: Math.floor(targets.women * progress),
        villages: Math.floor(targets.villages * progress),
        shgs: Math.floor(targets.shgs * progress),
        girls: Math.floor(targets.girls * progress),
      })

      if (currentStep >= steps) {
        setCounts({
          women: targets.women,
          villages: targets.villages,
          shgs: targets.shgs,
          girls: targets.girls,
        })
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const impactStats = [
    {
      number: counts.women,
      suffix: '+',
      label: 'Women Supported',
      icon: '👩',
    },
    {
      number: counts.villages,
      suffix: '+',
      label: 'Villages Reached',
      icon: '🏘️',
    },
    {
      number: counts.shgs,
      suffix: '+',
      label: 'SHGs Formed',
      icon: '🤝',
    },
    {
      number: counts.girls,
      suffix: '+',
      label: 'Girls Educated',
      icon: '🎓',
    },
  ]

  return (
    <section id="impact" className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-orange-100">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Numbers that reflect our commitment to transforming lives
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2">
                {stat.number.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
