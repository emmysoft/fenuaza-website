import React from 'react';
import { motion } from 'framer-motion'
import Header from '../sections/Header';
import About from '../sections/About';
import Market from '../sections/Market';
import Contact from '../sections/Contact';
import Project from '../sections/Project';
import Product from '../sections/Product'

const Home = () => {

  return (
    <motion.div 
        className='flex flex-col'>
      <Header/>
      <About/>
      <Product/>
      <Market/>
      <Project/>
      <Contact/>
    </motion.div>
  )
}

export default Home;
