import React from 'react'
import img from "../../images/Email Plan (2) (2).webp"

const Commit = () => {
  return (
    <div className='relative w-full mb-36'>
        <img src={img} alt="" className='h-[350px]  w-full object-cover' />
        <div className='w-full h-full bg-[#00000099] flex justify-center items-center flex-col   absolute top-0 p-10'>
          <h2 className='text-5xl sm:text-2xl text-white text-center w-[70%] mx-auto font-bold'>Our Commitment to Sustainability</h2>
          <p className='text-white mt-4 text-lg text-center xs:text-base'>At Samdenkens Nig Ltd, we are deeply committed to fostering a sustainable future. Our sustainability efforts have resulted in a 30% reduction in greenhouse gas emissions across our operations, and we continue to champion environmental stewardship through our waste management initiatives.</p>
          
        </div>
      </div>
  )
}

export default Commit