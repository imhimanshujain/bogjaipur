'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CTAButton from './CTAButton';

export default function Contact() {
  return (
    <section className="bg-card px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-bold mb-4 md:text-4xl text-3xl text-softtext">
          Ready to Collaborate?
        </h2>
        <p className="mb-8 text-lg text-softtext">
          Whether you’re a business owner, mentor, or growth partner — we’d love to connect with you.
        </p>

        <Link href="/contact">
          <CTAButton className="bg-accent text-primary animate-pulse-scale hover:scale-105 mt-6 bg-card rounded-lg text-softtext px-6 animate-pulse transition py-2">
            Contact Us
          </CTAButton>
        </Link>
      </motion.div>
    </section>
  )
}
