
import React from 'react'
import Nav from '../Global/Nav'
import Hero from './Hero'
import About from './About'
import MadeInNigeria from './MadeInNigeria'
import Footer from '../Global/Footer'
import Featured from './Featured'
import Trusted from './Trusted'
import ContactForm from '../Global/ContactForm'

const Home = () => {
  return (
    <>
    
    <Nav />
    <Hero />
    <About />
    <Featured />
    <Trusted />
    <MadeInNigeria />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Home