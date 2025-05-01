import { ReactNode } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} BOG India. All rights reserved.
      </footer>
    </>
  )
}
