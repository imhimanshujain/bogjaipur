'use client'

import { Newspaper, Video, Mic } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const mediaUpdates = [
  {
    type: 'News Article',
    icon: <Newspaper className="w-7 h-7 text-indigo-600" />,
    title: 'BOG launch news',
    desc: 'Business Owners Group (BOG) scheduled launch was featured in Dainik Bhaskar as a disruptive platform to empower local entrepreneurs.',
    date: 'April 15, 2025',
    image: '/news1.webp',
    link: 'https://dainik.bhaskar.com/Wkg2cVy8BSb'
  },
  {
    type: 'News Article',
    icon: <Newspaper className="w-7 h-7 text-indigo-600" />,
    title: 'BOG event news',
    desc: 'Business Owners Group (BOG) Jaipur was featured for its official launch on April 19, 2025, as a platform to unite and empower local entrepreneurs.',
    date: 'April 19, 2025',
    image: '/news3.png',
    link: 'https://dainik.bhaskar.com/tRk427fiISb'
  },
  {
    type: 'Event Video',
    icon: <Video className="w-7 h-7 text-red-500" />,
    title: 'Highlights from BOG Kickoff 2025',
    desc: 'Watch the video of BOG being featured in nation news 24  .',
    date: 'April 20, 2025',
    image: '/news2.png',
    link: 'https://youtu.be/NyKbuWLPiMk?si=Fnjq9a7k5at1mEnw'
  }
]

export default function NewsPage() {
  const router = useRouter()

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">News & Media</h1>
        <p className="text-center text-lg text-gray-600 mb-20 max-w-3xl mx-auto">
          Catch up on all the buzz, coverage, and conversations around BOG Jaipur — from major news outlets to exclusive media we produce for our community.
        </p>

        {/* Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mediaUpdates.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden border bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="h-55 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.type}</span>
                  </div>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <a
                  href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-indigo-600 hover:underline"
                >
                  {item.type =='Event Video'?'Watch Now →' : 'Read More →'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <h3 className="text-2xl font-bold mb-4">Want to feature BOG Jaipur?</h3>
          <button
            onClick={() => router.push('/contact')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Connect with us →
          </button>
        </div>
      </div>
    </section>
  )
}
