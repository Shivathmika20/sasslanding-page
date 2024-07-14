import React from 'react'
import arrow from '../public/arrow.png'
import Image from 'next/image'
import cursor from '../public/cursor 2.png'
import msg from '../public/message.png'

function Hero() {
  return (
    <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-20 sm:py-24 relative overflow-clip'>
       <div className='absolute bg-black h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3000px] lg:h-[1300px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EE)] top-[calc(100%-120px)] sm:top[calc(100%-200px)]'>
       </div> 
        <div className='relative container p-4 flex flex-col justify-center items-center'>
            <a href="#" className='border border-white/30 rounded-lg px-2 py-1 inline-flex gap-2'>
                <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [webkit-background-clip:text]'>Version 2.0 is here</span>
                <span className='inline-flex items-center gap-2'>
                  <span>Read more</span>
                  <Image src={arrow} />
                </span>
            </a>
            <div className='flex justify-center  mt-8 '>
              <div className='inline-flex relative'>
              <h1 className='text-7xl sm:text-9xl tracking-tighter text-center font-bold  inline-flex'>
                  One Task
                  <br />at a Time
              </h1>
              
                <Image src={cursor} width={200} height={200} alt='cursor' className='absolute right-[476px] top-[100px] hidden sm:inline'/>
                <Image src={msg} width={200} height={200} alt='msg' className='absolute left-[498px] top-14 hidden sm:inline'/>
              
              </div>
            </div>
            <p className='text-center mt-8 text-xl max-w-md mx-auto'>
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
            </p>
            <div className='flex mt-8 justify-center'>
              <button className='bg-white rounded-lg text-black py-3 px-5 sm:text-xl  font-medium'>Get for free</button>
            </div>
        </div>
        

       
    </div>
  )
}

export default Hero