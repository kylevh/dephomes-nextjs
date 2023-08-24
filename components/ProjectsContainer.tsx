import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getPhotoHeaders } from '@/lib/cloud_test'
import { CldImage } from 'next-cloudinary'


function ProjectsContainer() {
    const photoHeaders: Promise<Photo[]> = getPhotoHeaders();

    return (
        <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, delay: .4 }}
            className=" justify-center items-center " style={{ display: 'grid', gridGap: '30px 8px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))' }}>

            <div className='shadow-md justify-self-center items-self-center relative w-96 h-96' >
                <CldImage
                    src='20_1759-19th-AveS/hero20_utk8ix'
                    alt='DEPHomes home'
                    fill
                    className='cursor-pointer object-cover w-full h-full'
                />
            </div>

            {/* <div className='shadow-md justify-self-center items-self-center relative w-96 h-96' >
                <Image
                    src='/images/header2.png'
                    alt='DEPHomes Logo'
                    fill
                    className='cursor-pointer object-cover w-full h-full'
                    unoptimized />
            </div> */}


        </motion.div>
    )
}


export default ProjectsContainer


