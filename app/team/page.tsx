'use client'

import { motion } from 'framer-motion'
import teamData from './teamdata'

export default function TeamPage() {
  return (
    <div className="bg-card min-h-screen text-softtext">
      {/* Hero */}
      <section className="bg-card px-6 py-20 text-center text-softtext">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold mb-4 md:text-6xl text-4xl"
        >
          Meet the Team
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-softtext/80">
          The leaders, builders, and mentors behind BOG India — guiding our vision and growth.
        </p>
      </section>

      {/* Sections */}
      <section className="bg-gray-50 px-6 py-20">
  <div className="max-w-6xl mx-auto space-y-20">
    {Object.entries(teamData).map(([role, members], i) => (
      <motion.div
        key={role}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-bold mb-12 text-3xl text-softtext">{role}</h2>
        <div className="flex flex-wrap gap-12 justify-center">
          {members.map((person, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={person.image}
                alt={person.name}
                className="border-4 border-accent h-48 mb-4 md:h-56 md:w-56 object-cover rounded-full shadow-lg w-48"
              />
              <p className="font-semibold text-xl">{person.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  )
}
