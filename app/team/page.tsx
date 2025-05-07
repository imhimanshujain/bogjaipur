'use client'
import { motion } from 'framer-motion'
import CountUp from '@/components/CountUp'
import Link from 'next/link'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { ChevronRight, ArrowRight } from 'lucide-react'

const groupedTeam = {
  'Director': [
    {
      name: 'Gaurav Arora',
      role: 'Director',
      image: '/man2.jpeg',
      bio: 'Gaurav is a dedicated professional focused on empowering BOG’s leadership ecosystem.',
      quote: 'BOG is where real growth, community, and vision meet.'
    },
    {
      name: 'Kapil Khanna',
      role: 'Director',
      image: '/man1.jpeg',
      bio: 'Kapil contributes to BOG’s growth journey with strategic insights and a collaborative mindset.',
      quote: 'BOG is where real growth, community, and vision meet.'
    },
    {
      name: 'Sunil Kumawat',
      role: 'Director',
      image: '/man4.jpeg',
      bio: 'Sunil brings practical leadership and focused intent to drive value for BOG members.',
      quote: 'BOG is where real growth, community, and vision meet.'
    }
  ],
  'Co-Director': [
    {
      name: 'Sejal Luharuka',
      role: 'Co-Director',
      image: '/lady2.jpeg',
      bio: 'Sejal brings energy and a member-first approach to the BOG community.',
      quote: 'BOG is a genuine engine of entrepreneurship.'
    },
    {
      name: 'Neha Gupta',
      role: 'Co-Director',
      image: '/neha.jpeg',
      bio: 'Neha ensures every member experience is smooth, impactful, and memorable.',
      quote: 'At BOG, every event becomes an opportunity for collaboration.'
    },
    {
      name: 'Siddarth Makharia',
      role: 'Co-Director',
      image: '/man5.jpeg',
      bio: 'Siddarth plays a key role in organizing BOG’s community engagements with flair.',
      quote: 'At BOG, every event becomes an opportunity for collaboration.'
    }
  ],
  'Mentor': [
    {
      name: 'Bhawana Sugandha',
      role: 'Mentor',
      image: '/lady3.jpeg',
      bio: 'Bhawana offers strategic guidance and mentorship to help BOG members scale confidently.',
      quote: 'BOG has created the perfect launchpad for bold businesses.'
    }
  ]
}

export default function TeamPage() {
  const [activeMember, setActiveMember] = useState<any>(null)

  return (
    <section className="bg-white text-black py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 className="text-5xl font-bold mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Meet Our Team</motion.h1>
        <p className="text-gray-600 text-lg mb-20 max-w-2xl mx-auto">
          The hearts and minds behind BOG — building the future of collaborative growth.
        </p>

        {Object.entries(groupedTeam).map(([section, members], sectionIndex) => (
          <div key={sectionIndex} className="mb-24">
            <motion.h2 className="text-3xl font-semibold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>{section}</motion.h2>

            <div className="flex flex-wrap justify-center gap-12">
              {members.map((member:any, i) => (
                <div
                  key={`${sectionIndex}-${i}`}
                  className="text-center cursor-pointer"
                  onClick={() => setActiveMember(member)}
                >
                  <div className="mx-auto w-60 h-60 relative py-[150px] rounded-2xl overflow-hidden shadow-md mb-4 border-2 border-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeMember && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4" onClick={() => setActiveMember(null)}>
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="p-6 flex flex-col items-center justify-center bg-gray-50">
              <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-md mb-4">
                <Image
                  src={activeMember.image}
                  alt={activeMember.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{activeMember.name}</h3>
              <p className="text-sm text-gray-600">{activeMember.role}</p>
            </div>

            {/* Text Side */}
            <div className="p-6 relative">
              <motion.button
                className="absolute top-4 right-4 text-gray-400 hover:text-black" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setActiveMember(null)}
              >
                <X size={20} />
              </motion.button>
              <div className="mt-8 md:mt-0">
                <p className="text-sm text-gray-700 mb-4">
                  <strong>About:</strong> {activeMember.bio}
                </p>
                <p className="italic text-gray-600 text-sm">
                  “{activeMember.quote}”
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Contact CTA */}
      <div className="mt-32 text-center bg-gray-50 rounded-2xl px-6 py-12 max-w-4xl mx-auto shadow">
        <motion.h2 className="text-2xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Want to collaborate or join the BOG?</motion.h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          We're always looking for passionate leaders, partners, and mentors who want to make a difference. Let’s build something impactful together.
        </p>
        <motion.a
          href="/contact" // 🔁 change to your Google Form link if needed
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
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
        “Great things in business are never done by one person.” — Steve Jobs
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
