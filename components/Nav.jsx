"use client";
import React, { useState, useEffect } from "react";
import { Iceland } from "next/font/google";
import { LuArrowUpRight } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import CloudAnimation from "./Animationcloud";

const Iceland_font = Iceland({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const menuTimer = setTimeout(() => setShowMenu(true), 1000);
      const closeButtonTimer = setTimeout(() => setShowCloseButton(true), 1000);
      return () => {
        clearTimeout(menuTimer);
        clearTimeout(closeButtonTimer);
      };
    } else {
      setShowMenu(false);
      setShowCloseButton(false);
    }
  }, [isOpen]);

  return (
    <div className="relative z-[50]">
      <nav className="w-full h-16 lg:h-20 bg-transparent px-4 flex justify-end gap-2 items-center text-white">
        {/* Brochure Button */}
        <div className="flex items-center">
          <div className="flex flex-row rounded-lg border border-gray-200 p-1">
            <div className="bg-white w-4 rounded-l-lg"></div>
            <button className="px-2 font-bold py-1 bg-transparent rounded-r text-sm md:text-base lg:text-xl">
              Brochure
            </button>
          </div>
        </div>

        {/* Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="flex items-center gap-1 rounded-lg border border-gray-200 p-2 text-sm md:text-base lg:text-xl"
        >
          Menu
          <LuArrowUpRight className="text-lg md:text-xl lg:text-2xl" />
        </button>
      </nav>

      {/* Cloud Animation */}
      <CloudAnimation isOpen={isOpen} />

      {/* Menu Content */}
      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999]">
          {/* Close Button with Delay */}
          {showCloseButton && (
            <button
              className="absolute top-[0] right-10  text-black text-xl md:text-2xl lg:text-3xl cursor-pointer p-3 md:p-4 lg:p-5 rounded-full"
              onClick={handleMenuToggle}
            >
              <IoClose />
            </button>
          )}

          {/* Menu Options with Delay */}
          {showMenu && (
            <div className=" text-black absolute top-[150px] rounded-lg p-6 w-[90%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center flex flex-col space-y-5">
              {["Theme", "Timeline", "Sponsor", "Prize"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${Iceland_font.className} hover:bg-gray-600 text-xl md:text-2xl lg:text-3xl p-3 rounded`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;