import React from 'react'
import img from "../../images/Oil-and-Gas-industry.jpeg"
import Typical from 'react-typical'

const QuoteHero = () => {
  return (
    <div className='h-[50vh]'>
    <div className='h-full relative'>
<img src={img} alt="about us" className='h-[100%] w-full' />
<div className='bg-[#000000b3] absolute w-full h-full top-0 flex flex-col justify-center bottom-0'>

<div className='w-[50%] sm:w-[90%] sm:pl-4 pl-24'>
<h2 className='text-white outlined-text leading-[80px] mt-[0px]'> <Typical
    steps={['REQUEST QUOTE', 5000]}
    loop={Infinity}
   
  /></h2>
<p className='text-white sm:text-sm  text-xl leading-[25px] mt-5 w-[100%]' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

</div>

</div>
    </div>
</div>
  )
}

export default QuoteHero