"use client";
import { argentum, moon, mulish } from "@/app/fonts";
import React from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";

function ContactHeader() {
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
          Get in touch with us
        </h1>
      </div>
      <div className='w-16 h-[7px] col-span-2 col-start-6 my-5 bg-dep-primary' />

      <div className="w-full sm:col-span-6 col-span-12 col-start-0 sm:col-start-4 justify-center flex flex-col">

        <form action="https://formspree.io/f/xvojrddo"
          method="POST" className="lg:w-full  bg-dep-offwhite flex flex-col w-full mt-8 ">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-dep-secondary focus:ring-2 focus:ring-dep-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-dep-secondary focus:ring-2 focus:ring-dep-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-dep-secondary focus:ring-2 focus:ring-dep-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button type="submit" className="text-white bg-dep-primary border-0 py-2 px-6 focus:outline-none hover:bg-dep-secondary rounded text-lg duration-75">Submit</button>
          <p className="text-xs text-gray-500 mt-3"></p>
        </form>
      </div>

    </motion.div >
  );
}

export default ContactHeader;
