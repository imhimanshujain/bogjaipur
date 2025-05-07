'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function QuoteBlock({ text, image }: { text: string, image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gray-50 flex flex-col md:flex-row items-center gap-6 px-6 rounded-xl my-12"
    >
      <div className="relative w-24 h-24 overflow-hidden rounded-full flex-shrink-0">
        <Image src={image} alt="Quote author" fill className="object-cover" />
      </div>
      <p className="italic text-gray-700 text-center md:text-left">{text}</p>
    </motion.div>
  )
}
