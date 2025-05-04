'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const groupedTeam = {
  'Founding Team': [
    {
      name: 'Neha Ashok Gupta',
      role: 'Founder & Chairperson',
      image: '/neha.jpeg',
      bio: 'Neha is a performance marketer with 14+ years of experience, leading Cybrotechs and building thriving ecosystems.',
      quote: 'BOG Jaipur is where real growth, community, and vision meet.'
    }
  ],
  Directors: [
    {
      name: 'Aman Verma',
      role: 'Community Director',
      image: '/neha.jpeg',
      bio: 'Aman connects founders and mentors to unlock potential for every BOG member.',
      quote: 'BOG is a genuine engine of entrepreneurship in Jaipur.'
    },
    {
      name: 'Rhea Kapoor',
      role: 'Events Director',
      image: '/neha.jpeg',
      bio: 'Rhea leads all events with precision, passion, and people-first planning.',
      quote: 'At BOG, every event becomes an opportunity for collaboration.'
    }
  ],
  Advisors: [
    {
      name: 'Rajiv Mehta',
      role: 'Strategic Advisor',
      image: '/neha.jpeg',
      bio: 'Rajiv brings 25+ years of experience across retail, scale-ups, and angel investments.',
      quote: 'BOG has created the perfect launchpad for bold businesses.'
    }
  ]
}

export default function TeamPage() {
  const [activeMember, setActiveMember] = useState(null)

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">Meet Our Team</h1>
        <p className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto">
          The hearts and minds behind BOG Jaipur — building the future of collaborative growth.
        </p>

        {Object.entries(groupedTeam).map(([section, members], sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <h2 className="text-2xl font-bold mb-8">{section}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {members.map((member, i) => (
                <div
                  key={`${sectionIndex}-${i}`}
                  className="text-center cursor-pointer"
                  onClick={() => setActiveMember(member)}
                >
                  <div className="mx-auto w-40 h-40 relative rounded-full overflow-hidden shadow-md mb-4">
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
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
                onClick={() => setActiveMember(null)}
              >
                <X size={20} />
              </button>
              <div className="mt-8 md:mt-0">
                <p className="text-sm text-gray-700 mb-4">
                  <strong>About:</strong> {activeMember.bio}
                </p>
                <p className="italic text-indigo-600 text-sm">
                  “{activeMember.quote}”
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
