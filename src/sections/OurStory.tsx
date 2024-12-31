import React from 'react';
import { gallery10 } from '../constant/gallery';
import { pic } from '../constant/images';



const OurStory = () => {
  return (
    <div className='w-full my-[50px]'>
        <div className="max-w-[1200px] w-full flex gap-3 md:gap-[40px] mx-auto items-center">
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
            <div className="flex items-center text-White bg-Blue hover:bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
              <span className="text-2xl font-extrabold">Call Now!</span>
              <img src={pic} alt="" className="h-9 w-9 rounded-full" />
            </div>

            <div className="flex items-center bg-DPBtn text-DPText hover:bg-Bg hover:text-Text gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
              <span className="text-2xl font-extrabold">WhatsApp!</span>
              <img src={pic} alt="" className="h-9 w-9 rounded-full" />
            </div>

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
