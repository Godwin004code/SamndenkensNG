import React from 'react'
import Counter from '../Global/Counter'

const StrongSide = () => {
  return (
    <section className='bg-[#F4E6E7] w-full py-14 mb-24'>
        <h2 className='text-center font-semibold text-4xl'>Our Statistics</h2>
        <section className='flex sm:flex-col w-[80%] mx-auto justify-between mt-20'>
            <div className='w-full text-center py-6 jg-border-right' >
                <h2 className='font-bold text-4xl text-[#d81220] flex justify-center items-center'>  <Counter end={30} icon="+" /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Years of experience</p>
            </div>
            <div className='w-full text-center py-6 imole jg-border-right' >
                <h2 className='font-bold text-4xl text-[#d81220]'><Counter end={99} icon={"%"} /></h2>
                <p className='text-[#000000] font-mzedium text-lg mt-4'>Customer’s satisfaction</p>
            </div>
            <div className='w-full text-center py-6 imole-x2 jg-border-right' >
                <h1 className='font-bold text-4xl text-[#d81220]'><Counter end={60} icon={"+"} /></h1>
                <p className='text-[#000000] font-medium text-lg mt-4'>Enterprise empowered</p>
            </div>
            <div className='w-full text-center py-6'>
                <h2 className='font-bold text-4xl text-[#d81220]'><Counter end={120} icon={"+"} /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Happy clients</p>
            </div>
        </section>
        
    </section>
  )
}

export default StrongSide