"use client";
import { argentum, moon, mulish } from "@/app/fonts";
import React from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";

function UpcomingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.8 }}
      className="grid grid-cols-12 place-items-center w-full h-auto mt-12 sm:mt-[120px]  mb-auto sm:mb-6"
    >
      <div className="w-full col-span-12 sm:col-span-4 col-start-0 sm:col-start-5 justify-center flex flex-col">
        <h1
          className={`${argentum.className} font-light uppercase text-dep-textColor text-5xl text-center`}
        >
          Upcoming Projects
        </h1>
      </div>
      <div className="w-full sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col">
        <p
          className={`${mulish.className} font-light pt-5 text-dep-textColor text-lg text-center`}
        >
          Preview some of our projects that are currently in design.
        </p>
      </div>
    </motion.div>
  );
}

export default UpcomingHeader;
