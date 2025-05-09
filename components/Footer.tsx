import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">About BOG</h4>
          <p>Empowering business community through connection, collaboration, and growth.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>

        </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/bogjaipur" className="hover:text-white"><Facebook size={24} /></Link>
            <Link href="https://www.instagram.com/bogjaipur?igsh=NmhmbmlpaDVvd2tv" className="hover:text-white"><Instagram size={24} /></Link>
            {/* <Link href="#" className="hover:text-white"><Twitter size={24} /></Link> */}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>© {new Date().getFullYear()} BOG. All rights reserved.</p>
        <p className="mt-1">
          Developed by{' '}
          <a
            href="https://cybrotechs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white underline"
          >
            Cybrotechs
          </a>
        </p>  
      </div>
    </footer>
)
}
