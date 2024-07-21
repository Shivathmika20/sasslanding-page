import Image from 'next/image'
import React from 'react'
import logo from '../public/logosaas.png'
import icon from '../public/Icons.png'

function Navbar() {
  return (
    <div className=' bg-black text-white' >
        <div className='flex items-center justify-between p-8 max-w-screen-xl mx-auto'>
            <div className='border border-white border-opacity-30 rounded-lg'>
                <Image src={logo}  alt='logo' width={40} height={40}/>
            </div>
            <div className='border border-white  border-opacity-30 h-10 w-10 rounded-lg  inline-flex items-center justify-center sm:hidden'>
                <Image src={icon} alt='icon'  width={25} height={20}/>
            </div>
            <nav className='items-center gap-6 hidden sm:flex'>
                <a href="#" className='opacity-60 hover:opacity-100 '>About</a>
                <a href="#" className='opacity-60 hover:opacity-100'>Features</a>
                <a href="#" className='opacity-60 hover:opacity-100'>Updates</a>
                <a href="#" className='opacity-60 hover:opacity-100'>Help</a>
                <a href="#" className='opacity-60 hover:opacity-100'>Customers</a>
               <button className='bg-white rounded-lg text-black py-2 px-4 '>Get for free</button>
            </nav>
        </div>
        
    </div>
  )
}

export default Navbar