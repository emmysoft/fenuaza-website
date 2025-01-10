import React from 'react'
import AboutHeader from '../sections/AboutHeader';
import OurStory from '../sections/OurStory';
import Contact from '../sections/Contact';
import Vision from '../sections/Vision';
import WhyChooseUs from '../sections/WhyChooseUs';
import ChooseUs from '../sections/ChooseUs';

import { gallery6 } from '../constant/gallery';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className='flex flex-col'>
      <Navbar isHome={false}  text1='Home' text2='Product' url2='/products' url='/'/>
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
