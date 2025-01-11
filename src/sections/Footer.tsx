import React from 'react';
import { Facebook, WhatsApp, Phone, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='bg-DBlue'>
      <div className="flex flex-col gap-4 justify-center items-center h-full p-4">
         <img src="/icons/log.png" alt="" className="h-[70px] w-[160px] mt-[20px]" />
         
         <div className="flex items-center gap-2 md:gap-7 lg:gap-10 text-White text-xm md:text-2xl">
          <span className='cursor-pointer'>About</span>
          <span>|</span>
          <span className='cursor-pointer'>Contact </span>
          <span>|</span>
          <span className='cursor-pointer'>Privacy Policy </span>
          <span>|</span>
          <span className='cursor-pointer'>Products </span>
         </div>

         <div className="flex items-center gap-5 lg:gap-7">
          <a
            href="https://www.facebook.com/akinwumijuoluwadunni.esther?mibextid=ZbWKwL"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Facebook style={{color: '#fff', cursor: 'pointer'}}/>
          </a>
          <a 
          href="https://www.instagram.com/stories/fenuazapremiumpaints/3542120832690623522?utm_source=ig_story_item_share&igsh=NjZiM2M3MzIxNA==" 
          target="_blank" 
          rel="noopener noreferrer"
           className="flex items-center gap-3 text-White">
            <Instagram style={{color: '#fff', cursor: 'pointer'}}/>
           </a>
          <a 
          href="https://wa.me/+2347038996525" 
          target="_blank" 
          rel="noopener noreferrer"
           className="flex items-center gap-3 text-White">
            <WhatsApp style={{color: '#fff', cursor: 'pointer'}}/>
           </a>
         </div>

         <div className="flex items-center flex-col gap-4 mt-6">
           <p className='text-xs md:text-sm text-White text-center'>Main Office - No 39, Oloko street, Apatapiti layout, off FUTA SOUTHGATE, AKURE, ONDO STATE.</p>
           <p className='text-xs md:text-sm text-White'>fenuazaintegratedserviceslimited@gmail.com</p>
         </div>

         <div className="flex flex-col ">
          <div className="flex items-center gap-3 text-White">
              <Phone/>
              <span>+234 7038996525</span>
          </div>

          <a 
          href="https://wa.me/+2347038996525" 
          target="_blank" 
          rel="noopener noreferrer"
           className="flex items-center gap-3 text-White">
              <Phone/>
              <span>+234 9033767859</span>
          </a>
         </div>


         <span className=' text-White text-sm my-4 text-center'>© 2025 Fenuaza Premium Paints – by Fenuaza Integrated Services </span>

      </div>
    </div>
  )
}

export default Footer;
