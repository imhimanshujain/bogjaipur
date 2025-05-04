'use client'

import Image from 'next/image'
import { Trophy, Users, Briefcase } from 'lucide-react'

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
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    title: '10+ Core Partners',
    desc: 'Our trusted team who lead verticals and drive our growth.'
  }
]

export default function AboutUs() {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-12">About BOG Jaipur</h1>

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
        <div className="bg-indigo-50 rounded-2xl px-8 py-10 text-center mb-20">
          <h3 className="text-2xl font-semibold italic text-indigo-700">
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
    </section>
  )
}
