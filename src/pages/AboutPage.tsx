import React from 'react'
import AboutHeader from '../sections/AboutHeader';
import OurStory from '../sections/OurStory';
import Contact from '../sections/Contact';
import Vision from '../sections/Vision';
import WhyChooseUs from '../sections/WhyChooseUs';
import ChooseUs from '../sections/ChooseUs';

import { gallery6 } from '../constant/gallery';

const About = () => {
  return (
    <div className=''>
      <AboutHeader title='About' title1='About Us' url={gallery6}/>
      <OurStory/>
      <Vision/>
      <WhyChooseUs/>
      <ChooseUs/>
      <Contact/>
    </div>
  )
}

export default About;
