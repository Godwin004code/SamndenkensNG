import React from 'react'

const ContactForm = () => {
  return (
    <div className='mt-40'>
        <h2 className='text-[#d81220] font-medium text-2xl sm:text-base text-center'>GET IN TOUCH</h2>
      <p className='font-medium text-3xl sm:text-2xl sm:w-[90%] sm:mx-auto text-black text-center'>Let's Start a Conversation!</p>
      <p className='font-medium text-lg sm:text-base w-[70%] sm:w-[90%] text-center mx-auto mt-6 mb-10 sm:mb-10'>
      Have questions or want to learn more about our services?
Fill out the form below, and our team will reach out to you
shortly. We look forward to connecting with you!
      </p>
<form className='bg-[#F4E6E7] w-[80%] sm:w-[90%] mx-auto py-16 sm:py-10 px-14 sm:px-3 mt-0 mb-28'>
<div className='w-full flex gap-4 md:flex-col justify-between mb-12 sm:mb-[16px]'>
  <input type="text" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='First Name' />
  <input type="text"  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Last Name' />
</div>
<div className='w-full flex gap-4 md:flex-col justify-between sm:mb-[16px] mb-12'>
  <input type="email" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Email' />
  <input type="number"  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Phone Number' />
</div>
<div className='w-full flex justify-between mb-12 sm:mb-[16px]'>
 
  <select className='category-select pl-6 w-full h-[60px] rounded-[10px] pr-6 bg-[#FFFFFF] focus:outline-none' name="category" id="category">
  <option value="Select an option" className='pl-6'>Select an option</option>
    <option value="Waste Management / Environmental and Sustainability" className='pl-6'>Waste Management / Environmental and Sustainability</option>
    <option value="Procurement and Equipment Supplies">Procurement and Equipment Supplies</option>
    <option value="Construction, Electricals and Instrumentation">Construction, Electricals and Instrumentation</option>
    <option value="Equipment Hire">Equipment Hire</option>
    <option value="Trainings/Manpower supply">Trainings/Manpower supply</option>
    <option value="Marine Logistics">Marine Logistics</option>
    <option value="Brand communications, Compliance Certification & New media marketing">Brand communications, Compliance Certification & New media marketing</option>
  </select>
</div>
<div>
  <textarea className='w-full pl-6 pt-5 pb-32 rounded-[10px] focus:outline-none' placeholder='Your Text'></textarea>
</div>
<button className='bg-[#d81220] hover:bg-[#b40f1b] rounded-[10px] text-white w-full h-[80px] mt-12 sm:mt-[22px]'>Submit</button>
</form>
</div>
  )
}

export default ContactForm