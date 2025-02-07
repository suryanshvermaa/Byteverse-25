"use client";
import React, { useEffect, useState } from "react";
import OrganizerCard from "./OrganizerCard";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Iceland } from "next/font/google";
import {
  leads,
  web,
  outreach,
  design,
  event,
  marketing,
} from "@/lib/sponserData";

const sectionData = [leads, web, outreach, design, event, marketing];
const sections = ["leads", "web", "outreach", "design", "event", "marketing"];

const Iceland_font = Iceland({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const OrganizerCardList = () => {
  const [currSection, setCurrSection] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 32,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 32,
    },
  });

  // useEffect(() => {
  //   if (instanceRef.current) {
  //     instanceRef.current.moveToIdx(1);
  //   }
  // }, [currSection]);

  return (
    <div className="flex flex-col gap-8 ">
      {/* Display of sections */}

      <div className="flex justify-center">
        <div
          className={`${Iceland_font.className} md:text-lg uppercase flex gap-1 lg:gap-4`}
        >
          {sections.map((section, ind) => (
            <h1
              key={ind}
              onClick={() => setCurrSection(ind)}
              className={`text-white rounded-md px-2 cursor-pointer ${
                currSection == ind ? "bg-[#508CAD]" : ""
              }`}
            >
              {section}
            </h1>
          ))}
        </div>
      </div>

      {/* Slider container section */}
      <div className="flex items-center px-12 gap-8">
        {/* Left arrow btn */}
        <div
          onClick={() => instanceRef.current?.prev()}
          className="relative cursor-pointer w-12 h-12 bg-[rgba(255,255,255,0.7)] rounded-full p-2"
        >
          <Image
            className="rotate-90"
            src={"/scrollBtn.png"}
            fill
            alt="scroll_btn"
          />
        </div>

        {/* Main scroll content */}
        <div ref={sliderRef} className="keen-slider flex-1 ">
          {sectionData[currSection].map((organizer) => (
            <div key={organizer.id} className="keen-slider__slide">
              <OrganizerCard data={organizer} />
            </div>
          ))}
        </div>

        {/* Right arrow btn */}
        <div
          onClick={() => instanceRef.current?.next()}
          className="relative cursor-pointer w-12 h-12 bg-[rgba(255,255,255,0.7)] rounded-full p-2"
        >
          <Image
            className="-rotate-90"
            src={"/scrollBtn.png"}
            fill
            alt="scroll_btn"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizerCardList;
