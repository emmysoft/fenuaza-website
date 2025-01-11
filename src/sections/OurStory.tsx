import React from 'react';
import { gallery10 } from '../constant/gallery';
import CallNow from '../components/buttons/CallNow'
import { Phone, WhatsApp } from '@mui/icons-material';



const OurStory = () => {
  return (
    <div className='w-full my-[50px]'>
        <div className="max-w-[1200px] w-full flex gap-3 md:gap-[40px] mx-auto items-center p-4">
            <div className="flex flex-col gap-4 flex-1">
                <h2 className='text-Blue text-3xl md:text-[28px] font-[500] uppercase'>Company Profile</h2>
                <p className='text-[#444] text-sm lg:text-lg'>Fenuaza Premium Paint are products formulated by fenuaza Integrated ser-
                    vices limited. Fenuaza Integrated services limited was established and regis-
                    tered first as an enterprise on 30th November, 2018. <br />
             As the operation of the
                    enterprise grew over the years, it was later registered as incorporation of a
                    private company limited by shares on 22nd of May, 2023 with the registration
                    number 6981481.</p>

                     <p className='text-[#000] text-sm lg:text-lg font-semibold'>
                    Our company is located at No 39, Oloko street, Apatapiti layout, off FUTA
                    SOUTHGATE, AKURE, ONDO STATE.</p>


        <div className="flex flex-col md:flex-row items-center gap-4">

          <CallNow text='Call Now' className='text-White bg-Blue hover:bg-DBlue hover:text-White'>
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

            <div className="hidden flex-1 md:flex justify-center items-center">
                <img src={gallery10} alt="" className="h-[360px] w-[380px] object-cover rounded-lg" />
            </div>
        </div>
    </div>
  )
}

export default OurStory;
