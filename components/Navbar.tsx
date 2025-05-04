'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = ['About', 'Services', 'Events', 'Team', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/bog-logo.png"
            alt="BOG India Logo"
            className="w-24 h-12 object-contain"
          />
        </Link>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-white w-full md:w-auto left-0 text-center transition-all ${
            open ? 'top-16' : 'top-[-300px]'
          }`}
        >
          {links.map((item) => (
            <li key={item} className="md:ml-6 my-6 md:my-0">
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-accent hover:text-accent/80 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
