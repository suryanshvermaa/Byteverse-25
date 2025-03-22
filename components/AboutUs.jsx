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
      className="text-4xl md:text-3xl lg:text-5xl text-[#D1A878] font-bold my-0"
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
    <section className="text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="relative flex justify-center items-center mb-12">
        <div className="absolute -left-12 w-1/4 md:w-2/5 h-0.5 bg-cyan-400 top-1/2 -translate-y-1/2"></div>
        <h2
          className={` ${Iceland_font.className} relative text-4xl sm:text-4xl md:text-6xl font-bold uppercase text-center px-4`}
        >
          About Us
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
        {[
          { number: <CountUp number={11} />, text: "Themes" },
          { number: <CountUp number={30} />, text: "Hours of Hacking" },
          { number: <CountUp number={1800} />, text: "Participants" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className=" rounded-full flex items-center justify-center">
              <Image
                src="/abtus1.png"
                alt="Stat Icon"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`${Iceland_font.className} text-2xl sm:text-3xl font-bold mt-[-4px] sm:mt-[-24px]`}
            >
              {stat.number}
            </span>
            <span
              className={`${Iceland_font.className} text-base sm:text-2xl mt-[-2px] sm:mt-[-12px]`}
            >
              {stat.text}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 px-10 mt-14 shadow-cyan-600 md:px-5 py-8 rounded-2xl flex flex-col md:flex-row gap-6 shadow-md max-w-5xl mx-auto">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Byteverse: Unleash your coding magic!
          </h3>
          <p className="text-gray-400 mt-8 text-lg md:text-xl">
          Calling all tech wizards, problem solvers, and creative minds! Byteverse, the annual hackathon by Hackslash NITP, returns for its sixth edition. This electrifying event is where innovation meets code and your creativity knows no bounds.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/image.jpeg"
            alt="Byteverse Team"
            width={500}
            height={500}
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>


      <div className="relative mt-24 md:px-7  grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="bg-[#0E1A2B] p-6 rounded-2xl text-center shadow-lg relative">
          <Image
            src="/hackslashlogo.png"
            alt="HackSlash"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl md:text-3xl font-bold text-gray-300">
            HackSlash
          </h2>
          <p className="text-gray-400 text-start text-lg md:text-xl mt-12  md:px-12">
            Hackslash Developer's Club NIT Patna established with the vision of
            fostering a culture of innovation and collaboration. Hackslash is a
            dynamic community of developers, designers and tech enthusiasts
            dedicated to pushing the boundaries of technology and making a
            positive impact through innovative solutions.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="text-gray-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="absolute bg-[url('/bgcenter.png')] bg-cover bg-center bg-no-repeat left-1/2 transform -translate-x-1/2 top-15 w-40 h-40 hidden md:flex items-center justify-center rounded-full shadow-lg z-10">
          <Image
            src="/abtus3.png"
            alt="Pearl"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <div className="bg-[#0E1A2B]  p-8 rounded-2xl text-center shadow-lg  relative">
          <Image
            src="/descologo.png"
            alt="DesCo"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl  font-bold text-gray-300">DesCo</h2>
          <p className="text-gray-400 text-start text-lg md:text-xl mt-11  md:px-12">
            The premier Design Company at the NIT Patna where creativity meets
            innovation to shape the future.Desco is dedicated to nurturing a
            community of designers, thinkers and creators. Desco provides
            real-world experience through workshops, design challenges and
            collaborative projects.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="text-gray-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
