import React from 'react'

const Footer = () => {
  return (
    <div className='bg-DBlue min-h-[460px]'>
      <div className="flex flex-col gap-4 justify-center items-center h-full">
         <img src="/icons/log.png" alt="" className="h-[70px] w-[160px] mt-[20px]" />
         
         <div className="flex items-center gap-3 md:gap-7 lg:gap-10 text-White text-xm md:text-2xl">
          <span className='cursor-pointer'>About</span>
          <span>|</span>
          <span className='cursor-pointer'>Contact </span>
          <span>|</span>
          <span className='cursor-pointer'>Privacy Policy </span>
          <span>|</span>
          <span className='cursor-pointer'>Products </span>
         </div>
      </div>
    </div>
  )
}

export default Footer;
