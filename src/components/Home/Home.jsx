
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
import EventSlider from './EventSlider'
import Clients from './Clients'

const Home = () => {

  return (
    <>
    <AnnouncementToolbar />
    <div className='mt-[50px]' />
    <Nav />
    <Hero />
    <section className='w-[70%] sm:w-[80%] md-2:flex-col xs:w-[90%] mx-auto my-20 gap-10 flex'>
      <div className='w-[50%] md-2:w-full box-shadow xs:p-5 p-10'>
      <h2 className='text-center text-4xl text-[#d81220] font-medium'>VISION</h2>
      <p className='text-center font-light mt-4'>
      Safely Redefining Global Energy Services with excellence, Integrity and  unrival innovative expertise.
      </p>
      </div>
      <div className='w-1/2 md-2:w-full xs:p-5 box-shadow p-10'>
      <h2 className='text-center text-4xl text-[#d81220] font-medium'>MISSION</h2>
      <p className='text-center font-light mt-4'>
      Our mission is to advance the global energy industry by providing innovative and sustainable solutions that safeguard the integrity of critical oil and gas assets, empowering people within our community, and strengthen partnerships across stakeholders rooted in trust and respect while ensuring a secure and prosperous energy future in Nigeria.
      </p>
      </div>
    </section>
    
    <About />
<HomeService />
<Clients />
    <h2 className='uppercase text-center text-[#d81220] mt-20 text-xl font-semibold mb-4'>Our Partners</h2>
    <PartnerSlider />
    <Trusted />
    <MadeInNigeria />
    <Events />
    <EventSlider />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Home