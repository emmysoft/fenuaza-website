import React from 'react';
import { pic }from '../constant/images';
import { gallery2 } from '../constant/gallery';
import { WhatsApp } from '@mui/icons-material';



const Header = () => {
  return (
    <div 
      style={{ backgroundImage: `linear-gradient(to right, rgba(30, 13, 55, 0.7), rgba(128, 0, 128, 0.7)), url(${gallery2})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: '#000080' }} 
      className='flex-col md:flex-row bg-gradient-to-r from-[#1E0D37] to-purple-800 flex min-h-[100vh] h-max overflow-y-auto uppercase'>
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-7 py-3 px-6 mx-auto w-full">
          <h1 className='text-3xl md:text-5xl lg:text-[50px] text-White animate-flash'>Premium quality at your service!</h1>
          <p className="text-DPBtn animate-flash-slow text-sm md:text-lg mx-auto flex w-full md:w-2/3 text-center">Our paints are eco-friendly formulations that has great coverage and better resistance to wear and tear. We specialize in producing custom made paint that best suit our clients preferences</p>


        <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center bg-White text-Blue hover:bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
              <span className="text-2xl font-extrabold">Call Now!</span>
              <img src={pic} alt="" className="h-9 w-9 rounded-full" />
            </div>

            <div className="flex items-center bg-DPBtn text-DPText hover:bg-Bg hover:text-Text gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
              <span className="text-2xl font-extrabold">WhatsApp!</span>
              <WhatsApp style={{color: '#fff', cursor: 'pointer'}}/>
            </div>

        </div> 
        
        </div>
    </div>
  )
}

export default Header;

