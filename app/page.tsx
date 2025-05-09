// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Users,
  BookOpen,
  TrendingUp,
  X,
  HandHeart,
  Hand
} from 'lucide-react';
import Carousel from '@/components/Carousel';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on initial load
    if(!window.localStorage["sp"]) setShowPopup(true);
  }, []);

  return (
    <>
      {/* First-time Popup */}
{showPopup && (
  <div   className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
    <div style={{background:'#ffff89'}} className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl p-15 ">
      
      {/* Fireworks background */}
      <img
        src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
        alt="Fireworks"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
      />

      {/* Close button */}
      <button
        onClick={() => {setShowPopup(false); window.localStorage["sp"]=true}}
        className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 z-10"
      >
        <X size={28} />
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 py-12 space-y-6">
        
        {/* Greeting */}
        <div style={{color:'#612d2c'}} className="flex flex-column items-center space-x-3">
          <div className='flex flex-col justify-center gap-8'>
            <div className="text-6xl font-bold">
              खम्मा घणी 
                </div>              <Image
                src="/namaste.png"
                alt="Namaste"
                width={64}
                height={64}
                className=" w-20 h-20" style={{margin: "0 auto"}}/>
              <div  className="text-5xl font-bold">Business Owners!</div> 
           </div>
          
        </div>
        


        {/* Logo + “is live!” */}

        <div style={{color:'#612d2c', background:'#ffff89'}} className="flex flex-row align-middle space-x-6  items-center justify-center text-center mt-5">
          <Image
            src="/bog-logo.png"
            alt="BOG Logo"
            width={120}
            height={50}
            className=" w-40 h-24"
          />
          <div style={{color:"#5e5e5e"}} className="flex text-5xl font-bold align-middle">is</div>
          <motion.div
            className="flex text-5xl font-bold align-middle"
            animate={{
              color: [
                '#ff004f',
                '#eaff00',
                '#00ffea',
                '#ff006e',
                '#00eaff',
                '#ff00bf',
              ],
              textShadow: [
                '0 0 16px #ff004f,0 0 32px #ff004f',
                '0 0 16px #eaff00,0 0 32px #eaff00',
                '0 0 16px #00ffea,0 0 32px #00ffea',
                '0 0 16px #ff006e,0 0 32px #ff006e',
                '0 0 16px #00eaff,0 0 32px #00eaff',
                '0 0 16px #ff00bf,0 0 32px #ff00bf',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            live!
          </motion.div>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Hero Section */}
      <section className="relative h-screen bg-gray-800 text-white flex items-center justify-center px-6">
        <Image
          src="/hero-network.png"
          alt="Networking hero"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Join the Leading Business Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-2xl mb-8"
          >
            Collaborate, innovate, and grow with like-minded entrepreneurs. Become a part of BOG.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-[150px] bg-white text-black px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 mb-12 leading-relaxed"
          >
            Business Owners Group is a consortium of visionary entrepreneurs dedicated to fostering a supportive ecosystem where businesses can thrive. From networking mixers to leadership summits, our events are crafted to inspire action and deliver real results.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 bg-gray-50 rounded-xl shadow"
            >
              <Users className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Network with Leaders</h3>
              <p className="text-gray-600">Connect with top business minds.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-6 bg-gray-50 rounded-xl shadow"
            >
              <BookOpen className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gain Insights</h3>
              <p className="text-gray-600">Attend workshops and panels featuring industry experts.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="p-6 bg-gray-50 rounded-xl shadow"
            >
              <TrendingUp className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
              <p className="text-gray-600">Leverage shared experiences to scale and innovate.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            BOG Launch Event Highlights
          </motion.h2>
          <Carousel
            images={[
              '/event1_6.jpeg',
              '/event1_7.jpeg',
              '/event1_8.jpeg',
              '/event1_10.jpeg',
              '/event1_15.jpeg',
              '/event1_20.jpeg',
              '/event1_24.jpeg',
            ]}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-6"
          >
            What Our Members Say
          </motion.h2>
          <div className="space-y-8">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="italic text-gray-700"
            >
              “BOG transformed my network overnight. The connections I've made are priceless.”
              <cite className="block mt-2 font-semibold">
                — Bhawana Sugandha, Mentor
              </cite>
            </motion.blockquote>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="italic text-gray-700"
            >
              “Insightful, action-driven, and well-organized. A must for any serious entrepreneur.”
              <cite className="block mt-2 font-semibold">
                — Gaurav Arora, Director
              </cite>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gray-800 text-white text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          Join BOG today and start your growth journey with us.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-700 transition"
          >
            Join Now <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
