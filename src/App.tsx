import React from 'react';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Header from './sections/Header';
import About from './sections/About';
import Market from './sections/Market';
import Contact from './sections/Contact';


function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Header/>
      <About/>
      <Market/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
