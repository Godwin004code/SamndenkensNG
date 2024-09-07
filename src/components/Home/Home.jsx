
import React from 'react'
import Nav from '../Global/Nav'
import Hero from './Hero'
import About from './About'
import MadeInNigeria from './MadeInNigeria'
import Footer from '../Global/Footer'
import Featured from './Featured'
import Trusted from './Trusted'
import ContactForm from '../Global/ContactForm'
import AnnouncementToolbar from '../Global/AnnouncementToolbar'
import PartnerSlider from './PartnerSlider'
import Events from './Events'
import HomeService from './HomeService'

const Home = () => {
  return (
    <>
    <AnnouncementToolbar />
    <div className='mt-[50px]' />
    <Nav />
    <Hero />
    <section className='w-[60%] sm:w-[80%] xs:w-[90%] my-20 mx-auto'>
      <h2 className='text-center text-4xl font-medium'>VISION</h2>
      <p className='text-center mt-4'>
      At Samdenkens, our vision is clear:<b> Safely Redefining Energy Services Globally with Excellence, Integrity, and Unrivaled Innovative Expertise.</b> This vision fuels our continuous innovation and drives us to set new benchmarks in the industry.
      </p>
    </section>
    <section className='w-[60%] sm:w-[80%] xs:w-[90%] my-20 mx-auto'>
      <h2 className='text-center text-4xl font-medium'>MISSION</h2>
      <p className='text-center mt-4'>
      Our mission is to advance the global energy industry by providing innovative and sustainable solutions that safeguard the integrity of critical assets, empower people, and strengthen partnerships rooted in trust and respect while ensuring a secure and prosperous energy future.
      </p>
    </section>
    <About />
<HomeService />
    <h2 className='uppercase text-center text-[#d81220] mt-20 text-xl font-semibold mb-4'>Our Partners</h2>
    <PartnerSlider />
    <Trusted />
    <MadeInNigeria />
    <Events />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Home