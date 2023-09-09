'use client'
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, stagger } from 'framer-motion'
import { argentum, moon, mulish } from '@/app/fonts'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import Footer from '@/components/Footer'

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
        <div className='w-full pt-6 relative' >
          {/* Desription of page */}
          <div className='grid grid-cols-12 place-items-center w-full h-auto mt-6 sm:mt-[100px]  mb-auto sm:mb-6 '>

            {/* Title */}
            <motion.div className='w-full col-span-12 sm:col-span-4 col-start-0 sm:col-start-5 justify-center flex flex-col'
              initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, }}
            >
              <h1 className={`${argentum.className} font-light uppercase text-dep-textColor text-5xl text-center px-5`}>
                Who we are
              </h1>
            </motion.div>
            <motion.div className='w-16 h-[7px] col-span-2 col-start-6 mt-10 bg-dep-primary' initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, }}>
            </motion.div>

            {/* Description */}
            <motion.div className='w-full sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col mt-6 p-4'
              initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, }}
            >
              <p className={`${mulish.className} font-light pt-5 px-5 text-dep-textColor text-lg text-center`}>
                DEP Homes provides the Seattle housing market with modern, high quality homes that are technologically advanced and environmentally responsible. Our company operates with a quality assurance that starts with our CEO and resonates out to every employee and subcontractor to ensure the highest quality product. We take pride in each home we build, knowing we’ve done the job right.
              </p>
            </motion.div>
            {/*             
            <motion.div className='w-full sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col mt-32'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .7, duration: 1.2 }}
            >
              <h1 className={`${argentum.className} font-light uppercase text-dep-textColor text-3xl text-center`}>
                Innovation meets beauty, sustainability, and quality
              </h1>
            </motion.div>
            <div className="relative w-full h-[50rem] col-span-6 col-start-4">
              <Image
                src="/images/header2-2.png"
                alt="DEPHomes home"
                fill
                objectFit='contain'
                className="w-auto"
              />
            </div> */}
          </div>

          <motion.div className="flex flex-wrap justify-center items-center h-auto sm:h-64 mt-24 pb-4 bg-dep-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3, duration: .7 }}
          >
            <div className="flex h-32 items-center sm:w-64 pb-32 w-full flex-col px-8 py-6 border-b-2 sm:border-b-0 border-dep-offwhite border-opacity-60">
              <h2 className={`text-center text-7xl text-dep-offwhite font-xl ${argentum.className} mb-2`}>76</h2>
              <p className="leading-relaxed text-dep-offwhite text-lg">completed projects</p>
            </div>

            <div className="sm:w-64 h-32 w-full px-8 flex pb-32 flex-col items-center py-6 border-b-2 sm:border-b-0 sm:border-l-2 border-dep-offwhite border-opacity-60">
              <h2 className={`text-center text-7xl text-dep-offwhite font-xl ${argentum.className} mb-2`}>15</h2>
              <p className="leading-relaxed  text-dep-offwhite text-lg ">years in the industry</p>
            </div>

            <div className="flex h-32 items-center sm:w-64 pb-32 flex-col w-full px-8 py-6 sm:border-l-2 border-dep-offwhite border-opacity-60">
              <h2 className={`text-7xl text-dep-offwhite  font-xl ${argentum.className} mb-2`}>200+</h2>
              <p className="leading-relaxed  text-dep-offwhite font-medium text-lg ">satisfied clients</p>
            </div>

          </motion.div>

          {/* <div className='grid grid-cols-12 place-items-center w-full h-auto mt-6 sm:mt-[100px]  mb-auto sm:mb-6 bg-red-600'>
            <div className="h-screen sm:h-72">
            </div>
          </div> */}

          <motion.div className='w-full h-auto sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3, duration: .7 }}
          >
            <div className="container justify-center px-5 pt-32 mx-auto flex flex-wrap ">
              <h1 className={`${argentum.className} font-light uppercase text-dep-textColor text-4xl text-center`}>
                Innovation meets beauty, sustainability, and quality
              </h1>
            </div>

            <div className="container px-5 py-24 mx-auto flex flex-wrap ">
              <div className=" w-full lg:w-2/3 mx-auto">
                <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                  <Image alt="gallery" className="w-full object-cover h-full object-center blockabsolute inset-0" src="/images/about/1.jpg" fill />
                  <div className="h-22 sm:h-80">
                  </div>
                </div>

                <div className="flex sm:hidden flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                  <Image alt="gallery" className="w-full object-cover h-full object-center blockabsolute inset-0" src="/images/about/2.jpg" fill />
                  <div className="h-22 sm:h-80">
                  </div>
                </div>

                <div className="flex sm:hidden flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                  <Image alt="gallery" className="w-full object-cover h-full object-center blockabsolute inset-0" src="/images/about/3.jpg" fill />
                  <div className="h-22 sm:h-80">
                  </div>
                </div>

                <div className="hidden sm:flex flex-wrap -mx-2">
                  <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                      <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="/images/about/2.jpg" fill />
                      <div className="h-40">
                      </div>
                    </div>
                  </div>
                  <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                      <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="/images/about/3.jpg" fill />
                      <div className="h-40">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container justify-center px-5 pt-14 pb-14 mx-auto flex flex-wrap ">
                <button className={`${moon.className} absolute left-1/2 transform -translate-x-1/2 border-2 border-dep-primary px-4 py-1  text-dep-primary hover:bg-dep-primary hover:text-dep-offwhite ease-in-out duration-200`}><Link href="/portfolio">VIEW PROJECTS</Link></button>
              </div>
            </div>



          </motion.div>

          <motion.div className='w-full h-auto sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col mt- bg-gray-100 '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3, duration: .7 }}
          >
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image className="object-cover object-center rounded sm:ml-14" alt="hero" height={300} width={300} src="/images/buildgreen.png" />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className={`${argentum.className} title-font sm:text-4xl text-4xl mb-4 font-light uppercase text-gray-900`}>Sustainability in mind
                  <br className="hidden lg:inline-block" />
                </h1>
                <p className={`${mulish.className} font-medium mb-8 text-base sm:text-lg leading-relaxed`}>DEP Homes was honored with the BuiltGreen Award in 2016 for our relentless pursuit of technologically advanced and environmentally responsible homes. This award highlights our dedication to promoting sustainable living through strategic locations, convenient access to amenities, and green building practices.</p>
                <div className="flex justify-center">
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
      <Footer />

    </main>
  )
}

export default AboutPage