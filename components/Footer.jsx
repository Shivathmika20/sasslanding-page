import Image from 'next/image'
import React from 'react'
import insta from '../public/insta.png'
import twitter from '../public/tweet.png'
import link from '../public/linkdin.png'
import music from '../public/music.png'
import utube from '../public/youtube.png'
import pin from '../public/pinterest.png'
function Footer() {
  return (
    <div className='bg-black text-white py-8'>
        <div className='max-w-screen-xl mx-auto px-6 flex flex-col justify-between items-center sm:flex-row border-t border-white/30'>
            <p className='mt-5 text-white/50 text-center'>@ 50024 Your Company, Inc. All rights reserved</p>
            <div className='flex gap-4 mt-4 p-3'>
                <Image src={insta} alt='insta' width={500} height={500} className='size-4 md:size-6'/>
                <Image src={twitter} alt='twitter' width={500} height={500} className='size-4 md:size-6'/>
                <Image src={link} alt='link' width={500} height={500} className='size-4 md:size-6'/>
                <Image src={music} alt='music' width={500} height={500}  className='size-4 md:size-6'/>
                <Image src={utube} alt='utube' width={500} height={500}  className='size-4 md:size-6'/>
                <Image src={pin} alt='pin' width={500} height={500}  className='size-4 md:size-6'/>
            </div>
        </div>

    </div>
  )
}

export default Footer