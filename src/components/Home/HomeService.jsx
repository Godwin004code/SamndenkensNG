import React from 'react'
import img from "../../images/WhatsApp Image 2024-09-08 at 23.26.54.jpeg"
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import procurement from "../../images/covid-19-risk-management-toolkit-1600x800-125.png"
import arch from "../../images/architectural-blueprints.jpg"
import eng from '../../images/maxresdefault.jpg'
import worker from '../../images/worker-refilling-hvac-system-refrigerant_482257-90516.jpeg'
import marine from "../../images/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpeg"
import brand from "../../images/industrial-designers-working-3d-model_23-2149370134.jpeg"

const HomeService = () => {
    return (
        <section className='w-[90%] sm:w-[90%]  mx-auto mt-20 sm:mt-16'>
            <h2 className='uppercase text-center text-[#d81220] text-xl font-semibold mb-4'>our services</h2>

            <section className=' sm:flex-col '>

                <div className=' text-center sm:mt-5 sm:w-full'>
                    <p className='font-light'>At Samdenkens Nigeria Limited, we deliver a comprehensive range of services tailored for the oil and gas industry. Our expertise includes solid and liquid waste management, EPIC services (Engineering, Procurement, Installation, and Construction), specialized electrical and instrumentation solutions. We have handled projects from drilling waste management, chemicals and lubricants supplies, equipment fabrication, refurbishment, and rigorous testing and commissioning projects. Additionally, we provide operations and maintenance support for transportation of oil and gas resources, Floating Production Storage and Offloading (FPSO) vessels, ensuring seamless and efficient energy production</p>
                </div>
            </section>
            <section className='flex sm:flex-col gap-10 justify-between mt-10'>
                <div className='relative w-full'>
                    <img src={img} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
                    <div className='w-full h-full bg-[#00000099] rounded-3xl flex justify-center gap-10 flex-col absolute top-0 p-10'>
                        <h2 className='text-2xl sm:text-base text-white font-bold'>Sustainability: Waste and Environmental Management</h2>

                        <Link to="/service">
                            <button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img src={procurement} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
                    <div className='w-full h-full bg-[#00000099] rounded-3xl flex justify-center gap-10 flex-col absolute top-0 p-10'>
                        <h2 className='text-2xl sm:text-base text-white font-bold'>Procurement and Equipment Supplies</h2>

                        <Link to="/service">
                            <button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img src={arch} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
                    <div className='w-full h-full bg-[#00000099] rounded-3xl flex justify-center gap-10 flex-col absolute top-0 p-10'>
                        <h2 className='text-2xl sm:text-base text-white font-bold'>Construction, Electricals and Instrumentation</h2>

                        <Link to="/service">
                            <button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img src={eng} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
                    <div className='w-full h-full bg-[#00000099] rounded-3xl flex justify-center gap-10 flex-col absolute top-0 p-10'>
                        <h2 className='text-2xl sm:text-base text-white font-bold'>Equipment Hire</h2>

                        <Link to="/service">
                            <button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='flex sm:flex-col gap-10 justify-between mt-10'>
                <div className='relative w-full'>
                    <img src={worker} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
                    <div className='w-full h-full bg-[#00000099] rounded-3xl flex justify-center gap-10 flex-col absolute top-0 p-10'>
                        <h2 className='text-2xl sm:text-base text-white font-bold'>Trainings/Manpower supply</h2>

                        <Link to="/service">
                            <button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img src={marine} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
                    <div className='w-full h-full bg-[#00000099] rounded-3xl flex justify-center gap-10 flex-col absolute top-0 p-10'>
                        <h2 className='text-2xl sm:text-base text-white font-bold'>Marine Logistics</h2>

                        <Link to="/service">
                            <button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img src={brand} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
                    <div className='w-full h-full bg-[#00000099] rounded-3xl flex justify-center gap-10 flex-col absolute top-0 p-10'>
                        <h2 className='text-2xl sm:text-base text-white font-bold'>Brand communications, Compliance Certification & New media marketing</h2>

                        <Link to="/service">
                            <button className='bg-[#d81220] py-3 px-5 mt-5 text-white explore-product-btn'>Learn More</button>
                        </Link>
                    </div>
                </div>
                
            </section>

        </section>
    )
}

export default HomeService