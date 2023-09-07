"use client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import React from "react";
import Link from 'next/link'

function ProjectContainer({ resultData }: { resultData: SearchResult }) {

  return (
    <div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      //   transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
      className="shadow-md justify-self-center items-self-center relative w-96 h-96 hover:bg-dep-offwhite relative hover:border-8 duration-300 border-dep-primary"
    >
      <Link href={`/portfolio/${resultData.folder}`} className='w-150'>
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="center"> 1</h1>
          <h1 className="">TEST 2</h1>
          <h1 className="">TEST 3</h1>
        </div>

        <CldImage
          src={resultData.public_id}
          key={resultData.public_id}
          alt="DEPHomes home"
          fill
          className="cursor-pointer object-cover w-full h-full bg-dep-offwhite hover:opacity-20 transition-opacity duration-300 "
        />
      </Link>
    </div>
  );
}

export default ProjectContainer;
