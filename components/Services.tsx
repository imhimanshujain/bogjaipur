'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, Users, Lightbulb } from 'lucide-react'
import CTAButton from './CTAButton';
const AnimatedCTA = ({ href }: { href: string }) => (
  <Link href={href}>
    <CTAButton className="bg-accent text-primary animate-pulse-scale hover:scale-105 mt-6 bg-card rounded-lg text-softtext px-6 animate-pulse transition py-2">
      Know More
    </CTAButton>
  </Link>
);
const services = [
  {
    icon: <Briefcase size={32} className="mb-4 text-softtext" />,
    title: 'Business Networking',
    description: 'Connecting industry leaders under one trusted platform.',
  },
  {
    icon: <Users size={32} className="mb-4 text-softtext" />,
    title: 'Collaborative Growth',
    description: 'Fostering partnerships that drive mutual success.',
  },
  {
    icon: <Lightbulb size={32} className="mb-4 text-softtext" />,
    title: 'Innovative Solutions',
    description: 'Empowering businesses with cutting-edge strategies.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-card py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-bold mb-12 text-3xl text-softtext">Our Services</h2>
        <div className="gap-8 grid md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-muted flex flex-col hover:shadow-lg items-center p-6 rounded-lg shadow transition-shadow"
            >
              {service.icon}
              <h3 className="font-semibold mb-2 text-xl">{service.title}</h3>
              <p className="text-softtext">{service.description}</p>
            </motion.div>
          ))}
        </div>
                {/* CTA inside section */}
                <div className="mt-10">
          <AnimatedCTA href="/services" />
        </div>
      </div>
    </section>
  )
}
