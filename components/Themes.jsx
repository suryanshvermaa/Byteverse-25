import React from "react";
import Image from "next/image";
import { ThemesCarousel } from "./ThemesCarousel";

const Themes = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 w-full ">
        <div className="flex-1"></div>
        <div className="flex items-center ">
          <Image src={"/themeShell1.png"} alt="" height={48} width={48} />
          <div className="text-8xl max-sm:text-5xl">THEMES</div>
        </div>
        <div className="flex-1 bg-[#5B9ABC] h-1"></div>
      </div>
      <h3 className=" text-[#FFFFFF] tracking-wider leading-loose text-center text-[20px]">
        EXPLORE THE DIVERSE THEMES AT BYTEVERSE 2025
      </h3>
      <div className="p-3">
        <ThemesCarousel />
      </div>
    </div>
  );
};

export default Themes;
