'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Facebook } from 'lucide-react'
import contactConfig from './contact-data'

export default function ContactPage() {
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
          Get in Touch
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-softtext/80">
          Whether you're looking to join, collaborate, or just connect — we’d love to hear from you.
        </p>
      </section>

      {/* Contact Details */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="gap-12 grid items-center max-w-4xl md:grid-cols-2 mx-auto">
          {/* Google Map */}
          <div>
            <iframe
              src={contactConfig.mapEmbedUrl}
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info & Links */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-1 text-xl">Email Us</h3>
              <a href={`mailto:${contactConfig.email}`} className="text-softtext underline">
                {contactConfig.email}
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-1 text-xl">Follow Us</h3>
              <div className="flex gap-4 items-center mt-2">
                {contactConfig.socialLinks.map(({ platform, url }) => {
                  const icons: any = {
                    Instagram: <Instagram size={28} />,
                    LinkedIn: <Linkedin size={28} />,
                    Facebook: <Facebook size={28} />,
                  }

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-softtext text-softtext transition"
                      title={platform}
                    >
                      {icons[platform]}
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-1 text-xl">Have a Question?</h3>
              <a
                href={contactConfig.googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card inline-block mt-2 px-6 py-2 rounded text-softtext transition"
              >
                Fill Inquiry Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
