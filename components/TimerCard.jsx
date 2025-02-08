import Image from 'next/image';
import React from 'react'

const TimerCard = ({Time_Val}) => {
  return (
        <>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <Image
                src={'/images/countdown.png'}
                height={42}
                width={42}
                alt='countdown reactangle'
                className='h-[42px] w-[42] lg:h-24 lg:w-24'
                />
                <h1 className='text-white text-[9px] font-bold lg:text-xl'>{Time_Val}</h1>
            </div>
        
        </>


  )
}
export default TimerCard;