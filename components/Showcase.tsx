import Image from 'next/image'
import React from 'react'
import showcase from '../public/App Night1.png'

function Showcase() {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-16 sm:py-20'>
        <div className='px-6 mx-auto'>
            <h2 className='text-center font-bold text-4xl sm:text-6xl tracking-tighter'>Intuitive interface</h2>
            <p className='text-center mt-5 text-xl text-white/70 max-w-xl mx-auto'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
            <Image src={showcase} alt='showcase' width={500} height={500} className='mt-14 mx-auto w-1/2'/>
            
        </div>
    </div>
  )
}

export default Showcase