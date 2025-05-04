'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Lightbulb, TrendingUp, Handshake, Target } from 'lucide-react'

const services = [
  {
    icon: <Briefcase size={36} className="mb-4 text-softtext" />,
    title: 'Business Networking',
    description:
      'We create opportunities for members to build long-lasting business relationships and grow their professional networks.',
  },
  {
    icon: <Users size={36} className="mb-4 text-softtext" />,
    title: 'Member Referrals',
    description:
      'Referrals are at the heart of our ecosystem. Members actively refer trusted connections, ensuring high conversion and trust.',
  },
  {
    icon: <Lightbulb size={36} className="mb-4 text-softtext" />,
    title: 'Knowledge Exchange',
    description:
      'We conduct workshops, guest talks, and learning sessions to upskill our members and fuel personal and professional growth.',
  },
  {
    icon: <Handshake size={36} className="mb-4 text-softtext" />,
    title: 'Strategic Alliances',
    description:
      'We help businesses find the right partners to collaborate with — from investors to solution providers to strategic vendors.',
  },
  {
    icon: <TrendingUp size={36} className="mb-4 text-softtext" />,
    title: 'Growth Acceleration',
    description:
      'Accelerate your business growth through collective visibility, shared resources, and a community that genuinely wants you to win.',
  },
  {
    icon: <Target size={36} className="mb-4 text-softtext" />,
    title: 'Goal Alignment',
    description:
      'Our structured formats ensure members stay focused on what matters, helping them align their growth goals with actual action.',
  },
]

export default function ServicesPage() {
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
          What We Offer
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-softtext/80">
          Designed to empower entrepreneurs and business leaders through high-impact services.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-bold mb-10 text-3xl text-softtext">Our Core Services</h2>
          <div className="gap-8 grid md:grid-cols-3 text-left">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card hover:shadow-lg p-6 rounded-xl shadow"
              >
                {service.icon}
                <h3 className="font-semibold mb-2 text-xl">{service.title}</h3>
                <p className="text-softtext">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Benefits */}
      <section className="bg-card px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-bold mb-6 text-3xl text-softtext">Why Members Love BOG</h2>
          <p className="mb-10 text-lg text-softtext">
            Our members don’t just receive services, they experience transformation in how they do business, connect, and grow.
          </p>
          <ul className="list-disc list-inside max-w-2xl mx-auto space-y-4 text-left text-softtext">
            <li>Weekly networking formats that ensure visibility</li>
            <li>Goal tracking & achievement system</li>
            <li>Private WhatsApp & resource sharing groups</li>
            <li>Monthly knowledge & guest speaker sessions</li>
            <li>Referral-based leads with high conversion rates</li>
            <li>Opportunities to lead, speak & mentor</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-20 text-center text-softtext">
        <h2 className="font-bold mb-4 md:text-4xl text-3xl">Let’s Build Something Bigger</h2>
        <p className="mb-6 text-lg text-softtext/80">Connect with us and unlock the full potential of your business journey.</p>
        <a
          href="/contact"
          className="bg-card font-semibold hover:bg-card inline-block px-8 py-3 rounded-md text-softtext transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
