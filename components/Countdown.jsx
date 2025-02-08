import React from 'react'
import TimerCard from './TimerCard'

const Countdown = () => {
    const timeArr=[{
        id:1,
        timeDigit:'DAYS'
    },{
        id:2,
        timeDigit:'HOURS'
    },
    {
        id:3,
        timeDigit:'MINUTES'
    },{
        id:4,
        timeDigit:'SECONDS'
    }]
  return (
    <div className='flex flex-row justify-center items-center gap-6 mt-4 lg:mt-[160px] lg:gap-20 sm:gap-10 sm:mt-28'>
        {
            timeArr.map((time)=>(
                <TimerCard Time_Val={time.timeDigit} key={time.id} />
            ))
        }
    </div>
  )
}

export default Countdown;