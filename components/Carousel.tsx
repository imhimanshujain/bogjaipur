'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

type CarouselProps = {
  images: string[]
  intervalMs?: number
}

export default function Carousel({ images, intervalMs = 3000 }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = () => {
    setCurrent((c) => (c + 1) % images.length)
  }
  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }

  useEffect(() => {
    intervalRef.current = setInterval(next, intervalMs)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [images, intervalMs])

  // Stop auto‐swipe when user manually navigates
  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    prev()
  }
  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    next()
  }

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
      <Image
        key={current}
        src={images[current]}
        alt={`Slide ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
      />

      <motion.button
        onClick={handlePrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  )
}
