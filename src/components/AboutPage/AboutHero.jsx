
import React from 'react'
import img from "../../images/Oil-and-Gas-industry.jpeg"
import Typical from 'react-typical'
import { Link } from 'react-router-dom'


const AboutHero = () => {
  return (
    <div className='h-[510px]'>
        <div className='h-full relative'>
<img src={img} alt="about us" className='h-[100%] w-full' />
<div className='bg-[#000000b3] absolute w-full h-full top-0 flex flex-col justify-center bottom-0'>

<div className='w-[50%] sm:w-[90%] sm:pl-4 pl-24'>
<h2 className='text-white outlined-text leading-[80px] mt-[0px]'> <Typical
        steps={['ABOUT US', 5000]}
        loop={Infinity}
       
      /></h2>
<p className='text-white sm:text-sm  text-xl leading-[25px] mt-5 w-[100%]'>Redefining Energy with Excellence, Integrity, and Innovation</p>
<Link to="/projects">
<button className='bg-[#d81220] text-white px-4 py-4 mt-10 explore-product-btn  max-w-[200px]'>EXPLORE SERVICES</button>
</Link>
</div>

</div>
        </div>
    </div>
  )
}

export default AboutHero