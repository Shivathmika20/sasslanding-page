import React from 'react'

function Hero() {
  return (
    <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-20'>
        <div className='p-4'>
            <a href="#" className='border rounded-md px-2 py-1'>
                <span>Version 2.0 is here</span>
                <span>Read more</span>
            </a>
            <h1>
                One Task at a Time
            </h1>
            <p>
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
            </p>
            <button>Get for free</button>
        </div>
    </div>
  )
}

export default Hero