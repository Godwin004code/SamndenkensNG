
import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import AboutHero from './AboutHero'
import StrongSide from './StrongSide'
import Counter from '../Global/Counter'
import ContactForm from '../Global/ContactForm'
import img from "../../images/millinmillinconlien.jpg"
import Why from './Why'
import Commit from './Commit'

const AboutPage = () => {
  return (
    <>
    <Nav />
    <AboutHero />
    <section className='w-[60%] sm:w-[80%] xs:w-[90%] my-20 mx-auto'>
      <h2 className='text-center text-4xl font-medium'>About Samdenkens Nig Ltd</h2>
      <p className='text-center mt-4 font-light'>
     
      Welcome to Samdenkens Nig Ltd, a pioneering force in the energy sector, dedicated to transforming energy services for a sustainable future. Established in 2014, Samdenkens has quickly become a leader in the industry, built on the pillars of safety, innovation, and integrity. We are committed to delivering state-of-the-art solutions that meet the complex demands of the global energy market.
      </p>
    </section>
    <section className='w-[60%] sm:w-[80%] xs:w-[90%] my-20 mx-auto'>
      <h2 className='text-center text-4xl font-medium'>Our Vision</h2>
      <p className='text-center mt-4 font-light'>
      Safely Redefining Global Energy Services with excellence, Integrity and  unrival innovative expertise.
      </p>
    </section>
    <StrongSide />
    <Commit />
    <Why />
 <section className='flex sm:flex-col w-[90%] justify-between mx-auto'>
  <div className='w-[50%] sm:w-full'>
    <img src={img} className='h-[400px] object-cover w-full' alt="Join Us on Our Journey" />
  </div>
  <div className='my-auto w-[50%] px-20 sm:w-full sm:mt-5 sm:px-0'>
    <h2 className='font-medium text-2xl'>Join Us on Our Journey</h2>
    <p className='mt-4 font-light'>
    Whether you are a potential client, partner, or future team member, we invite you to join us in our mission to redefine energy services for a safer, more sustainable world. Together, we can create an energy landscape that is accessible, reliable, and environmentally responsible.
    </p>
  </div>
 </section>
     <ContactForm />
     
    <Footer />
    
    </>
  )
}

export default AboutPage