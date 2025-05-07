'use client'
import Image from 'next/image'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2"><Image src="/bog-logo.png" alt="BOG Logo" width={80} height={40} /></Link>
        <ul className="hidden md:flex items-center space-x-6">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-700 hover:text-gray-900 transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu omitted for brevity */}
      </div>
    </motion.nav>
  )
}