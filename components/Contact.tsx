'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-muted py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Have a question or want to connect with BOG India? We'd love to hear from you.
        </p>

        <form className="space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent  px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
