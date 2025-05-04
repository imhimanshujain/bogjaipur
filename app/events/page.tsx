
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import CTAButton from '../../components/CTAButton'

const events = [
  {
    title: 'Startup Success Conclave (Upcoming)',
    date: 'August 10, 2025',
    description: 'An upcoming high-energy conference featuring startup founders, ecosystem leaders, and growth experts. Secure your seat now!',
    images: [
   ],
    upcoming: true
  },
  {
    title: 'Business Mixer 2024',
    date: 'March 15, 2024',
    description: 'An energetic networking event where over 150+ entrepreneurs came together to connect, collaborate, and create new business opportunities.',
    images: [
      'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww',
      ],
  },
  {
    title: 'Leadership Summit',
    date: 'January 28, 2024',
    description: 'A full-day summit with talks from business leaders, startup founders, and domain experts — focused on leadership and vision.',
    images: [
      'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww',
      ],
  },
  {
    title: 'Women in Business Forum',
    date: 'December 12, 2023',
    description: 'A powerful session highlighting women entrepreneurs, their journeys, challenges, and breakthroughs.',
    images: [
      'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww',  
    ],
  }
]

export default function EventsPage() {
  const [popupImages, setPopupImages] = useState([])
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const openLightbox = (images, index) => {
    setPopupImages(images)
    setActiveImageIndex(index)
  }

  const closeLightbox = () => {
    setPopupImages([])
    setActiveImageIndex(0)
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % popupImages.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + popupImages.length) % popupImages.length)
  }

  return (
    <div className="bg-card min-h-screen text-softtext">
      <section className="bg-card px-6 py-20 text-center text-softtext">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold mb-4 md:text-6xl text-4xl"
        >
          Past & Upcoming Events
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-softtext/80">
          Explore the highlights and upcoming opportunities to connect with the BOG community.
        </p>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-2xl text-softtext">{event.title}</h2>
                {event.upcoming && (
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                    UPCOMING
                  </span>
                )}
              </div>
              <p className="mb-4 text-sm text-softtext">{event.date}</p>
              <p className="mb-6 text-softtext">{event.description}</p>

              {event.upcoming && (
                <div className="mb-6">
                  <a
                    href="https://forms.gle/your-google-form-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition"
                  >
                    Register for this Event
                  </a>
                </div>
              )}

              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                {event.images.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Event ${index + 1} image ${i + 1}`}
                    className="cursor-pointer h-64 hover:scale-105 object-cover rounded-lg shadow transition w-full"
                    onClick={() => openLightbox(event.images, i)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {popupImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 py-6">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-xl">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
            >
              <X size={28} />
            </button>
            <div className="flex items-center justify-between px-4 py-2 sm:px-6">
              <button onClick={prevImage} className="text-gray-600 hover:text-black">
                <ChevronLeft size={32} />
              </button>
              <div className="w-full flex items-center justify-center">
                <img
                  src={popupImages[activeImageIndex]}
                  alt="Full Preview"
                  className="max-h-[75vh] object-contain rounded"
                />
              </div>
              <button onClick={nextImage} className="text-gray-600 hover:text-black">
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
