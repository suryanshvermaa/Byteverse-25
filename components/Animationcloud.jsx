"use client";
import React from "react";
import { motion } from "framer-motion";

const CloudAnimation = ({ isOpen }) => {
  return (
    <div className="fixed  -top-[200px] md:top-0 left-0 w-screen h-screen overflow-hidden z-[40] pointer-events-none">
      {/* Left Cloud */}
      <motion.img
        initial={{ x: "-200%" }}
        animate={{ x: isOpen ? 0 : "-200%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src="/images/cloudL.png"
        alt="Decorative left cloud"
        aria-hidden="true"
        loading="lazy"
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      />

      {/* Right Cloud */}
      <motion.img
        initial={{ x: "200%" }}
        animate={{ x: isOpen ? 0 : "200%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src="/images/cloudR.png"
        alt="Decorative right cloud"
        aria-hidden="true"
        loading="lazy"
        className="absolute top-0 right-0 md:-top-20 md:-right-20 w-screen h-screen object-cover"
      />
    </div>
  );
};

export default CloudAnimation;
