import React from 'react';
// import Home1 from './home1.png'



const Header = () => {
  return (
    <div style={{

    }} className='bg-Blue h-full md:min-h-[100vh] flex'>
        <div className="flex-1 flex flex-col items-center justify-center gap-4 py-3 px-6">
          <h1 className='text-5xl text-White'>Premium quality at your service...</h1>
          <p className="text-[#FFDF37]">Our paints are eco-friendly formulations that has great coverage and better resistance to wear and tear. We specialize in producing custom made paint that best suit our clients preferences</p>
        </div>
        <div className="flex-1">Just chill</div>
    </div>
  )
}

export default Header;
