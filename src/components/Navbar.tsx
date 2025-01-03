import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openMenu, setopenMenu] = useState(false);

    const Menu = () => (
        <>
         <p className=''>
            <a href='#home'>Home</a>
            <hr className='h-0.5 bg-Blue '/>
        </p>
         <p>
            <a href='#about'>About</a>
            <hr className='h-0.5 bg-Blue 2'/>
         </p>
         <p>
            <a href='#project'>Project</a>
            <hr className='h-0.5 bg-Blue '/>
         </p>
         <p>
            <a href='#product'>Product</a>
            <hr className='h-0.5 bg-Blue '/>
         </p>
         <p>
            <a href='#services'>Services</a>
            <hr className='h-0.5 bg-Blue '/>
         </p>
         <p>
            <a href='#contact'>Contact</a>
            <hr className='h-0.5 bg-Blue '/>
         </p>
        </>
    )


  return (
    <div className='w-full relative mb-[70px]' id='home'>
        <div className="flex justify-between items-center py-3 px-2 border-b-2 fixed top-0 right-0 left-0 z-[999] bg-[#fff]">
        <div className="flex flex-1">
            <Link to='/'>
                <img src="/icons/logo-2.png" alt="" className="h-[50px] w-[160px]" />
            </Link>
        </div>
            
            <div className="hidden md:flex items-center justify-center md:gap-4 lg:gap-8 font-semibold text-[#031B34] px-3 bg-white">
                <Menu/>

                <div className="flex items-center gap-2 border-[1px] px-4 py-2 rounded-sm border-[#000080] cursor-pointer">
                    <span className='text-[#000080]'>Call Now</span>
                    <img src="/icons/arrow-right.png" alt="" className="" />
                </div>
            </div>

            <div className="block md:hidden">
                {!openMenu ?

                <RiMenu3Line color='#000080' size={30} onClick={()=> setopenMenu(true)}/>:
                <RiCloseLine color='#000080' size={30} onClick={()=> setopenMenu(false)}/>
                }
            </div>

        </div>
        { openMenu &&
            <div className="flex flex-col md:hidden text-Blue bg-White items-end justify-end gap-7 font-semibold w-1/2 text-[16px] absolute p-3 shadow-lg rounded-lg top-10 right-7 animate-bounce-reset z-[9999]" onClick={() => setopenMenu(false)}>
                <Menu/>
            </div>
        }
    </div>
  )
}

export default Navbar;
