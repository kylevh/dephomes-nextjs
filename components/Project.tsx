
import React from 'react'

function Project({projectId} : {projectId : number}) {
  return (
    <div>Project {projectId}</div>
  )
}

export default Project


// Legacy code

 {/* <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} transition={{ type: "tween", duration: .8, delay: .4 }}
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

            </motion.div> */}