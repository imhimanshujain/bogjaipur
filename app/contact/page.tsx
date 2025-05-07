'use client'
import { motion } from 'framer-motion'
import CountUp from '@/components/CountUp'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'

import { Mail, MapPin, Phone, Send, Facebook, Instagram, Twitter } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 className="text-5xl font-bold text-center mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Contact Us</motion.h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Have questions? Want to explore opportunities with BOG? We're just a message away.
        </p>

        {/* Fillers */}
        <div className="text-center bg-gray-50 rounded-2xl py-10 px-6 mb-20 shadow">
          <motion.h2 className="text-2xl font-semibold mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Join a movement of entrepreneurs.</motion.h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-4">
            Whether you’re building your first product, expanding across cities, or just craving meaningful business relationships — BOG is the place.
          </p>
          <p className="text-sm text-gray-700 italic mb-6">
            Let’s build something incredible. Together.
          </p>
          <motion.a
            href="https://drive.google.com/drive/folders/1E_--QLGMuQM0VGiKxukaxbGhT9aBR7i3" // 🔁 Replace this with your actual Google Form link
            target="_blank"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            rel="noopener noreferrer"
          >
            <Send size={18} /> Contact us Now!
          </motion.a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-indigo-500" />
              <span>BOG CITY NETWORK LLP, E-2/269, roshanpath, chitrakoot,Jaipur, Rajasthan</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-gray-500" />
              <span>+91 9928914363</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-gray-500" />
              <span>connect@bogjaipur.in</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
              <a href="https://www.facebook.com/bogjaipur" target="_blank" className="text-gray-500 hover:text-[#0077b5] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/bogjaipur?igsh=NmhmbmlpaDVvd2tv" target="_blank" className="text-gray-500 hover:text-[#E4405F] transition-colors">
                <Instagram size={24} />
              </a>
              {/* <a href="#" target="_blank" className="text-gray-500 hover:text-[#1DA1F2] transition-colors">
                <Twitter size={24} />
              </a> */}
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-72 overflow-hidden rounded-2xl border">

            <iframe         
             title="BOG Location"    
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.9712954785327!2d75.7314180754392!3d26.904406076652112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzE1LjkiTiA3NcKwNDQnMDIuNCJF!5e0!3m2!1sen!2sin!4v1746643347779!5m2!1sen!2sin" 
              ></iframe>
          </div>
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
