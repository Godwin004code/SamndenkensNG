import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import CareerPageHero from './CareerPageHero'

const CareerPage = () => {
  return (
    <>
    <Nav />
    <CareerPageHero />
<section className='mx-auto w-[80%] sm:w-[90%] mb-20'>
    <h2 className='text-4xl font-medium text-center'>Begin Your Fulfilling Career in the Energy Industry!</h2>
    <p className='text-center mt-4'>Whether you’re an experienced professional looking to advance your career in a new environment or a passionate newcomer ready to start your journey in the energy sector, we’re always eager to welcome talented and dedicated individuals into our team.</p>
</section>
<section className='w-[80%] xs:w-[90%] mx-auto mb-10'>
    <h2 className='text-xl font-medium'>Technical Roles</h2>
    <p className='mt-4'>Do you have a background in an oil and gas technical discipline and a desire to contribute to the transformation of energy solutions for both people and the planet?
Are you passionate about innovation and sustainability within the energy sector?
We might have the perfect opportunity for you.</p>
<p className='mt-4'><i>Currently, there are no open positions.</i></p>
</section>
<section className='w-[80%] xs:w-[90%] mb-10 mx-auto'>
    <h2 className='text-xl font-medium'>Middle Management Roles</h2>
    <p className='mt-4'>Do you have a proven track record of leading teams to achieve company goals successfully?
Do you possess in-depth knowledge of the energy, oil, and gas industry, coupled with a passion that drives your ambitions?
We might have an opening that suits your skills.</p>
<p className='mt-4'><i>Currently, we are hiring.</i> <span>Apply below</span></p>
</section>
<section className='w-[80%] xs:w-[90%] mb-10 mx-auto'>
    <h2 className='text-xl font-medium'>Entry-Level Roles</h2>
    <p className='mt-4'>Are you ready to embark on your career in the energy, oil, and gas industry?
Are you enthusiastic, team-oriented, and have some experience in a corporate environment?
We’re excited to offer you the opportunity to start your journey with us.</p>
<p className='mt-4'><i>Currently, we are hiring.</i> <span>Apply below</span></p>
</section>
<form className='bg-[#F4E6E7] w-[80%] sm:w-[90%] mx-auto py-16 sm:py-10 px-14 sm:px-3 mt-0 mb-28'>
<div className='w-full flex gap-4 md:flex-col justify-between mb-8 sm:mb-[16px]'>
  <input type="text" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='First Name' />
  <input type="text"  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Last Name' />
</div>
<div className='w-full flex gap-4 md:flex-col justify-between sm:mb-[16px] mb-8'>
  <input type="email" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Email' />
  <select className='category-select pl-6 w-[45%] sm:w-full h-[60px] rounded-[10px] pr-6 bg-[#FFFFFF] focus:outline-none' name="category" id="category">
  <option value="Select an option" className='pl-6'>Select an option</option>
    <option value="Middle Management role" className='pl-6'>Middle Management role</option>
    <option value="Entry-level role">Entry-level role</option>
    
  </select>
</div>
<div className='w-full'>
    <h2 className='mb-2 text-lg font-medium'>Upload CV</h2> 
    <input className='w-full' type="file" name="cv" id="cv" />
</div>

<button className='bg-[#d81220] hover:bg-[#b40f1b] rounded-[10px] text-white w-full h-[80px] mt-12 sm:mt-[22px]'>Submit</button>
</form>
    <Footer />
    </>
  )
}

export default CareerPage