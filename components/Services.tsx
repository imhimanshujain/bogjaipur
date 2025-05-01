'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: <Briefcase size={32} className="text-accent mb-4" />,
    title: 'Business Networking',
    description: 'Connecting industry leaders under one trusted platform.',
  },
  {
    icon: <Users size={32} className="text-accent mb-4" />,
    title: 'Collaborative Growth',
    description: 'Fostering partnerships that drive mutual success.',
  },
  {
    icon: <Lightbulb size={32} className="text-accent mb-4" />,
    title: 'Innovative Solutions',
    description: 'Empowering businesses with cutting-edge strategies.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-muted rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
