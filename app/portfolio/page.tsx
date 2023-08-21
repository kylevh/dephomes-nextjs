'use client'
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, stagger } from 'framer-motion'
import { argentum, moon, mulish } from '@/app/fonts'


function PortfolioPage() {

  return (
    <main className='bg-green '>
      <div className='flex min-h-screen pt-20 sm:pt-24 bg-dep-offwhite'>
        <motion.div className='w-full p-6' initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, }}>
          {/* Desription of page */}
          <div className='grid grid-cols-12 place-items-center w-full h-auto mt-12 sm:mt-[120px]  mb-auto sm:mb-6'>
            <div className='w-full col-span-12 sm:col-span-4 col-start-0 sm:col-start-5 justify-center flex flex-col'>
              <h1 className={`${argentum.className} font-light uppercase text-dep-textColor text-5xl text-center`}>
                Our Projects
              </h1>
            </div>
            <div className='w-full sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col'>
              <p className={`${mulish.className} font-light pt-5 text-dep-textColor text-lg text-center`}>
                Explore a collection of meticulously crafted, sophisticated, and environmentally conscious modern homes in the heart of Seattle's housing market
              </p>
            </div>
          </div>

          {/* Photo grid */}
          <div className='container mx-auto py-24 px-8'>
            <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, delay: .4 }}
              className=" justify-center items-center " style={{ display: 'grid', gridGap: '30px 8px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))' }}>

              <div className='shadow-md justify-self-center items-self-center relative w-96 h-96' >
                <Image
                  src='/images/header2.png'
                  alt='DEPHomes Logo'
                  fill
                  className='cursor-pointer object-cover w-full h-full'
                  unoptimized />
              </div>
              <div className='shadow-md justify-self-center items-self-center relative w-96 h-96' >
                <Image
                  src='/images/header2.png'
                  alt='DEPHomes Logo'
                  fill
                  className='cursor-pointer object-cover w-full h-full'
                  unoptimized />
              </div>
              <div className='shadow-md justify-self-center items-self-center relative w-96 h-96' >
                <Image
                  src='/images/header2.png'
                  alt='DEPHomes Logo'
                  fill
                  className='cursor-pointer object-cover w-full h-full'
                  unoptimized />
              </div>
              <div className='shadow-md justify-self-center items-self-center relative w-96 h-96' >
                <Image
                  src='/images/header2.png'
                  alt='DEPHomes Logo'
                  fill
                  className='cursor-pointer object-cover w-full h-full'
                  unoptimized />
              </div>

            </motion.div>
          </div>

        </motion.div>
      </div>
    </main>
  )
}

export default PortfolioPage