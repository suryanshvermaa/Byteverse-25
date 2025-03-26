"use client";

import React, { useRef } from "react";
import { Iceland } from "next/font/google";
import Image from "next/image";
import useScrollTriggeredCountUp from "./useScrollTriggeredCountUp.jsx";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const CountUp = (props) => {
  const ref = useRef(null);
  const count = useScrollTriggeredCountUp(ref, props.number);

  return (
    <p
      ref={ref}
      className="text-3xl md:text-4xl lg:text-5xl text-[#D1A878] font-bold my-0"
    >
      {count}+
    </p>
  );
};

const Iceland_font = Iceland({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export default function AboutUs() {
  return (
    <section className="text-white py-12 px-4 md:px-12 lg:px-24">
      <div className="relative flex justify-center items-center mb-8 md:mb-12">
        <div className="absolute left-0 md:-left-12 w-1/5 md:w-1/4 h-0.5 bg-cyan-400 top-1/2 -translate-y-1/2"></div>
        <h2
          className={`${Iceland_font.className} text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-center px-4`}
        >
          About Us
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 mb-8 md:mb-12">
        {[
          { number: <CountUp number={11} />, text: "Themes" },
          { number: <CountUp number={30} />, text: "Hours of Hacking" },
          { number: <CountUp number={1800} />, text: "Participants" },
        ].map((stat, index) => (
          <div key={index} className="w-1/3 md:w-auto flex flex-col items-center px-2">
            <div className="w-20 md:w-32 lg:w-40 h-20 md:h-32 lg:h-40">
              <Image
                src="/abtus1.png"
                alt="Stat Icon"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`${Iceland_font.className} text-xl md:text-3xl font-bold mt-[-12px] md:mt-[-24px]`}
            >
              {stat.number}
            </span>
            <span
              className={`${Iceland_font.className} text-sm md:text-xl lg:text-2xl mt-[-4px] md:mt-[-12px]`}
            >
              {stat.text}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 px-6 mt-8 md:mt-14 shadow-cyan-600 md:px-5 py-6 md:py-8 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-6 max-w-5xl mx-auto">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            Byteverse: Unleash your coding magic!
          </h3>
          <p className="text-gray-400 mt-4 md:mt-8 text-base md:text-lg lg:text-xl">
            Calling all tech wizards, problem solvers, and creative minds! Byteverse, the annual hackathon by Hackslash NITP, returns for its sixth edition.
          </p>
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <Image
            src="/image.jpeg"
            alt="Byteverse Team"
            width={500}
            height={500}
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>

      <div className="relative mt-12 md:mt-24 px-4 md:px-7 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div className="bg-[#0E1A2B] p-4 md:p-6 rounded-2xl text-center shadow-lg relative">
          <Image
            src="/hackslashlogo.png"
            alt="HackSlash"
            width={50}
            height={50}
            className="mx-auto mb-2 md:mb-4 w-12 h-12 md:w-16 md:h-16"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
            HackSlash
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg text-start mt-4 md:mt-6 md:px-6">
            Hackslash Developer's Club NIT Patna established with the vision of
            fostering a culture of innovation and collaboration...
          </p>
          <div className="mt-4 md:mt-6 flex justify-center gap-3 md:gap-4">
            <a href="#" className="text-gray-300 text-xl md:text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 text-xl md:text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hidden md:flex absolute bg-[url('/bgcenter.png')] bg-cover bg-center bg-no-repeat left-1/2 transform -translate-x-1/2 top-15 w-32 h-32 md:w-40 md:h-40 items-center justify-center rounded-full shadow-lg z-10">
          <Image
            src="/abtus3.png"
            alt="Pearl"
            width={80}
            height={80}
            className="rounded-full w-16 h-16 md:w-24 md:h-24"
          />
        </div>

        <div className="bg-[#0E1A2B] p-4 md:p-6 rounded-2xl text-center shadow-lg relative">
          <Image
            src="/descologo.png"
            alt="DesCo"
            width={60}
            height={60}
            className="mx-auto mb-2 md:mb-4 w-14 h-14 md:w-20 md:h-20"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300">DesCo</h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg text-start mt-4 md:mt-6 md:px-6">
            The premier Design Company at the NIT Patna where creativity meets
            innovation to shape the future...
          </p>
          <div className="mt-4 md:mt-6 flex justify-center gap-3 md:gap-4">
            <a href="#" className="text-gray-300 text-xl md:text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 text-xl md:text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}