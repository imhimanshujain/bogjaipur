'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { ChevronRight } from 'lucide-react'

export default function Gallery({ images }: { images: string[] }) {
  const visible = images.slice(0, 4)
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6 text-center"
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {visible.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="relative h-48 overflow-hidden rounded-lg"
            >
              <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
        {images.length > 4 && (
          <div className="text-center mt-6">
            <Link href="/events">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:underline"
              >
                View All Events <ChevronRight className="ml-1" />
              </motion.a>
            </Link>
          </div>
        )}
      </div>
    </section>
)
}
