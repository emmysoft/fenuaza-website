import React, { useState } from 'react'

const Navbar = () => {

    const [openMenu, setopenMenu] = useState(false);

    const Menu = () => (
        <>
         <p><a href='#home'>Home</a></p>
         <p><a href='#about'>About</a></p>
         <p><a href='#project'>Project</a></p>
         <p><a href='#services'>Services</a></p>
         <p><a href='#contsct'>Contact</a></p>
        </>
    )


  return (
    <div className='w-full'>
        <div className="flex justify-between items-center p-2">
            <img src="/icons/logo-2.png" alt="" className="h-[50px] w-[160px]" />
            
            <div className="hidden md:flex items-center gap-2">
                <Menu/>
            </div>
            <img src={`${openMenu ? '/icons/x.svg': '/icons/3-vert.svg'}`} alt="" className="h-6 w-5 md:hidden" onClick={() => setopenMenu(!openMenu)}/>
        </div>

        
    </div>
  )
}

export default Navbar;
