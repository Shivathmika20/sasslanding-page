import React from 'react'
import Image from 'next/image'
import acme from '../public/acme 1.png'
import quantum from '../public/quantum 1.png'
import apex from '../public/apex 1.png'
import celestia from '../public/celestia 1.png'
import echo from '../public/echo 1.png'
import pulse from '../public/pulse 1.png'


function Logo() {
   
  return (
    <div className='bg-black text-white py-16 '>
        <div className='p-4 flex flex-col justify-center items-center'>
            <h2 className='text-center text-white/50 text-lg'>
            Trusted by the world’s most
            <br className='sm:hidden' /> innovative teams
            </h2>
            <div className='grid grid-cols-1 mt-8 gap-8 sm:flex '>
                <div className='flex justify-center gap-6'>
                <Image src={acme} alt='acme' width={130} height={80} className='h-9 w-30'/>
                <Image src={quantum} alt='quantum' width={130} height={100}  className='h-9 w-30'/>
                </div>
               <div className='flex justify-center gap-6'>
               <Image src={echo} alt='echo' width={130} height={100} className='h-9 w-30'/>
               <Image src={celestia} alt='celestia' width={130} height={100}  className='h-9 w-30'/>
               </div>
                <div className='flex justify-center gap-6'>
                <Image src={pulse} alt='pulse' width={100} height={100}  className='h-9 w-30'/>
                <Image src={apex} alt='apex' width={100} height={100}  className='h-9 w-30'/>
                </div>
                
            </div>
            
        </div>
    </div>
   
  )
}

export default Logo