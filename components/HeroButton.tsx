'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { argentum, moon } from '@/app/fonts'
import Link from 'next/link'


function HeroButton() {
    return (
        <motion.div className='relative w-full mt-6 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ ease: "easeIn", duration: .75, delay: 0.8 }}>
            <button className={`${moon.className} absolute left-1/2 transform -translate-x-1/2 border-2 border-dep-offwhite px-4 py-1  text-dep-offwhite hover:bg-white hover:text-dep-textColor ease-in-out duration-200`}><Link href="/portfolio">VIEW PROJECTS</Link></button>
        </motion.div>
    )
}

export default HeroButton