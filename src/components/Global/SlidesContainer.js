
import React, { useState } from 'react'
import SlidesArrow from './SlidesArrow'
import SlidesDot from './SlidesDot'
import OilWell from "../../images/oil-wells.jpeg"
import img1 from "../../images/41.webp"
import img2 from "../../images/42 (1) (1) (1) (1).webp"
import img3 from "../../images/Email Plan (2) (2).webp"
import Typical from 'react-typical'
import { motion } from 'framer-motion';
//import './SliderContainer.css'


const SlidesContainer = () => {
    const Data = [
        {
            title: "Lorem Ipsum sit dolor amet tsibilisi",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
            img: img1
        },
        {
            title: "Lorem Ipsum sit dolor amet tsibilisi2",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
            img: img2
        },
        {
            title: "Lorem Ipsum sit dolor amet tsibilisi3",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
            img: img3
        }
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


    return (
        

        <motion.div key={active}  initial="hidden"
        animate="visible"
        variants={containerVariants}  className="flex relative w-full h-[85vh]" >
            
            <motion.div className="slide-img w-full relative" style={{backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",}}>
                <img src={img} alt="image" className='w-full z-10 h-[100%] object-cover' />
                <div className='absolute bg-[#d812204d] top-0 bottom-0'>
                <div className="header w-[50%] sm:w-[90%] sm:pl-4  h-full  pl-24 justify-center flex flex-col">
                <motion.h2 variants={childVariants} className='text-white outlined-text leading-[80px] sm:leading-[40px] mt-[-20px]'>{title}</motion.h2>
                <motion.p variants={childVariants} className='text-white  text-xl sm:text-sm leading-[25px] mt-5 w-[100%]' >{description}</motion.p>
                <motion.button variants={buttonVariants} className='bg-[#d81220] text-white px-4 py-4 mt-10 explore-product-btn  max-w-[200px]'>EXPLORE PRODUCT</motion.button>
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