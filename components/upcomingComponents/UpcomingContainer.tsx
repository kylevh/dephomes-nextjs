"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

function UpcomingContainer({ resultData }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="shadow-md justify-self-center items-self-center relative w-96 h-96 hover:bg-dep-offwhite hover:border-8 duration-300 border-dep-primary">
      <div className="w-150">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
          className="h-full w-full"
        >
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="center">{resultData.address}</h1>
            <div className="w-16 h-[7px] col-span-2 col-start-6 my-5 bg-dep-primary" />
            <h1 className="underline">VIEW PROPERTY</h1>
          </div>

          <Image
            src={resultData.projectPhotos[0]}
            key={resultData.address}
            alt={resultData.address}
            fill
            onClick={() => openModal()}
            className="cursor-pointer object-cover w-full h-full bg-dep-offwhite hover:opacity-20 transition-opacity duration-300 "
          />

          {showModal && (
            <div className="fixed inset-0 bg-black  bg-opacity-50 z-50 flex justify-center items-center">
              <div className="flex flex-col bg-white p-4 rounded-lg  max-w-[100rem] max-h-full overflow-auto">
              <button
                  className="w-24 mt-4 bg-dep-primary mb-6 text-white p-2 rounded hover:bg-[#cfe68a] duration-300"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <div className=" ">
                  <Image
                    src={resultData.projectPhotos[0]}
                    alt={resultData.address}
                    width={1000}
                    height={500}
                  />
                </div>
                
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default UpcomingContainer;
