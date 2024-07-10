
import React from 'react';
import {FaChevronRight} from "react-icons/fa6";

const MadeInNigeria = () => {
  return (
    <div className='w-[80%] sm:w-[90%] mx-auto mt-40 sm:mt-16 mb-24'>
        <h2 className='uppercase text-[#d81220] font-semibold  mb-4'>Made In Nigeria</h2>
        <section className='flex sm:flex-col justify-between'>
          <div>
            <h2 className='text-3xl'>Hardworking Pumps By</h2>
            <h2 className='text-3xl font-bold'>HardWorking Folks</h2>
          </div>
          <div className='w-[50%] sm:w-full sm:mt-6'>
            <p>desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <button className='flex sm:mt-6'>
<span className='text-[#d81220] uppercase font-bold'>Explore products</span> <FaChevronRight color='#d81220' className='my-auto' />
            </button>
          </div>
        </section>
    </div>
  )
}

export default MadeInNigeria