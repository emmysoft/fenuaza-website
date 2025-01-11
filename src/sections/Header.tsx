import React from 'react';
import { gallery2 } from '../constant/gallery';
import { WhatsApp, Phone } from '@mui/icons-material';
import CallNow from '../components/buttons/CallNow'



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
          <CallNow text='Call Now' className='bg-White text-Blue hover:bg-DBlue hover:text-White '>
          <a href="tel:+2347038996525">
              <Phone style={{color: 'crimson',  cursor: 'pointer'}}  />
            </a>
          </CallNow>


          <CallNow text='WhatsApp' className='bg-DPBtn text-DPText hover:bg-Bg hover:text-Text'> 
            <a
              href='https://wa.me/2347038996525'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <WhatsApp style={{color: '#fff', cursor: 'pointer'}}  />
            </a>
          </CallNow>

        </div> 
        
        </div>
    </div>
  )
}

export default Header;

