'use client'

import CountUp from '@/components/CountUp'
import { motion } from 'framer-motion'

type Stat = {
  label: string
  value: number
}

export default function Statssection({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-8"
        >
          Our Impact at a Glance
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <p className="text-5xl font-bold text-gray-900">
                <CountUp end={s.value} />+
              </p>
              <p className="text-gray-700 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
