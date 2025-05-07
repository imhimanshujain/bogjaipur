'use client'
import { motion } from 'framer-motion'
import CountUp from '@/components/CountUp'
import Link from 'next/link'
import Image from 'next/image'

import { Megaphone, UsersRound, Lightbulb, Rocket, ShieldCheck, BadgeCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ChevronRight, ArrowRight } from 'lucide-react'

const services = [

  {
    icon: <UsersRound className="w-10 h-10 text-emerald-600" />,
    title: 'Networking Events',
    desc: 'Connect, collaborate, and grow through exclusive meetups, open pitch sessions, and curated mixers.'
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    title: 'Mentorship Programs',
    desc: 'Get paired with industry leaders who guide you with real-world strategies, experience, and insights.'
  },
  {
    icon: <Rocket className="w-10 h-10 text-red-500" />,
    title: 'Startup Launch Support',
    desc: 'From brand identity to GTM, we provide end-to-end support for startups ready to scale fast.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: 'Business Compliance Help',
    desc: 'We connect you with legal and financial advisors to ensure your business remains protected and compliant.'
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-teal-500" />,
    title: 'Partnership Matchmaking',
    desc: 'Looking for a co-founder, investor, or partner? We’ve got a powerful business matchmaking engine.'
  }
]

export default function ServicesPage() {
  const router = useRouter()

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <motion.h1 className="text-5xl font-bold text-center mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Our Services</motion.h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Everything we offer is designed to help business owners thrive — through community, clarity, and action.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 border bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{s.title}</h3>
              <p className="text-center text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 📸 Image Showcase */}
        <div className="my-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: '/event1_12.jpeg', alt: 'Team Photo' },
            { src: '/event1_14.jpeg', alt: 'Networking Event' },
            { src: '/event1_3.jpeg', alt: "Founders' Meet" }
          ].map(({ src, alt }, idx) => (
            <div key={idx} className="relative h-72 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"


              />
            </div>
          ))}
        </div>

        {/* ✨ Filler: Testimonial Strip */}
        <div className="bg-gray-50 py-12 px-6 rounded-2xl text-center mb-20 shadow-md">
          <h3 className="text-2xl font-semibold italic text-gray-800 mb-2">
            “Our brand visibility skyrocketed after joining BOG’s marketing workshops.”
          </h3>
          <p className="text-sm text-gray-600">– BOG Business member</p>
        </div>

        {/* 🚀 Why Work With Us */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Why Work With BOG?</motion.h2>
          <p className="text-gray-700">
            We don’t just provide services — we create success stories. You get strategic connections, 
            proven playbooks, and a vibrant community that wants to see you win.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to take your business to the next level?</h3>
          <button
            onClick={() => router.push('/contact')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Let’s Connect →
          </button>
        </div>
      </div>
    
      {/* Stats Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-4xl font-semibold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Our Impact At A Glance</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
              <p className="text-5xl font-bold text-gray-600">20+</p>
              <p className="text-gray-700">Events Hosted</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-600">100+</p>
              <p className="text-gray-700">Members Networked</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-600">25+</p>
              <p className="text-gray-700">Expert Speakers</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/events" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:underline">
            View All Events <ArrowRight className="ml-1" />
          </Link>
        </div>
      </section>
      <div className="py-10 px-6 bg-gray-50 text-center italic text-gray-700">
        “The strength of the team is each individual member.” — Phil Jackson
      </div>

      {/* Gallery */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-semibold mb-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Gallery</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[5,6,7,8].map(i => (
              <div key={i} className="h-48 bg-gray-200 relative overflow-hidden rounded-lg overflow-hidden relative">
                <Image src={`/event1_${i}.jpeg`} alt="Gallery" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/events" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:underline">
            View All Events <ArrowRight className="ml-1" />
          </Link>
        </div>
      </section>

      </section>
  )
}
