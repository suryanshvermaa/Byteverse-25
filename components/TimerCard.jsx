"use client";
import Image from 'next/image';
import React from 'react'

const TimerCard = ({Time_Val,leftTime}) => {

  return (
            <div className='flex flex-col gap-2 justify-center items-center relative'>
                <Image
                src={'/images/countdown.png'}
                height={42}
                width={42}
                alt='countdown reactangle'
                className='h-[42px] w-[42] lg:h-24 lg:w-24'
                />
                <h1 className='absolute text-white text-2xl font-bold h-full top-1 lg:text-6xl sm:text-xl lg:top-4 sm:top-2'>{leftTime}</h1>
                <h1 className='text-white text-[9px] font-bold lg:text-xl'>{Time_Val}</h1>
            </div>
  )
}
export default TimerCard;