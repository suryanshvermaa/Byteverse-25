"use client";
import React, { useEffect, useRef, useState } from "react";
import OrganizerCard from "./OrganizerCard";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { Iceland } from "next/font/google";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
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
  const [loaded, setLoaded] = useState(false);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
   setActiveIndex(0)
  },[currSection])

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-full overflow-hidden ">
      {/* Display of sections */}

      <div className="flex justify-center">
        <div
          className={`${Iceland_font.className} justify-center text-sm gap-1 md:text-lg uppercase flex flex-wrap lg:gap-4`}
        >
          {sections.map((section, ind) => (
            <h1
              key={ind}
              onClick={() => setCurrSection(ind)}
              className={`text-white rounded-md px-2 cursor-pointer ${currSection == ind ? "bg-[#508CAD]" : ""
                }`}
            >
              {section}
            </h1>
          ))}
        </div>
      </div>

      {/* Slider container section */}

      {loaded && (
        <div className="flex items-center px-4 md:px-12 gap-8 w-full">
          {/* Left arrow btn */}
          <div
            onClick={handlePrevClick}
            className="flex-shrink-0 relative cursor-pointer w-12 h-12 bg-[rgba(255,255,255,0.7)] rounded-full p-2"
          >
            <Image
              className="rotate-90"
              src={"/scrollBtn.png"}
              fill
              alt="scroll_btn"
            />
          </div>

          {/* Main scroll content */}
          <div className="flex-1 overflow-hidden">
            <AliceCarousel  
              activeIndex={activeIndex}
              onSlideChanged={(e) => setActiveIndex(e.item)}
              mouseTracking
              responsive={responsive}
              controlsStrategy="alternate"
              disableDotsControls
              disableButtonsControls
              ref={carouselRef}
              >
              {sectionData[currSection].map((organizer) => (
                <div key={organizer.id} className="">
                  <OrganizerCard data={organizer} />
                </div>
              ))}
            </AliceCarousel>
          </div>



          {/* Right arrow btn */}
          <div
            onClick={handleNextClick}
            className="flex-shrink-0 relative cursor-pointer w-12 h-12 bg-[rgba(255,255,255,0.7)] rounded-full p-2"
          >
            <Image
              className="-rotate-90"
              src={"/scrollBtn.png"}
              fill
              alt="scroll_btn"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizerCardList;
