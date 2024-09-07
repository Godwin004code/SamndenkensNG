import React from 'react'
import Counter from '../Global/Counter'

const StrongSide = () => {
  return (
    <section className='bg-[#F4E6E7] w-full py-14 mb-0'>
        <h2 className='text-center font-medium text-4xl'>Our Impact in Numbers</h2>
        <section className='flex sm:flex-col w-[90%] mx-auto justify-between mt-20'>
            
            <div className='w-full text-center px-2 py-6 imole jg-border-right' >
                <h2 className='font-bold text-4xl text-[#d81220]'><Counter end={20} icon={"+"} /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Years of Collective Expertise</p>
                <p className='mt-2 text-[#000000b3]'>With over two decades of industry experience, Samdenkens delivers premium energy services, deeply rooted in the sector.</p>
            </div>
            <div className='w-full px-2 text-center py-6 imole-x2 jg-border-right' >
                <h1 className='font-bold text-4xl text-[#d81220]'><Counter currency={""} end={90} icon={"%"} /></h1>
                <p className='text-[#000000] font-medium text-lg mt-4'>Client Retention</p>
                <p className='mt-2 text-[#000000b3]'>We maintain a client retention rate of over 90%, consistently delivering value to major IOCs in Nigeria on a project-by-project basis.</p>
            </div>
            <div className='w-full px-2 text-center py-6 jg-border-right'>
                <h2 className='font-bold text-4xl text-[#d81220]'><Counter end={99} icon={"%"} /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Safety Record</p>
                <p className='mt-2 text-[#000000b3]'> Our commitment to safety is demonstrated by a 99.9% incident-free rate, safeguarding our employees, partners, and communities.</p>
            </div>
            <div className='w-full px-2 text-center py-6 jg-border-right'>
                <h2 className='font-bold text-4xl text-[#d81220]'><Counter end={100} icon={"%"} /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Efficiency Boost</p>
                <p className='mt-2 text-[#000000b3]'>Our innovative technologies increase operational efficiency. Resulting in significant cost savings and reduced environmental impact.</p>
            </div>
            <div className='w-full px-2 text-center py-6'>
                <h2 className='font-bold text-4xl text-[#d81220]'><Counter end={100} icon={"+"} /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Skilled Professionals</p>
                <p className='mt-2 text-[#000000b3]'>Our team of over 100 dedicated experts is the foundation of Samdenkens' continued success.</p>
            </div>
        </section>
        
    </section>
  )
}

export default StrongSide