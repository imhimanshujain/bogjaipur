'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MonitorSmartphone, UsersRound, Rocket } from 'lucide-react'

const services = [

  {
    title: 'Networking Events',
    description: 'Coonnect with one of the finest business owners.',
    icon: <UsersRound className="w-14 h-14 text-emerald-600 drop-shadow-lg" />
  },
  {
    title: 'Mentorship',
    description: 'Geet guidance from top-tier industry experts.',
    icon: <Rocket className="w-14 h-14 text-yellow-500 drop-shadow-lg" />
  }
]

export default function Services() {
  const router = useRouter()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [typedText, setTypedText] = useState('')
  const intervalRef = useRef(null)

  useEffect(() => {
    if (hoveredIndex === null) {
      clearInterval(intervalRef.current)
      setTypedText('')
      return
    }

    const desc = services[hoveredIndex].description
    let index = 0

    setTypedText('') // Reset before typing

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (index < desc.length) {
        setTypedText((prev) => prev + desc.charAt(index))
        index++
      } else {
        clearInterval(intervalRef.current)
      }
    }, 40)

    return () => clearInterval(intervalRef.current)
  }, [hoveredIndex])

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-24 px-6 text-black">
      <h2 className="text-5xl font-bold text-center mb-16">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => router.push('/services')}
            className="cursor-pointer group p-10 rounded-3xl shadow-2xl bg-white border hover:scale-[1.03] transition-all duration-300 relative overflow-hidden min-h-[260px]"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-center mb-6">{service.title}</h3>

            {hoveredIndex === i && (
              <p className="text-center text-gray-700 font-medium h-14">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
