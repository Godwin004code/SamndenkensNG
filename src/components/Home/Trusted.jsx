
import React, { useState } from 'react'
import img from "../../images/oil-wells.jpeg"
import HomeAccordion from './HomeAccordion'

const Trusted = () => {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)

    const handleFirstView = () => {
        setFirst(true)
        setSecond(false)
        setThird(false)
        setFourth(false)
    
    }
    const handleSecondView = () => {
        setFirst(false)
        setSecond(true)
        setThird(false)
        setFourth(false)
    
    }
    const handleThirdView = () => {
        setFirst(false)
        setSecond(false)
        setThird(true)
        setFourth(false)
    
    }
    const handleFourthView = () => {
        setFirst(false)
        setSecond(false)
        setThird(false)
        setFourth(true)
    
    }
    return (
        <div className='w-[80%] sm:w-[90%] mx-auto mt-40'>

            <h2 className='uppercase text-[#d81220] font-semibold mb-4'>trusted tech, expert service</h2>
            <h2 className='text-3xl'>Proven Pump & <span className='font-bold '>Artificial Lift</span></h2>
            <h2 className='font-bold text-3xl'>Solution</h2>
            <section className='flex gap-5 sm:gap-1 w-full mt-9' >
                <div className='trusted-card w-full cursor-pointer h-[100px]' onClick={handleFirstView}>
                    <div className='bg-[#f7f8fa] py-4 sm:px-1'>
                        <h2 className='text-[#d81220] font-bold sm:font-normal text-center text-lg sm:text-sm'>PUMPVUE</h2>
                        <p className='text-center mt-1 text-sm sm:hidden'>Artificial Lift</p>

                    </div>
                    <div className='bottom-bar' style={{display: first === true ? 'block' : 'none'}}>
                        <div className='w-full bg-[#d81220] h-2'></div>
                        <div class="triangle-down mx-auto"></div>
                    </div>
                </div>
                <div className='trusted-card w-full cursor-pointer  h-[100px]' onClick={handleSecondView}>
                    <div className='bg-[#f7f8fa] py-4 sm:px-2'>
                        <h2 className='text-[#d81220] font-bold sm:font-normal text-center text-lg sm:text-sm'>PUMPVUE</h2>
                        <p className='text-center mt-1 text-sm sm:hidden'>Artificial Lift</p>

                    </div>
                    <div className='bottom-bar' style={{display: second === true ? 'block' : 'none'}}>
                        <div className='w-full bg-[#d81220] h-2'></div>
                        <div class="triangle-down mx-auto"></div>
                    </div>
                </div>
                <div className='trusted-card w-full cursor-pointer  h-[100px]' onClick={handleThirdView}>
                    <div className='bg-[#f7f8fa] py-4 sm:px-2'>
                        <h2 className='text-[#d81220] font-bold sm:font-normal text-center text-lg sm:text-sm'>PUMPVUE</h2>
                        <p className='text-center mt-1 text-sm sm:hidden'>Artificial Lift</p>

                    </div>
                    <div className='bottom-bar' style={{display: third === true ? 'block' : 'none'}}>
                        <div className='w-full bg-[#d81220] h-2'></div>
                        <div class="triangle-down mx-auto"></div>
                    </div>
                </div>
                <div className='trusted-card w-full cursor-pointer  h-[100px]' onClick={handleFourthView}>
                    <div className='bg-[#f7f8fa] py-4'>
                        <h2 className='text-[#d81220] font-bold sm:font-normal text-center text-lg sm:text-sm'>PUMPVUE</h2>
                        <p className='text-center mt-1 text-sm sm:hidden'>Artificial Lift</p>

                    </div>
                    <div className='bottom-bar' style={{display: fourth === true ? 'block' : 'none'}}>
                        <div className='w-full bg-[#d81220] h-2'></div>
                        <div class="triangle-down mx-auto"></div>
                    </div>
                </div>
            </section>
            <section className='bg-[#f7f8fa] flex sm:flex-col w-full py-6 px-5 mt-10 sm:mt-0' style={{display: first === true ? 'flex' : 'none'}}>
                <div className='w-[50%] sm:w-full'>
                    <img src={img} alt="" className='w-full' />
                </div>
                <div className='w-[50%]  sm:w-full sm:ml-0 ml-8  mt-10'>
                    <section className='flex w-full justify-between'>

                        <h2 className='text-lg my-auto'>Title1</h2>

                        <button className='bg-[#d81220] py-4 px-5 text-white explore-product-btn'>Book a demo</button>


                    </section>
                    <p className='mt-6 mb-8 sm:mb-0'>
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
                    </p>
                    <HomeAccordion />
                </div>
            </section>
            <section className='bg-[#f7f8fa] flex sm:flex-col w-full py-6 px-5 mt-10 sm:mt-0' style={{display: second === true ? 'flex' : 'none'}}>
                <div className='w-[50%] sm:w-full'>
                    <img src={img} alt="" className='w-full' />
                </div>
                <div className='w-[50%] sm:w-full sm:ml-0 ml-8  mt-10'>
                    <section className='flex w-full justify-between'>

                        <h2 className='text-lg my-auto'>Title2</h2>

                        <button className='bg-[#d81220] py-4 px-5 text-white explore-product-btn'>Book a demo</button>


                    </section>
                    <p className='mt-6 mb-8'>
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
                    </p>
                    <HomeAccordion />
                </div>
            </section>
            <section className='bg-[#f7f8fa] flex sm:flex-col w-full py-6 px-5 mt-10 sm:mt-0' style={{display: third === true ? 'flex' : 'none'}}>
                <div className='w-[50%] sm:w-full'>
                    <img src={img} alt="" className='w-full' />
                </div>
                <div className='w-[50%] sm:w-full sm:ml-0 ml-8  mt-10'>
                    <section className='flex w-full justify-between'>

                        <h2 className='text-lg my-auto'>Title3</h2>

                        <button className='bg-[#d81220] py-4 px-5 text-white explore-product-btn'>Book a demo</button>


                    </section>
                    <p className='mt-6 mb-8'>
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
                    </p>
                    <HomeAccordion />
                </div>
            </section>
            <section className='bg-[#f7f8fa] flex sm:flex-col w-full py-6 px-5 mt-10 sm:mt-0' style={{display: fourth === true ? 'flex' : 'none'}}>
                <div className='w-[50%] sm:w-full '>
                    <img src={img} alt="" className='w-full' />
                </div>
                <div className='w-[50%] sm:w-full  ml-8  sm:ml-0 mt-10'>
                    <section className='flex w-full justify-between'>

                        <h2 className='text-lg my-auto'>Title4</h2>

                        <button className='bg-[#d81220] py-4 px-5 text-white explore-product-btn'>Book a demo</button>


                    </section>
                    <p className='mt-6 mb-8'>
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like
                    </p>
                    <HomeAccordion />
                </div>
            </section>
        </div>
    )
}

export default Trusted