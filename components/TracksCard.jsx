import React from 'react'
import Image from 'next/image';
import {Bungee} from "next/font/google";

const bungee=Bungee({
  weight:'400',
  subsets:['latin']
})

const TracksCard = ({trackName,image}) => {
  const trackNameArr=String(trackName).split(' ');
  return (
    <div className={`${bungee.className} h-[230px] bg-white bg-opacity-[5%] sm:w-fit sm:min-w-[190px] w-[82%] rounded-3xl p-2 flex flex-col justify-between items-center my-5`}>
        <Image
        src={image}
        height={120}
        width={130}
        alt={`${trackName} image`}
        className='mt-4'
        />
        <div className='w-full'>
        {
          trackNameArr.map((word,index)=>{
            if(word=='-')
              return null
            else return <>
            <h1 key={index} className='text-[#FFD700] text-[20px] text-center z-20 font-bold tracking-widest' style={{lineHeight:"26px"}}>
              {word}
              <br />
            </h1>
            </>
          })
          }
        </div>
    </div>
  )
}

export default TracksCard;