"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
const TimerCard = dynamic(() => import("./TimerCard"), { ssr: false });
const Countdown = () => {
    const [currTime,setCurrTime]=useState(new Date());
    // Date of hackathon *************************************************************************************************************************
    const target = new Date('05/04/2025');
    // Date of hackathon *************************************************************************************************************************
    const diff = target.getTime() - currTime.getTime()
    
    useEffect(() => {
        const timer = setInterval(() => setCurrTime(new Date()), 1000);
        return () => clearInterval(timer);
      }, []);
    const timeArr=[{
        id:1,
        timeDigit:'DAYS',
        leftTime: Math.floor(diff / (1000 * 60 * 60 * 24))
    },{
        id:2,
        timeDigit:'HOURS',
        leftTime:Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    },
    {
        id:3,
        timeDigit:'MINUTES',
        leftTime: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    },{
        id:4,
        timeDigit:'SECONDS',
        leftTime:Math.floor((diff % (1000 * 60)) / 1000)
    }]
  return (
    <div className='flex flex-row justify-center items-center gap-6 mt-4 lg:mt-[160px] lg:gap-20 sm:gap-10 sm:mt-28'>
        {
            timeArr.map((time)=>(
                <TimerCard Time_Val={time.timeDigit} key={time.id} leftTime={time.leftTime}/>
            ))
        }
    </div>
  )
}

export default Countdown;