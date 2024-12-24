import React from 'react';
import { pic, header2, paint }from '../constant/images'



const Header = () => {
  return (
    <div style={{

    }} className='flex-col md:flex-row bg-gradient-to-r from-blue-800 to-purple-800 flex min-h-[100vh] h-max overflow-y-auto'>
        <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-7 py-3 px-6">
          <h1 className='text-3xl md:text-5xl text-White animate-flash w-full md:w-[75%]'>Premium quality at your service...</h1>
          <p className="text-[#FFDF37] w-full md:w-[75%] animate-flash-slow text-sm md:text-lg">Our paints are eco-friendly formulations that has great coverage and better resistance to wear and tear. We specialize in producing custom made paint that best suit our clients preferences</p>

          <div className="flex items-center bg-White text-Blue gap-2 p-3 rounded-md shadow-sm cursor-pointer hover:scale-125">
            <span className="text-2xl font-extrabold">Call Now!</span>
            <img src={pic} alt="" className="h-9 w-9 rounded-full" />
          </div>
        </div>
        <div className="hidden flex-1 lg:flex justify-center relative mb-3 mt-5 ">
          <img src={paint} alt="" className="rounded-xl h-[219px] w-[200px] lg:h-[319px] lg:w-[400px] shadow-2xl object-cover" />
          <img src={header2} alt="" className="absolute rounded-xl h-[219px] w-[200px] lg:h-[319px] lg:w-[300px] translate-y-[40%] translate-x-[40%] object-cover" />
        </div>
    </div>
  )
}

export default Header;
