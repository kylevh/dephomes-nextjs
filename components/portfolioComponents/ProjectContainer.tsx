"use client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import React from "react";
import Link from 'next/link'

function ProjectContainer({ resultData }: { resultData: SearchResult }) {
  const inputString = resultData.folder; // Replace this with your input string
  const initialDigits = inputString.match(/^\d+_+/); // Match initial digits followed by underscores
  const parsedProjectName = inputString.replace(/^\d+_+/, '').replace(/-/g, ' ');

  return (
    <div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      //   transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
      className="shadow-md justify-self-center items-self-center relative w-96 h-96 hover:bg-dep-offwhite hover:border-8 duration-300 border-dep-primary"
    >
      <Link href={`/portfolio/${resultData.folder}`} className='w-150'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
          className="h-full w-full"
        >
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="center">{parsedProjectName}</h1>
            <div className='w-16 h-[7px] col-span-2 col-start-6 my-5 bg-dep-primary' />
            <h1 className="underline">VIEW PROPERTY</h1>
          </div>

          <CldImage
            src={resultData.public_id}
            key={resultData.public_id}
            alt="DEPHomes home"
            fill
            className="cursor-pointer object-cover w-full h-full bg-dep-offwhite hover:opacity-20 transition-opacity duration-300 "
          />
        </motion.div>

      </Link>
    </div >
  );
}

export default ProjectContainer;
