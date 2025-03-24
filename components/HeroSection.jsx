"use client"
import React from 'react'
import Styles from './hero-section.module.css';
import Image from 'next/image';
import Countdown from '@/components/Countdown';
import CloudAnimation from '@/components/CloudAnimation';
import {Krona_One} from "next/font/google";

const kronaOne=Krona_One({
  weight:'400',
  subsets:['latin'],
  style:'normal'
})
const HeroSection = () => {
  return (
   <div className={` ${kronaOne.className} w-full  pb-[20px]  overflow-hidden overflow-y-hidden`}>
    
        <div className='xl:h-[1080px]'>
          <CloudAnimation />
          <div className='flex flex-col justify-center items-center w-full lg:h-[85vh] h-[200px] relative'>
            <Image
            src={'/logos/byteverse.svg'}
            width={600}
            height={280}
            className='lg:w-[690px] lg:h-[300px] md:h-[200px]  lg:aspect-square h-[50%] w-[280px]'
            alt='Byteverse logo'
            />
            <button className='bg-white flex flex-row gap-2 py-1 rounded-lg justify-center items-center px-6 mt-8 lg:mt-20 lg:py-2'>
               <div  className='flex flex-row gap-2 items-center'>
               <h1 className='text-[#1c4980] text-[10px] font-bold lg:text-xl'>Apply with </h1>
               <Image src={'/unstop.png'} alt='unstop logo' width={80} height={15} className='color-white text-xl lg:text-3xl'/>
               </div>
            
            </button>
          </div>
          <Countdown/>
      </div>
    </div>
  )
}

export default HeroSection;