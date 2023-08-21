'use client'
import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: 'DEPHomes',
  description: 'Beautiful, state-of-the-art, sustainable. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pageKey = usePathname()

  return (
    <html lang="en">
      <body>
        <Header />
        {/* initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.2 }} transition={{ type: "tween", duration: .5 }} */}
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}
