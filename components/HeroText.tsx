'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { argentum, moon } from '@/app/fonts'

function HeroText() {
    return (
        <motion.div className={`${argentum.className} font-thin text-3xl text-dep-offwhite uppercase text-center`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: .75, delay: 1 }}>
            Innovation meets beauty, sustainability and quality
        </motion.div>
    )
}

export default HeroText