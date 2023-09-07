"use client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import React from "react";

function ProjectPhotosContainer({ resultData }: { resultData: SearchResult }) {

  return (
    <div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      //   transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
      className="shadow-md justify-self-center items-self-center relative w-96 h-96 sm:w-[60rem] sm:h-[40rem]"
    >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
          className="h-full w-full"
          >

          <CldImage
            src={resultData.public_id}
            key={resultData.public_id}
            alt="DEPHomes home"
            fill
            className=" object-cover w-full h-full bg-dep-offwhite  "
          />
        </motion.div>

    </div >
  );
}

export default ProjectPhotosContainer;
