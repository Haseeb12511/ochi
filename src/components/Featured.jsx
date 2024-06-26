// 

import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const images = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: '0' });
    images[index].start({ scale: 1.1 });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: '100%' });
    images[index].start({ scale: 1 });
  };

  return (
    <div className='w-full py-20'>
      <div className='w-full px-16 border-b-[1px] border-zinc-500 pb-12'>
        <h1 className='text-6xl tracking-tight'>Featured projects</h1>
      </div>

      <div className='px-16'>
        <div className='cards w-full flex gap-10 mt-12'>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className='cardcontainer relative w-1/2 h-[75vh]'>
            <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] font-bold z-[9] text-8xl tracking-tighter leading-none'>
              {"FYDE".split('').map((item, index) => (
                <motion.span
                  initial={{ y: '100%' }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.05 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <motion.img
                className='w-full h-full bg-cover'
                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
                alt=''
                initial={{ scale: 1 }}
                animate={images[0]}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className='cardcontainer relative w-1/2 h-[75vh]'>
            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] font-bold z-[9] text-8xl tracking-tighter leading-none'>
              {"VISE".split('').map((item, index) => (
                <motion.span
                  initial={{ y: '100%' }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.05 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <motion.img
                className='w-full h-full bg-cover'
                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'
                alt=''
                initial={{ scale: 1 }}
                animate={images[1]}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
