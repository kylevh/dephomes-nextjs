'use client'
import Image from 'next/image'
import { argentum, moon } from '@/app/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'


export default function Home() {
  const path = usePathname();

  return (
    <main className="w-screen h-screen flex justify-center items-center ">
      <div className='absolute w-auto justify-center '>
        <motion.div className={`${argentum.className} font-thin text-3xl text-dep-offwhite uppercase text-center`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: .75, delay: 1 }}>
          Innovation meets beauty, sustainability and quality
        </motion.div>
        <motion.div className='relative w-full mt-6 '
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ ease: "easeIn", duration: .75, delay: 0.8 }}>
          <button className={`${moon.className} absolute left-1/2 transform -translate-x-1/2 border-2 border-dep-offwhite px-4 py-1  text-dep-offwhite hover:bg-white hover:text-dep-textColor ease-in-out duration-200`}><Link href="/portfolio">VIEW PROJECTS</Link></button>
        </motion.div>
      </div>
      <motion.img
        className="object-cover h-full w-full z-[-1]"
        key={123152}
        src='/images/header2-2.png'
        alt="Stunning photo of a DEPHomes built house"
        width={2000}
        height={2000}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ ease: "anticipate", duration: 1.5 }}
      />
    </main>
  )
}
