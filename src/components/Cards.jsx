import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#E7E7E7] items-center px-12 flex gap-5'>
        <div className='cardcontiner h-[56vh] w-1/2'>
            <div className='card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center'>
                <img className='w-[23.7vh] h-[9.6vh] ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-3 py-[2px] border-[#CDEA68] text-[#CDEA68] border-[1px] left-10 bottom-8 rounded-full text-sm tracking-tighter'>&copy;2022-2024</button>
            </div>
        </div>
        <div className='cardcontiner h-[56vh] w-1/2 flex gap-5'>
            <div className='card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center'>
                <img className='w-[23vh] h-[12.3vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-3 py-[2px] border-[1px] left-8 bottom-8 rounded-full tracking-tighter text-sm'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center'>
                <img className='w-[15.9vh] h-[16.2vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-3 py-[2px] border-[1px] left-8 bottom-8 rounded-full tracking-tighter text-sm'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards