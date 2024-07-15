import Image from 'next/image'
import React from 'react'

import vec from '../public/Vector.png'

const features=[
    {
        title:"Integration ecosystem",
        desc:"Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
    },
    {
         title:"Goal setting and tracking",
        desc:"Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
    },
    {
         title:"Secure data encryption",
        desc:"With end-to-end encryption, your data is securely stored and protected from unauthorized access."
    },
]
function Features() {
  return (
    <div className='bg-black text-white py-16 sm:py-20'>
        <div className='container px-6 mx-auto'>
            <h2 className='font-bold text-4xl sm:text-6xl text-center tracking-tighter'>Everything you need</h2>
            <p className='text-center mt-5 text-xl text-white/70 max-w-xl mx-auto'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
        
            <div className='mt-16 flex flex-col sm:flex-row gap-4'>
                {features.map(({title,desc})=>(
                    <div key={title} className='border border-white/30 rounded-xl px-6 py-10 text-center  sm:flex-1'>
                        <div className='inline-flex items-center justify-center rounded-xl text-center bg-white h-14 w-14 ' >
                            <Image src={vec} alt='vector' width={40} height={40} className=''/>
                        </div>
                        <h3 className='mt-6 font-bold'>{title}</h3>
                        <p className='mt-2 text-white/70'>{desc}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Features