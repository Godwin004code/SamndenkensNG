
import React, {useRef, useState, useEffect} from 'react'
import {FaChevronRight} from "react-icons/fa6"
import { IoTimeOutline } from "react-icons/io5";
import img from "../../images/Oil-and-Gas-industry.jpeg"
import { motion } from "framer-motion";

const Featured = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 10.35,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 10,
      },
    },
    exit: {
      opacity: 0,
      
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
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
        animate={isInView ? 'show' : 'hidden'}
        exit={"exit"}
        variants={container}
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
        
        animate={isInView ? 'visible' : 'hidden'}
        variants={item}
        className="section w-full sm:h-auto"
      >
        {children}
      </motion.div>
    );
  };


  return (
    <div className='w-[80%] sm:w-[90%]  mx-auto mt-40 sm:mt-16'>
    <h2 className='uppercase text-[#d81220] font-semibold mb-4'>our Featured</h2>

    <section className='flex sm:flex-col justify-between'>
      <div>
        <h2 className='text-3xl'>Fast Delivery. Quality Product.</h2>
        <h2 className='text-3xl font-bold'>Unmatched Performance.</h2>
      </div>
      <div className='w-[50%] sm:mt-5 sm:w-full'>
        <p>desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </section>


    <Section>
    <section className='flex flex-col sm:flex-col  mt-9 gap-10'>
       <Text>
       <div className='bg-[#fff] flex  sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto sm:order-2 '>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px] hidden' />
            <h2 className='text-2xl font-bold hidden featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] text-xl my-2'>Waste Management / Environmental and Sustainability</h2>
<p className=''>
Waste Management services
Laboratory services
Ecosystem Mangrove Restoration
Water/waste treatment
Decommissioning
Thermal Desorption Units
Incineration
Oil spill cleanup and Remediation
Oil spill response, onshore and offshore
Environmental consultancy, Audit and Assessment
</p>
<button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Request Quote</button>
     </div>
     <div className='w-[40%] sm:w-full '>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
       </Text>
       <Text>
       <div className='bg-[#fff] flex  sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] ml-20 sm:w-full sm:ml-0 sm:px-4 sm:py-5 my-auto order-2 sm:order-2'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px] hidden' />
            <h2 className='text-2xl font-bold hidden featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] text-lg my-2'>Procurement and Equipment
            Supplies</h2>
<p className=''>
SDK has the capacity to provide procurement services to clients, using our well-established partnerships with original equipment manufacturers (OEMs) worldwide. These items include: industry consumables, tools and equipment, OCTGs and Line pipes, Pipe fittings, wellheads & Christmas trees, Valves, Hazardous waste Incinerators, electrification and instrumentation products, Industrial Fire and Safety equipment, chemicals, medical and IT equipment.
</p>
<button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Request Quote</button>
     </div>
     <div className='w-[40%] order-1 sm:w-full sm:order-1'>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
        </Text>
        <Text>
        <div className='bg-[#fff] flex  sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto sm:order-2'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px] hidden' />
            <h2 className='text-2xl font-bold hidden featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] text-lg  my-2'>Construction, Electricals and Instrumentation</h2>
<p className=''>
Civil and structural Engineering construction Works
Jetty Construction and Concrete Structures
Location Preparation
Site Levelling
Dredging
Non destructive testing
Electrification
</p>
<button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Request Quote</button>
     </div>
     
     <div className='w-[40%] sm:w-full sm:order-1'>
      <img src={img} alt="" className='sm:w-full' />
     </div>
        </div>
        </Text>
       <Text>
       <div className='bg-[#fff] flex sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto order-2'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px] hidden' />
            <h2 className='text-2xl font-bold hidden featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] text-lg my-2'>Equipment Hire</h2>
<p className=''>
Pumps
Excavators
Self loaders
</p>
<button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Request Quote</button>
     </div>
     <div className='w-[40%] order-1 sm:w-full '>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
       </Text>
       <Text>
       <div className='bg-[#fff] flex sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto order-1'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px] hidden' />
            <h2 className='text-2xl font-bold hidden featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] text-lg my-2'>Trainings/Manpower supply</h2>
<p className=''>
Skilled and unskilled Manpower supply
Trainings
</p>
<button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Request Quote</button>
     </div>
     <div className='w-[40%] order-2 sm:w-full '>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
       </Text>
       <Text>
       <div className='bg-[#fff] flex sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto order-2'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px] hidden' />
            <h2 className='text-2xl font-bold hidden featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] text-lg my-2'>Marine Logistics</h2>
<p className=''>
Streamline maritime operations with our Marine Logistics Solutions. We offer end-to-end services for efficient cargo transportation, port operations, and supply chain optimization.

Efficient freight and container shipping
Swift handling, customs clearance
Route planning, inventory management
Insurance solutions, regulatory support
</p>
<button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Request Quote</button>
     </div>
     <div className='w-[40%] order-1 sm:w-full '>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
       </Text>
       <Text>
       <div className='bg-[#fff] flex sm:flex-col justify-between px-0 py-0 w-full card'>
     <div className='w-[50%] sm:w-full sm:ml-0 sm:px-4 sm:py-5 ml-20 my-auto order-1'>
     <IoTimeOutline size={100} color='#d81220' className='ml-[-10px] hidden' />
            <h2 className='text-2xl font-bold hidden featured-card-h2'>Spec Review</h2>
            <h2 className='text-[#d81220] text-lg my-2'>Brand communications, Compliance Certification & New media marketing</h2>
<p className=''>
SDK offers Effective Corporate Communication for the Oil and Gas Industries, develop and execute communications and marketing strategies through:

Stakeholder mapping and management
Internal audience engagements
Creating campaigns and content that sticks
Communicating in a regulated market
</p>
<button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Request Quote</button>
     </div>
     <div className='w-[40%] order-2 sm:w-full '>
      <img src={img} alt="" className='w-full' />
     </div>
        </div>
       </Text>
        
    </section>
    </Section>
</div>
  )
}

export default Featured