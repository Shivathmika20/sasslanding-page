'use client'
import React from 'react'
import plusign from '../public/plus.png'
import minussign from '../public/minus.png'
import Image from 'next/image'
import { useState } from 'react'
function Action({question,answer}:{
    question:string,
    answer:string,
}) {
    const [open, setOpen] = useState(false);

  return (
    <div className='hover:cursor-pointer py-7 border-b border-white/70' key={question} onClick={() => setOpen(!open)}>
    <div className='flex items-center ' >
        <span className='flex-1 text-lg font-bold'>{question}</span>
        <Image src={!open?plusign:minussign} alt='plus' width={20} height={20}/>
        
    </div>
    {!open?null:
    <div className='py-4 text-white text-sm'>
                {answer}
    </div>}
    
        
        
</div>
  )
}

export default Action