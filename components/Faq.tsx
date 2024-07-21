
import Action from './Action'

const faq=[
    {
        qus:"What payment methods do you accept?",
         ans: "We accept Visa, MasterCard, American Express, and PayPal."
    },
    {
        qus:"How does the pricing work for teams?",
        ans: "Our team pricing is based on the number of users. Please contact our sales team for more details."
    },
    {
        qus:"Can i change my plan later?",
         ans: "Yes, you can upgrade or downgrade your plan at any time through your account settings."
    },
    {
        qus:"Is my data secure?",
        ans: "We take data security very seriously. All your data is encrypted and securely stored."
    },
]
function Faq() {
 
  return (
    <div className=' text-white bg-gradient-to-b from-[#5D2CA8] to-black py-16 sm:py-20 '>
        <div className='px-6'>
            <h2 className='text-center text-4xl font-bold tracking-tighter sm:text-6xl '>
            Frequently 
            asked questions
            </h2>
            <div className='mt-12 max-w-3xl mx-auto'>
                {faq.map(({qus,ans})=>(
                    <Action key={qus} question={qus} answer={ans}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq