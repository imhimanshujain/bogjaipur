"use client";

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import CTAButton from '../../components/CTAButton'
import Image from 'next/image'

const events = [
  {
    title: 'Startup Success Conclave (Upcoming)',
    date: 'August 10, 2025',
    description: 'An upcoming high-energy conference featuring startup founders, ecosystem leaders, and growth experts. Secure your seat now!',
    images: [],
    upcoming: true
  },
  {
    title: 'BOG Launch Event',
    date: 'April 19, 2025',
    description: 'An energetic networking event where over 150+ entrepreneurs came together to connect, collaborate, and create new business opportunities.',
    images: [
      '/event1_6.jpeg',
      '/event1_7.jpeg',
      '/event1_8.jpeg',
      '/event1_9.jpeg',
      '/event1_10.jpeg',
      '/event1_11.jpeg',
      '/event1_12.jpeg',
      '/event1_13.jpeg',
      '/event1_14.jpeg',
      '/event1_15.jpeg',
      '/event1_1.jpeg',
      '/event1_2.jpeg',
      '/event1_3.jpeg',
      '/event1_4.jpeg',
      '/event1_5.jpeg',

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
          Recent & Upcoming Events
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
                  <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
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
                {(event.images.slice(0, 2)).map((url, i) => (
                  <div
                    key={i}
                    className="relative w-full h-64 cursor-pointer hover:scale-105 transition rounded-lg overflow-hidden shadow"
                    onClick={() => openLightbox(event.images, i)}
                  >
                    <Image
                      src={url}
                      alt={`Event ${index + 1} image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {event.images.length > 2 && (
                <div className="mt-4 text-center">
                  <motion.button
                    onClick={() => openLightbox(event.images, 0)}
                    className="inline-block bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    View All Photos
                  </motion.button>
                </div>
              )}
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
              <div className="relative w-full h-[75vh]">
                <Image
                  src={popupImages[activeImageIndex]}
                  alt="Full Preview"
                  fill
                  className="object-contain rounded"
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
