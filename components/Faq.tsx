
import plusign from '../public/plus.png'
import Image from 'next/image'

const faq=[
    {
        qus:"What payment methods do you accept?",
    },
    {
        qus:"How does the pricing work for teams?",
    },
    {
        qus:"Can i change my plan later?",
    },
    {
        qus:"Is my data secure?",
    },
]
function Faq() {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-16 sm:py-20 '>
        <div className='px-6'>
            <h2 className='text-center text-4xl font-bold tracking-tighter sm:text-6xl '>
            Frequently 
            asked questions
            </h2>
            <div className='mt-12 max-w-3xl mx-auto'>
                {faq.map(({qus})=>(
                    <div className='hover:cursor-pointer' key={qus}>
                        <div className='flex items-center py-7 border-b border-white/70' >
                            <span className='flex-1 text-lg font-bold'>{qus}</span>
                            <Image src={plusign} alt='plus' width={20} height={20}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq