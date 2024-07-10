
import React, {useRef, useEffect, useState} from 'react'
import {motion, useInView} from "framer-motion"
import img from "../../images/oil-wells.jpeg"

const About = () => {
  const sectionVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const childVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1 } },
  };



  const Section = ({ children }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.1 } // Adjust threshold as needed
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="section w-full lg:h-full "
      >
        {children}
      </motion.div>
    );
  };


  const Text = ({ children }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={childVariants}
        className="section w-full sm:h-auto"
      >
        {children}
      </motion.div>
    );
  };

  return (
  
    <div className='flex w-[80%] lg:w-[90%] lg:flex-col mx-auto mt-40 sm:mt-16 gap-16 lg:gap-5'>
       
        <div className='w-[50%]  lg:w-full lg:h-[350px] sm:h-[250px]'>
        <Section>
            <img src={img} alt="" className='h-full w-full' />
            </Section>
        </div>
        
    
       <div  className='w-[50%] lg:w-full lg:h-auto flex justify-between flex-col'>
       <Text>
            <div>
            <h2 className='text-[#d81220] font-semibold'>MESSAGE FROM FOUNDER + CEO</h2>
            <h2 className='text-4xl sm:text-3xl mt-6'>Welcome To <span className='font-semibold'>Samdenkens Oil & Gas</span></h2>
            <p className=' mt-5'>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p  className=' mt-4'>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <button className='bg-[#d81220] text-white px-4 py-5 mt-10 explore-product-btn  max-w-[200px]'>CONTACT US</button>
            </Text>
        </div>
    
        
    </div>
   
  )
}

export default About