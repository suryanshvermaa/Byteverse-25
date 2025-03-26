"use client"
import React, { useState, useEffect } from "react";
import JudgeProfileCard from "./JudgesProfileCard";
import { Iceland } from "next/font/google";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { judges } from "@/lib/judgesData";
import Image from "next/image";
import TitleBar from "./TitleBar";

const Iceland_font = Iceland({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Judges = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    duration: 7000, // Slower transition
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 32 } },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.moveToIdx(
        (instanceRef.current.track.details.rel + 1) % judges.length, 
        true
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="relative py-12 bg-cover bg-center text-white">
      <TitleBar side="left" title={"JUDGES & SPEAKERS"} />
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-12 relative z-10">
       

        <div className="flex items-center gap-4 md:gap-8 relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => instanceRef.current?.moveToIdx(Math.max(instanceRef.current.track.details.rel - 1, 0))}
            className="relative cursor-pointer w-12 h-12 bg-[rgba(255,255,255,0.7)] rounded-full flex items-center justify-center"
          >
            <Image className="rotate-90" src="/scrollBtn.jpg" width={24} height={24} alt="scroll_btn" />
          </button>

          {/* Slider Container */}
          <div ref={sliderRef} className="keen-slider flex-1">
            {judges.map((judge, index) => (
              <div
                key={index}
                className={`${Iceland_font.className} keen-slider__slide flex justify-center`}
              >
                {/* Judge Card with fixed width */}
                <div className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]">
                  <JudgeProfileCard {...judge} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => instanceRef.current?.moveToIdx(Math.min(instanceRef.current.track.details.rel + 1, judges.length - 1))}
            className="relative cursor-pointer w-12 h-12 bg-[rgba(255,255,255,0.7)] rounded-full flex items-center justify-center"
          >
            <Image className="-rotate-90" src="/scrollBtn.jpg" width={24} height={24} alt="scroll_btn" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Judges;
