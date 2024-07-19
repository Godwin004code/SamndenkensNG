import React from 'react'
import Nav from "../Global/Nav"
import Footer from "../Global/Footer"
import ProjectHero from './ProjectHero'
import Featured from '../Home/Featured'
import OurProjects from './OurProjects'

const ProjectPage = () => {
  return (
    <>
    <Nav />
    <ProjectHero />
    <Featured />
    <OurProjects />
    <Footer />
    </>
  )
}

export default ProjectPage