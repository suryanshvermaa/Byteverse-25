import React from "react";
import { Button} from "@mui/material";
import Image from "next/image";
import ThemesMainCard from "./ThemesMainCard";
import { ArrowRightAlt } from "@mui/icons-material";

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
      <ThemesMainCard />
      <div className="flex items-center justify-center p-2">
        <Button
          variant="outlined"
          color="white"
          className="font-bold px-4 py-2 "
          size="large"
          endIcon={<ArrowRightAlt />}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default Themes;
