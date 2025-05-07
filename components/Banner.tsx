'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

type BannerProps = {
  title: string
  subtitle: string
  image: string
  ctaLabel?: string
  ctaHref?: string
}

export default function Banner({ title, subtitle, image, ctaLabel, ctaHref }: BannerProps) {
  return (
    <section className="relative h-64 sm:h-80 lg:h-96 bg-gray-200 mb-12 overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-2 text-sm sm:text-lg text-gray-700 max-w-2xl"
        >
          {subtitle}
        </motion.p>
        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4"
          >
            <Link href={ctaHref}>
              <span className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                {ctaLabel}
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
)
}
