import React from 'react';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Header from './sections/Header';


function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
