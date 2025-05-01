'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-primary mb-6"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 mb-8"
        >
          We'd love to hear from you. Reach out for collaborations or inquiries.
        </motion.p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
