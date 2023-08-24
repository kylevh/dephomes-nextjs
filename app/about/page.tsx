'use client'
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, stagger } from 'framer-motion'
import { argentum, moon, mulish } from '@/app/fonts'

function AboutPage() {
  return (
    <main className=''>
      <div className='w-screen h-[400px] sm:h-[600px] bg-dep-offwhite'>
        <motion.div className=" flex items-center justify-center h-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ ease: "anticipate", duration: 1.5 }}>
          <Image
            src='/images/dep-lotus.png'
            alt='DEPHomes logo'
            height={250}
            width={250}
            className='absolute object-center object-cover pt-10 w-1/2 sm:w-auto opacity-90'
          />
          <Image
            src='/images/header5-uw.png'
            alt='DEPHomes home'
            height={500}
            width={2000}
            className='h-full w-full object-center object-cover'
          />

        </motion.div>
      </div>
      <div className='flex min-h-screen pt-3 sm:pt-0 bg-dep-offwhite'>
        <motion.div className='w-full p-6 relative' initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, }}>
          {/* Desription of page */}
          <div className='grid grid-cols-12 place-items-center w-full h-auto mt-6 sm:mt-[100px]  mb-auto sm:mb-6'>

            {/* Title */}
            <div className='w-full col-span-12 sm:col-span-4 col-start-0 sm:col-start-5 justify-center flex flex-col'>
              <h1 className={`${argentum.className} font-light uppercase text-dep-textColor text-5xl text-center`}>
                Who we are
              </h1>
            </div>
            <div className='w-16 h-[7px] col-span-2 col-start-6 mt-10 bg-dep-primary'>
            </div>

            {/* Description */}
            <div className='w-full sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col mt-6'>
              <p className={`${mulish.className} font-light pt-5 text-dep-textColor text-lg text-center`}>
              DEP Homes provides the Seattle housing market with modern, high quality homes that are technologically advanced and environmentally responsible. Our company operates with a quality assurance that starts with our CEO and resonates out to every employee and subcontractor to ensure the highest quality product. We take pride in each home we build, knowing we’ve done the job right.
              </p>
            </div>
          </div>


        </motion.div>
      </div>
    </main>
  )
}

export default AboutPage