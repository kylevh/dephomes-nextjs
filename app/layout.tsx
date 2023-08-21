import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DEPHomes',
  description: 'Beautiful, state-of-the-art, sustainable. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <Header />
          {children}
      </body>
    </html>
  )
}
