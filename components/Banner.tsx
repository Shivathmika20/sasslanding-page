import React from 'react'

function Banner() {
  return (
    <div className='text-center bg-[linear-gradient(to_right,rgb(252,214,255,0.7),rgb(41,216,255,0.7),rgb(255,253,128,0.7),rgb(248,154,191,0.7),rgb(252,214,255,0.7))]'>
        <div className="container p-4">
            <p><span className='hidden text-center font-medium sm:inline'>This page is included in a free SaaS Website Kit-</span>
            <a href="#" className='underline underline-offset-4 font-medium'>Explore the demo</a>
            </p>   
        </div>
    </div>
  )
}

export default Banner