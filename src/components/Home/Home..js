import React from 'react'
import Intro from '../Intro/Intro'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import Testimonial from '../Testimonials/Testimonial'
import Works from '../Works/Works'

const Home = () => {
  return (
    <>
   <Intro/>
   <Services/>
   <Works/>
   <Portfolio/>
   <Testimonial/>
    </>
  )
}

export default Home