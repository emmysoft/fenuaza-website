import React from 'react';
import Header from '../sections/Header';
import About from '../sections/About';
import Market from '../sections/Market';
import Contact from '../sections/Contact';
import Project from '../sections/Project';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <About/>
      <Market/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home;
