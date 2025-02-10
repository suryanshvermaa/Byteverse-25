'use client'
import React from 'react'
import {motion} from 'motion/react'

const CloudAnimation = () => {
  return (
    <motion.div className='text-white relative w-full'>
        <motion.img
        animate={{x:-1300}}
        transition={{duration:1.8}}
        src={'/images/cloudL.png'}
        alt='right cloud'
        className='w-[100vw] h-[230px] absolute z-10 top-[-30px] lg:h-[86vh] md:h-[30vh] md:top-[-60px] lg:top-0'
        />
        <motion.img
        animate={{x:1300}}
        transition={{duration:1.8}}
        src={'/images/cloudR.png'}
        alt='left cloud'
        className='w-[100vw] h-[230px] absolute z-20 top-[-20px] lg:h-[86vh] md:h-[30vh] md:top-2 lg:top-0'
        />
    </motion.div>
  )
}

export default CloudAnimation;