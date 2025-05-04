'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CTAButton from './CTAButton'
export default function Hero() {
  const fullText = 'Weelcome to BOG India'
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index))
      index++
      if (index >= fullText.length) clearInterval(timer)
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="about"
      className="bg-card flex items-center justify-center min-h-[80vh] px-6 relative text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.3 }}
          src="/hero-network.png"
          alt="Networking Background"
          className="h-full object-cover w-full"
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl relative text-softtext z-10 text-white">
        <h1 className="font-bold mb-4 md:text-5xl text-4xl tracking-wide">
          {typedText}
          <span className="animate-pulse text-softtext">|</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-6 md:text-xl text-lg text-softtext/80"
        >
          India's most vibrant business networking group, built on trust, growth and collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Link href="/about">
            <CTAButton className="bg-accent text-primary animate-pulse-scale hover:scale-105 mt-6 bg-card rounded-lg text-softtext px-6 animate-pulse transition py-2">
              Learn More
            </CTAButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
