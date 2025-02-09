"use client"
import React from 'react'
import Styles from './hero-section.module.css';
import Image from 'next/image';
import { LuArrowUpRight } from "react-icons/lu";
import Countdown from '@/components/Countdown';
import CloudAnimation from '@/components/CloudAnimation';
import {Krona_One} from "next/font/google"

const kronaOne=Krona_One({
  weight:'400',
  subsets:['latin'],
  style:'normal'
})
const HeroSection = () => {
  return (
    <div className={`${Styles.backgroundImage} ${kronaOne.className} w-full bg-no-repeat bg-top bg-cover min-h-screen overflow-hidden overflow-y-hidden`}>
        <div className='xl:h-[1080px]'>
          <nav className='w-full lg:h-20 h-16 bg-trasparent p-3 flex justify-end text-white'>
              <div className='flex items-center justify-center lg:gap-10 gap-4'>
                  <div className='flex flex-row rounded-lg border-s border-gray-200 border-[1px] p-1'>
                    <div className='bg-white w-4 rounded-l-lg'></div>
                    <button className='lg:px-2 px-1 font-bold py-0 bg-transparent rounded-r lg:text-xl text-xs'>Brochure</button>
                  </div>

                  <div className='flex flex-row rounded-lg border-s border-gray-200 border-[1px] p-1'>
                    <button className='lg:px-2 px-1 font-bold py-0 bg-transparent rounded-r lg:text-xl text-xs'>Menu</button>
                    <div><LuArrowUpRight color='white' className='lg:text-xl text-xl h-full'/></div>
                  </div>
              </div>
          </nav>
          <CloudAnimation />
          <div className='flex flex-col justify-center items-center w-full lg:h-[85vh] h-[200px] relative'>
            <Image
            src={'/logos/byteverse.svg'}
            width={600}
            height={280}
            className='lg:w-[690px] lg:h-[300px] md:h-[200px]  lg:aspect-square h-[50%] w-[280px]'
            alt='Byteverse logo'
            />
            <button className='bg-[#3770FF] flex flex-row gap-2 py-1 rounded-lg justify-center items-center px-6 mt-8 lg:mt-20 lg:py-2'>
              <Image src={'/logos/Devfolio.svg'} alt='devfolio logo' width={16} height={16} className='aspect-square text-xl lg:text-3xl'/>
              <h1 className='text-white text-[10px] font-bold lg:text-xl'>Apply with Devfolio</h1>
            </button>
          </div>
          <Countdown/>
      </div>
    </div>
  )
}

export default HeroSection;