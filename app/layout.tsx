import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import localFont from 'next/font/local'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '400', '500'],
  variable: '--font-mulish'
})
const moon = localFont({
  src: [
    {
      path: './fonts/MoonLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/MoonBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-moon',
})
const argentum = localFont({
  src: [
    {
      path: './fonts/ArgentumSans-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ArgentumSans-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ArgentumSans-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ArgentumSans-Regular.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-argentum',
})


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
