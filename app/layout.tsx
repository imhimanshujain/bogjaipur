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
  title: 'BOG Jaipur',
  description: 'A consortium of visionaries driving impact in Jaipur.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
