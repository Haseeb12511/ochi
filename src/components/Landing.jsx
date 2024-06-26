import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-screen bg-zinc-800 pt-2'>
        <div className='textstructure mt-28 px-20'>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item, index) =>{
                return (
                <div className='master'>
                    <div className='w-fit flex'>
                        {index === 1 && (
                            <motion.div initial={{width:0}} animate={{width:"6vw"}} transition={{ease:[0.83, 0, 0.17, 1], duration: 1}} className='mr-[.3vw] w-[6vw] h-[4vw] bg-red-500 rounded-lg mt-[7px] overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="https://img.freepik.com/free-vector/geometric-abstract-green-background_23-2148360998.jpg?t=st=1719243906~exp=1719247506~hmac=78cadc199d0a0b95b76856adb806f09d7904c0bc875051eaffc26d44b792eeee&w=740" alt="" />
                            </motion.div>) }
                <h1 className='uppercase text-7xl leadind-none tracking-tighter'>
                    {item}
                </h1>
              </div>
            </div>
             );
            })}
        </div>
        <div className='border-t-2 border-zinc-600 mt-20 flex justify-between items-center py-5 px-16'>
            {["For public and private companies","From the first pitch to IPO"].map((item , index)=> 
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
            <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full '>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
                <span className='rotate-[320deg]'>
                <FaArrowRight />
                </span>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Landing