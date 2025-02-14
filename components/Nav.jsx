"use client";
import React, { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-[9999]">
      <nav className="w-full lg:h-20 h-16 bg-transparent p-3 flex justify-end text-white">
        <div className="flex items-center justify-center lg:gap-10 gap-4">
          <div className="flex flex-row rounded-lg border border-gray-200 p-1">
            <div className="bg-white w-4 rounded-l-lg"></div>
            <button className="lg:px-2 px-1 font-bold py-0 bg-transparent rounded-r lg:text-xl text-xs">
              Brochure
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-row items-center gap-1 rounded-lg border border-gray-200 p-1 lg:text-xl text-xs"
            >
              Menu
              <LuArrowUpRight color="white" className="lg:text-xl text-xl" />
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-[9999]"
        >
          <div className="absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={() => setIsOpen(false)}>
            <IoClose />
          </div>
          <div className="inset-0 bg-opacity-70 bg-white-100 backdrop-blur-md  text-blue rounded-lg p-6 w-full max-w-md text-center flex flex-col space-y-4">
            <a href="#" className="hover:bg-gray-600 p-3 rounded">Theme</a>
            <a href="#" className="hover:bg-gray-600 p-3 rounded">Timeline</a>
            <a href="#" className="hover:bg-gray-600 p-3 rounded">Sponsor</a>
            <a href="#" className="hover:bg-gray-600 p-3 rounded">Prize</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
