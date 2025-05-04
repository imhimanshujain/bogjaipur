'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="bg-card min-h-screen text-softtext">
      {/* Hero Section */}
      <section className="bg-card px-6 py-20 text-center text-softtext">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold mb-4 md:text-6xl text-4xl"
        >
          About BOG India
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl md:text-xl mx-auto text-lg text-softtext/80"
        >
          BOG India is a dynamic network of business owners, entrepreneurs, and innovators driving collaborative growth across industries.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold mb-10 text-3xl text-softtext">Our Mission & Vision</h2>
          <div className="gap-10 grid md:grid-cols-2 text-left">
            <div>
              <h3 className="font-semibold mb-2 text-xl">Mission</h3>
              <p>
                To create a trusted and collaborative ecosystem for entrepreneurs to grow together,
                exchange ideas, and foster long-term partnerships that benefit the entire community.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-xl">Vision</h3>
              <p>
                To become India’s most impactful business network by connecting individuals who are
                passionate about progress, ethics, and collective success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-card px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold mb-10 text-3xl text-softtext">Our Core Values</h2>
          <div className="gap-8 grid md:grid-cols-3">
            {[
              ['Trust & Integrity', 'We build relationships on mutual respect and transparency.'],
              ['Growth Mindset', 'We encourage personal, professional, and financial growth.'],
              ['Collaboration', 'Together, we achieve more. We support, refer and uplift each other.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-card hover:shadow-lg p-6 rounded-xl shadow"
              >
                <h3 className="font-semibold mb-2 text-xl">{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold mb-6 text-3xl text-softtext">Our Journey</h2>
          <p className="leading-relaxed text-lg text-softtext">
            Founded in 2024, BOG India started with a vision to bring Jaipur’s brightest business minds together.
            What began as a small group of passionate entrepreneurs has grown into a powerful collective of over 100+
            members across industries, geographies, and disciplines — all united by shared values and ambition.
          </p>
        </div>
      </section>

      {/* Global Impact */}
      <section className="bg-card px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold mb-10 text-3xl text-softtext">Our Impact</h2>
          <div className="gap-8 grid md:grid-cols-4 text-center text-softtext">
            {[
              ['100+', 'Active Members'],
              ['30+', 'Industries Represented'],
              ['500+', 'Business Referrals Shared'],
              ['10 Cr+', 'Business Value Generated'],
            ].map(([metric, label]) => (
              <div key={label} className="bg-card p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2 text-4xl text-softtext">{metric}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card py-20 text-center text-softtext">
        <h2 className="font-bold mb-4 md:text-4xl text-3xl">Ready to Grow With Us?</h2>
        <p className="mb-6 text-lg text-softtext/80">Join a powerful network of business owners and unlock new possibilities.</p>
        <a
          href="/contact"
          className="bg-card font-semibold hover:bg-card inline-block px-8 py-3 rounded-md text-softtext transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
