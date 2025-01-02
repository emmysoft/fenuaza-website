import React from 'react'
import AboutHeader from '../sections/AboutHeader';
import OurStory from '../sections/OurStory';
import Contact from '../sections/Contact';
import Vision from '../sections/Vision';
import WhyChooseUs from '../sections/WhyChooseUs';

const About = () => {
  return (
    <div className=''>
      <AboutHeader/>
      <OurStory/>
      <Vision/>
      <WhyChooseUs/>
      <Contact/>
    </div>
  )
}

export default About;
