import React from 'react';
import Header from '../sections/Header';
import About from '../sections/About';
// import Market from '../sections/Market';
import Contact from '../sections/Contact';
import Project from '../sections/Project';
import Product from '../sections/Product'
import ChooseUs from '../sections/ChooseUs';
import Navbar from '../components/Navbar';


const Home = () => {

  return (
 
    <div 
        className='flex flex-col'>
        <Navbar isHome={true}/>
      <Header/>
      <About/>
      <Product/>
      <ChooseUs/>
      {/* <Market/> */}
      <Project/>
      <Contact/>
    </div>

  )
}

export default Home;
