'use client'
import { motion } from 'framer-motion'
import CountUp from '@/components/CountUp'
import Link from 'next/link'

import Image from 'next/image'
import { Trophy, Users, Briefcase } from 'lucide-react'
import { ChevronRight, ArrowRight } from 'lucide-react'

const impact = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: '100+ Businesses Impacted',
    desc: 'We’ve helped over 100 businesses grow through networking & mentorship.'
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    title: '75+ Active Members',
    desc: 'From across Jaipur’s industries, collaborating under one platform.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-gray-600" />,
    title: '10+ Core Partners',
    desc: 'Our trusted team who lead verticals and drive our growth.'
  }
]

export default function AboutUs() {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1 className="text-5xl font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>About BOG</motion.h1>

        {/* About Text */}
        <div className="text-lg leading-8 mb-16 text-center max-w-3xl mx-auto">
          <p>
            Business Owners Group (BOG) Jaipur is a powerful collective of entrepreneurs and professionals who are building the future of the city’s business ecosystem. Through curated events, mentorship, collaboration, and a deeply supportive network — we help businesses scale with confidence.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="h-72 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xl">
            Team Photo
          </div>
          <div className="h-72 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xl">
            Networking Event
          </div>
          <div className="h-72 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xl">
            Founders' Meet
          </div>
        </div>

        {/* Filler Quote */}
        <div className="bg-gray-50 rounded-2xl px-8 py-10 text-center mb-20">
          <h3 className="text-2xl font-semibold italic text-gray-700">
            "When ambitious minds connect, empires are built."
          </h3>
        </div>

        {/* Impact Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {impact.map((item, i) => (
            <div
              key={i}
              className="border rounded-3xl p-8 text-center bg-gray-50 hover:bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    
      {/* Stats Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-4xl font-semibold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Our Impact At A Glance</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold text-gray-600">200+</p>
              <p className="text-gray-700">Events Hosted</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-600">500+</p>
              <p className="text-gray-700">Members Networked</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-600">50+</p>
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
        “Coming together is a beginning; keeping together is progress; working together is success.” — Henry Ford
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
