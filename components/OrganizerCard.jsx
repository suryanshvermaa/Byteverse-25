import { Archivo_Black } from "next/font/google";
import Image from "next/image";
import React from "react";

const archivo_font = Archivo_Black({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const OrganizerCard = ({ data }) => {
  return (
    <div className="max-w-[240px] flex flex-col gap-1">
      {/* Background image block */}

      <div className="h-[300px] flex relative flex-col justify-end">
        <Image className="object-cover z-100" src={data.img} fill alt="image" />
        {/* <div className="w-full h-[250px] md:h-[280px] -z-10 relative bg-[url(/organizerBackground.jpeg)] bg-cover overflow-visible"></div> */}
      </div>

      {/* The name should not be too long other wise ... will be given */}
      {/* property used : line-clamp-1 | subject to change */}

      <div>
        <h3
          className={`${archivo_font.className} uppercase line-clamp-1 text-[22px] bg-gradient-to-b from-white from-15% to-[#77AAD3] to-75% bg-clip-text text-transparent leading-normal`}
        >
          {data.name}
        </h3>

        <p className="uppercase text-xs text-right font-bold">{data.desc}</p>
      </div>
    </div>
  );
};

export default OrganizerCard;
