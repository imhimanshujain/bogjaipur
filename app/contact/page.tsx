'use client'

import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Twitter } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Have questions? Want to explore opportunities with BOG Jaipur? We're just a message away.
        </p>

        {/* Fillers */}
        <div className="text-center bg-indigo-50 rounded-2xl py-10 px-6 mb-20 shadow">
          <h2 className="text-2xl font-semibold mb-2">Join a movement of entrepreneurs.</h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-4">
            Whether you’re building your first product, expanding across cities, or just craving meaningful business relationships — BOG Jaipur is the place.
          </p>
          <p className="text-sm text-indigo-700 italic mb-6">
            Let’s build something incredible. Together.
          </p>
          <a
            href="https://forms.gle/your-google-form-link" // 🔁 Replace this with your actual Google Form link
            target="_blank"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
            rel="noopener noreferrer"
          >
            <Send size={18} /> Fill the Google Form
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-indigo-500" />
              <span>BOG Office, Jaipur, Rajasthan</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-indigo-500" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-indigo-500" />
              <span>connect@bogjaipur.in</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
              <a href="#" target="_blank" className="text-gray-500 hover:text-[#0077b5] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" target="_blank" className="text-gray-500 hover:text-[#E4405F] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" target="_blank" className="text-gray-500 hover:text-[#1DA1F2] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-72 overflow-hidden rounded-2xl border">
            <iframe
              title="BOG Jaipur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.719618206365!2d75.80067461504403!3d26.860994983152938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3102b7c7d65%3A0x2a5cb36af9b12d5d!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1656523825794!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
