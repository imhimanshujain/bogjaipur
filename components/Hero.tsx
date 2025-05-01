'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[80vh] flex items-center justify-center text-center px-6 bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          src="/hero-network.png" // or use full Unsplash URL
          alt="Networking Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to BOG India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-white/80"
        >
          A consortium of business leaders creating impact through vision, innovation, and purpose.
        </motion.p>
      </div>
    </section>
  )
}
