'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[80vh] bg-muted flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-primary mb-4"
      >
        Welcome to BOG Jaipur
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-700 max-w-xl"
      >
        A consortium of business leaders creating impact through vision, innovation, and purpose.
      </motion.p>
    </section>
  )
}
