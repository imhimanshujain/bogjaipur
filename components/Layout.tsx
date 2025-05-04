import { ReactNode } from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import CTAButton from './CTAButton';
const AnimatedCTA = ({ href }: { href: string }) => (
  <Link href={href}>
    <CTAButton className="bg-accent text-primary animate-pulse-scale hover:scale-105 mt-6 bg-card rounded-lg text-softtext px-6 animate-pulse transition py-2">
      Know More
    </CTAButton>
  </Link>
);
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <footer className="py-8 text-center text-sm text-softtext">
        © {new Date().getFullYear()} BOG. All rights reserved.
      </footer>
    </>
  )
}
