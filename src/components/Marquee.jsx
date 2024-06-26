import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-24 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-[1px] border-b-[1px] border-zinc-500 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:"linear", duration: 10}} className='text-[18vw] leading-none tracking-tighter font-normal md:font-bold uppercase pr-20'>We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:"linear", duration: 10}} className='text-[18vw] leading-none tracking-tighter font-normal md:font-bold uppercase pr-20'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee