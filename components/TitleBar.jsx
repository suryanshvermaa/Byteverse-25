import React from 'react'
import { Iceland } from "next/font/google";

const Iceland_font = Iceland({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});


const TitleBar = ({title, side = "left"}) => {
  return (
    <div className='flex items-center gap-4'>
        <div className={`flex-1 ${side == "left" ? 'bg-[#5B9ABC] h-1' : ''}`}></div>
        <div className={`${Iceland_font.className} uppercase text-[32px] md:text-[48px]`}>{title}</div>
        <div className={`flex-1 ${side == "right" ? 'bg-[#5B9ABC] h-1' : ''}`}></div>
    </div>
  )
}

export default TitleBar