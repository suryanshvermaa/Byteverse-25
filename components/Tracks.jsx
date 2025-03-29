import React from 'react'
import TracksCard from "@/components/TracksCard";
import Image from 'next/image';
import {Anton,Bungee} from "next/font/google";

const anton=Anton({
    weight:'400',
    subsets:['latin']
})

const bungee=Bungee({
    weight:'400',
    subsets:['latin']
})
const Tracks = () => {

    const tracks = [
        {
            id: 1,
            trackName: "AI/ML",
            image: "/TracksImages/ARVR.png"
        },
        {
            id: 2,
            trackName: "APP DEVELOPMENT",
            image: "/TracksImages/App_Development.png"
        },
        {
            id: 3,
            trackName: "WEB3 - BLOCKCHAIN",
            image: "/TracksImages/Web3.png"
        },
        {
            id: 5,
            trackName: "WEB DEVELOPMENT",
            image: "/TracksImages/Web.png"
        },
    ];
    const specialTracks=[
        {
            id: 1,
            trackName: "ETHEREUM",
            image: "/TracksImages/Ethereum.png"
        },
        {
            id: 2,
            trackName: "POLYGON",
            image: "/TracksImages/Polygon.png"
        },
        {
            id: 3,
            trackName: "VERBWIRE",
            image: "/TracksImages/Verbwire.png"
        },
    ]

    const specialSideTracks=[
        {
            id: 1,
            trackName: "ENTREPRENEURSHIP",
            image: "/TracksImages/Web3.png"
        }
    ]
    
  return (
    <>
    <div className={`${bungee.className} flex flex-row justify-center items-center relative p-5`}>
        <h1 className="sm:text-6xl text-4xl font-bold uppercase text-black/50 relative z-10 text-center sm:mb-5 sm:mt-0 mt-5">
            TRACKS
            <span className="absolute inset-0 text-[#d9d9d9] translate-x-[-10px] translate-y-[-6px]">
              TRACKS
            </span>
        </h1>
        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='mb-5 absolute sm:relative sm:left-0 right-10'
        />
        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='absolute opacity-35 sm:bottom-20 sm:left-[50%] left-5 bottom-2'
        />
        
    </div>

    <div className='flex flex-row flex-wrap sm:gap-5 gap-y-0 justify-center mb-16'>
        {
            tracks.map((track)=>(
                <TracksCard key={track.id} trackName={track.trackName} image={track.image}/>
            ))
        }        
    </div>


    {/* <div className={`${bungee.className} flex flex-row justify-center items-center relative my-10`}>
        <h1 className="sm:text-6xl text-4xl font-bold uppercase text-black/50 relative z-10 text-center sm:mb-5 mt-0">
            SPECIAL TRACKS
            <span className="absolute inset-0 text-[#d9d9d9] translate-x-[-10px] translate-y-[-6px]">
            SPECIAL TRACKS
            </span>
        </h1>
        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='mb-5 sm:relative absolute sm:left-0 sm:right-10 right-4 bottom-10'
        />
        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='absolute sm:bottom-0 sm:left-[22%] left-4 -bottom-10'
        />

        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='absolute opacity-35 sm:bottom-16 sm:left-[25%] right-4 bottom-6'
        />
        
    </div>

    <div className='flex flex-row flex-wrap gap-x-20 gap-y-4 justify-center mb-16'>
        {
            specialTracks.map((track)=>(
                <TracksCard key={track.id} trackName={track.trackName} image={track.image}/>
            ))
        }        
    </div> */}

    {/* <div className={`${bungee.className} flex flex-row justify-center items-center relative my-10`}>
        <h1 className="sm:text-6xl text-4xl font-bold uppercase text-black/50 relative z-10 text-center mb-5">
            SPECIAL SIDE TRACKS
            <span className="absolute inset-0 text-[#d9d9d9] translate-x-[-10px] translate-y-[-6px]">
            SPECIAL SIDE TRACKS
            </span>
        </h1>
        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='mb-5 sm:relative absolute sm:left-0 right-3 bottom-14'
        />
        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='absolute sm:bottom-0 sm:left-[22%] left-4 -bottom-0'
        />

        <Image
        src={'/TracksImages/Tracks_Title.svg'}
        width={60}
        height={60}
        alt='TrackTitle'
        className='absolute opacity-35 sm:bottom-16 sm:left-[25%] right-4 -bottom-0'
        />
        
    </div>

    <div className='flex flex-row flex-wrap gap-x-20 gap-y-2 justify-center'>
        {
            specialSideTracks.map((track)=>(
                <TracksCard key={track.id} trackName={track.trackName} image={track.image}/>
            ))
        }        
    </div> */}
    </>
  )
}

export default Tracks;