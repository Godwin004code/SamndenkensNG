
import React from 'react'
import {FaChevronRight} from "react-icons/fa6"
import { IoTimeOutline } from "react-icons/io5";
import img from "../../images/Oil-and-Gas-industry.jpeg"


const Featured = () => {
  return (
    <div className='w-[80%] sm:w-[90%]  mx-auto mt-40 sm:mt-16'>
    <h2 className='uppercase text-[#d81220] font-semibold mb-4'>our Featured</h2>
    <section className='flex sm:flex-col justify-between'>
      <div>
        <h2 className='text-3xl'>Fast Delivery. Quality Product.</h2>
        <h2 className='text-3xl font-bold'>Unmatched Performance.</h2>
      </div>
      <div className='w-[50%] sm:mt-5 sm:w-full'>
        <p>desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </section>
    <section className='flex flex-col sm:flex-col  mt-9 gap-10'>
        <div className='bg-[#fff] flex  sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto sm:order-2 '>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px]' />
            <h2 className='text-2xl font-bold featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] my-2'>20% Annual Cost Saving</h2>
<p className=''>
desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
</p>
     </div>
     <div className='w-[40%] sm:w-full '>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
        <div className='bg-[#fff] flex  sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] ml-20 sm:w-full sm:ml-0 sm:px-4 sm:py-5 my-auto order-2 sm:order-2'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px]' />
            <h2 className='text-2xl font-bold featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] my-2'>20% Annual Cost Saving</h2>
<p className=''>
desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
</p>
     </div>
     <div className='w-[40%] order-1 sm:w-full sm:order-1'>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
        <div className='bg-[#fff] flex  sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto sm:order-2'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px]' />
            <h2 className='text-2xl font-bold featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] my-2'>20% Annual Cost Saving</h2>
<p className=''>
desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
</p>
     </div>
     <div className='w-[40%] sm:w-full sm:order-1'>
      <img src={img} alt="" className='sm:w-full' />
     </div>
        </div>
        <div className='bg-[#fff] flex sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto order-2'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px]' />
            <h2 className='text-2xl font-bold featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] my-2'>20% Annual Cost Saving</h2>
<p className=''>
desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
</p>
     </div>
     <div className='w-[40%] order-1 sm:w-full '>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
        
    </section>
</div>
  )
}

export default Featured