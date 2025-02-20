"use client";
import React from "react";
import { motion } from "framer-motion";

const CloudAnimation = ({ isOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-dvh overflow-hidden z-[40] pointer-events-none">
      {/* Left Cloud */}
      <motion.img
        initial={{ x: "-200%" }}
        animate={{ x: isOpen ? 0 : "-200%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        src="/images/cloudL.png"
        alt="Decorative left cloud"
        aria-hidden="true"
        loading="lazy"
        className='w-[100vw] h-[230px] absolute z-10 top-[-30px] lg:h-[86vh] md:h-[30vh] md:top-[-60px] lg:top-0'
       
      />

      {/* Right Cloud */}
      <motion.img
        initial={{ x: "200%" }}
        animate={{ x: isOpen ? 0 : "200%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        src="/images/cloudR.png"
        alt="Decorative right cloud"
        aria-hidden="true"
        loading="lazy"
        className='w-[100vw] h-[230px] absolute z-20 top-[-20px] lg:h-[86vh] md:h-[30vh] md:top-2 lg:top-0'
       
      />
    </div>
  );
};

export default CloudAnimation;
