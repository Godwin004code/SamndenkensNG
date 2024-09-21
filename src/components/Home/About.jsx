
import React, {useRef, useEffect, useState} from 'react'
import {motion, useInView} from "framer-motion"
import img from "../../images/SAMDENKINS WEBSITE.png"
import { Link } from 'react-router-dom'

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
        className="section w-full h-full lg:h-full "
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
  
    <div className='flex w-[80%] lg:w-[90%] sm:flex-col mx-auto mt-40 sm:mt-16 gap-16 lg:gap-5'>
       
        <div className='w-[50%]  lg:w-full lg:h-[350px] sm:h-[450px] xs:h-[250px]'>
        <Section>
            <img src={img} alt="" className='h-full object-cover w-full' />
            </Section>
        </div>
        
    
       <div  className='w-[50%] lg:w-full lg:h-auto flex justify-between flex-col'>
       <Text>
            <div>
            <h2 className='text-[#d81220]  font-semibold'>CEO WELCOME MESSAGE</h2>
            <h2 className='text-4xl hidden sm:text-3xl mt-6'>Dear Visitors,</h2>
            <p className=' mt-5 font-light'>Dear Visitors,</p>
            <p className=' mt-5 font-light'>Welcome to Samdenkens. We are thrilled to have you here, whether you are a valued partner, client, regulator, team member, or potential energy consumer. Our vision, <b>Safely Redefining Global Energy Services with Excellence, Integrity, and Unrivaled Innovation</b>, guides everything we do.</p>
<p className=' mt-5 font-light'>
<b>To Our Partners and Clients:</b> Your trust is invaluable to us. We are committed to delivering innovative, reliable, and safe energy solutions that drive mutual success.
</p>
<p className=' mt-5 font-light'>
<b>To Regulators:</b> We operate with the highest standards of safety, environmental stewardship, and compliance, ensuring our activities align with national and international regulations.
</p>
<p className=' mt-5 font-light'>
<b>To Our Team:</b> Thank you for your dedication and expertise. You are the heart of Samdenkens, and together, we are setting new industry benchmarks.
</p>
<p className=' mt-5 font-light' >
<b>To Potential Staff:</b> We invite you to explore career opportunities with us. Join a team that values innovation, integrity, and teamwork.
</p>
<p className=' mt-5 font-light'>
<b>To Future Energy Consumers: </b> We are committed to developing sustainable energy solutions that meet the demands of tomorrow.
</p>
<p className=' mt-5 font-light'>
Thank you for visiting Samdenkens. We look forward to working together to create a future where energy services are defined by safety, excellence, and innovation.
</p>
<p className=' mt-5 font-light'>Warm regards,</p>
<p className=' mt-5'><b>Chief Executive Officer, </b></p>
<p className=' mt-5'>Samdenkens Nig Ltd</p>

            </div>
         <Link to="/contact">
         <button className='bg-[#d81220] text-white px-4 py-3 mt-6 explore-product-btn  max-w-[200px]'>CONTACT US</button></Link>
            </Text>
        </div>
    
        
    </div>
   
  )
}


export default About