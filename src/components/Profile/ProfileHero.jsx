import React from 'react'
import img from "../../images/Oil-and-Gas-industry.jpeg"
import Typical from 'react-typical'

const ProfileHero = () => {
  return (
    <div className='h-[80vh]'>
    <div className='h-full relative'>
<img src={img} alt="about us" className='h-[100%] w-full' />
<div className='bg-[#000000b3] absolute w-full h-full top-0 flex flex-col justify-center bottom-0'>

<div className='w-[50%] sm:w-[90%] sm:pl-4 pl-24'>
<h2 className='text-white outlined-text leading-[80px] mt-[0px]'> <Typical
    steps={['OUR PROFILE', 5000]}
    loop={Infinity}
   
  /></h2>
<p className='text-white sm:text-sm text-xl leading-[25px] mt-5 w-[100%]' >We offer a broad range of services for the oil and gas industry, including waste management, EPIC services (engineering, procurement, installation, and construction), and electrical and instrumentation expertise.</p>
<button className='bg-[#d81220] text-white px-4 py-4 mt-10 explore-product-btn  max-w-[200px]'>EXPLORE PRODUCT</button>
</div>

</div>
    </div>
</div>
  )
}

export default ProfileHero