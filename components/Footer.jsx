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
    <div className='bg-black text-white py-12 sm:py-16'>
        <div className='px-6 flex flex-col justify-between items-center sm:flex-row border-t border-white/30'>
            <p className='mt-5 text-white/50'>@ 2024 Your Company, Inc. All rights reserved</p>
            <div className='flex gap-4 mt-4 p-3'>
                <Image src={insta} alt='insta' width={20} height={20} className='h-6'/>
                <Image src={twitter} alt='twitter' width={20} height={20} className='h-6'/>
                <Image src={link} alt='link' width={20} height={20} className='h-6'/>
                <Image src={music} alt='music' width={20} height={20}  className='h-6'/>
                <Image src={utube} alt='utube' width={20} height={20}  className='h-6'/>
                <Image src={pin} alt='pin' width={20} height={20}  className='h-6'/>
            </div>
        </div>

    </div>
  )
}

export default Footer