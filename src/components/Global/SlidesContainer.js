
import React, { useState } from 'react'
import SlidesArrow from './SlidesArrow'
import SlidesDot from './SlidesDot'
import OilWell from "../../images/oil-wells.jpeg"
import img1 from "../../images/41.webp"
import img2 from "../../images/42 (1) (1) (1) (1).webp"
import img3 from "../../images/Email Plan (2) (2).webp"
import Typical from 'react-typical'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
//import './SliderContainer.css'


const SlidesContainer = () => {
    const Data = [
        {
            title: "Innovative Procurement",
            description: "SMART BUYER",
            img: img1
        },
        {
            title: "SEAMLESS CONSTRUCTION AND ENGINEERING",
            description: "TRONIC SOLUTIONS",
            img: img2
        },
        {
            title: "SUSTAINABLE WASTE MANAGEMENT SOLUTIONS",
            description: "REFUSE, REDUCE, REUSE, REPURPOSE AND RECYCLE",
            img: "https://vacranerental.com/wp-content/uploads/2020/05/shutterstock_257689849.jpg"
        },
        {
            title: "COMPREHENSIVE INDUSTRY SOLUTIONS",
            description: "PEOPLES; OPERATIONS, ASSETS INTEGRITY, SAFETY",
            img: "https://www.yontemakademi.com.tr/media/service/cover/periyodik-muayene-ve-kontroller.jpg"
        },
        
    ]

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
      
      const childVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.5 } },
      };

      const buttonVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.001 } }, // Faster animation for the button
      };
      

    const [active, setActive] = useState(0)

    const { title, img, description } = Data[active]



    const nextSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if (newIndex > Data.length - 1) {
                return 0
            } else if (newIndex < 0) {
                return Data.length - 1
            }

            return newIndex
        })
    }

  //  setTimeout(nextSlide, 5000)

    const prevSlide = () => {
        setActive(() => {
            let newIndex = active - 1

            if (newIndex < 0) {
                return Data.length - 1
            } else if (newIndex > Data.length - 1) {
                return 0
            }

            return newIndex
        })
    }

// outlined-text
    return (
        

        <motion.div key={active}  initial="hidden"
        animate="visible"
        variants={containerVariants}  className="flex relative w-full h-[85vh]" >
            
            <motion.div className="slide-img w-full relative" style={{backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",}}>
                <img src={img} alt="image" className='w-full z-10 h-[100%] object-cover' />
                <div className='absolute top-0 right-0 left-0 bg-[#000000b3] bottom-0'>
                <div className="header w-[80%] sm:w-[90%] sm:pl-4  h-full  pl-24 justify-center flex flex-col">
                <motion.h2 variants={childVariants} className='text-white uppercase outlined-text leading-[80px] xs:leading-[40px] sm:leading-[70px] sm:mt-10 mt-[-20px]'>{title}</motion.h2>
                <motion.p variants={childVariants} className='text-white capitalize  text-xl sm:text-sm leading-[25px] mt-5 w-[100%]' >{description}</motion.p>
                <Link to="/projects">
                <motion.button variants={buttonVariants} className='bg-[#d81220] text-white px-4 py-4 mt-10 explore-product-btn  max-w-[200px]'>EXPLORE SERVICE</motion.button>
                </Link>
                <SlidesDot data={Data}  active={active} />
            </div>
                </div>
                <div className='absolute bottom-0 right-0 z-20'>
                <SlidesArrow next={nextSlide} data={Data} prev={prevSlide} />
                </div>
            </motion.div>


        </motion.div>
    )
}

export default SlidesContainer