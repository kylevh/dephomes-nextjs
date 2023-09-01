'use client'
import React from 'react'
import { motion } from 'framer-motion'

function HeroImage() {
    return (
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
    )
}

export default HeroImage