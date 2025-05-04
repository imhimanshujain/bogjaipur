// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'BOG India',
  description: 'A consortium of visionaries driving impact in India.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body  className="antialiased bg-[var(--color-bg)] font-sans text-[var(--color-text)]">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
