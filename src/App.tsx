import React from 'react';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Header from './sections/Header';
import About from './sections/About';
import Market from './sections/Market';


function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Header/>
      <About/>
      <Market/>
      <Footer/>
    </div>
  );
}

export default App;
