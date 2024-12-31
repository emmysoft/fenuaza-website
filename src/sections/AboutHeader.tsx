import React from 'react'
import { gallery6 } from '../constant/gallery';

const AboutHeader = () => {
  return (
    <div style={{ backgroundImage: `linear-gradient(to right, rgba(30, 13, 55, 0.7), rgba(128, 0, 128, 0.7)), url(${gallery6})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundColor: '#000080' }} 
    className='h-[320px]'>
        <div className="flex flex-col items-center justify-center h-full gap-2">
            <h1 className='text-3xl md:text-5xl lg:text-[54px] text-White '>ABOUT US</h1>

            <div className="flex items-center gap-3 md:gap-4 text-White text-sm">
                <span>Fenuaza Integrated services</span>
                <span>|</span>
                <span>ABOUT</span>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader;
