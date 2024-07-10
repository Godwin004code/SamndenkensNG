import React from 'react'
import img from "../../images/Oil-and-Gas-industry.jpeg"
import Typical from 'react-typical'

const ContactHero = () => {
  return (
    <div className='h-[80vh] mb-24'>
    <div className='h-full relative'>
<img src={img} alt="about us" className='h-[100%] w-full' />
<div className='bg-[#000000b3] absolute w-full h-full top-0 flex flex-col justify-center bottom-0'>

<div className='w-[50%] sm:w-[90%] sm:pl-4  pl-24'>

<h2 className='text-white outlined-text leading-[80px] mt-[0px]'><Typical
        steps={['CONTACT US', 5000]}
        loop={Infinity}
       
      /></h2>
<p className='text-white sm:text-sm text-xl leading-[25px] mt-5 w-[100%]' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
<button className='bg-[#d81220] text-white px-4 py-4 mt-10 explore-product-btn  max-w-[200px]'>EXPLORE PRODUCT</button>
</div>

</div>
    </div>
</div>
  )
}

export default ContactHero