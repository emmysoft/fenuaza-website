import React from 'react'
import { gallery } from '../constant/gallery';
import { useNavigate } from 'react-router-dom';
import { Phone } from '@mui/icons-material';



const About = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#fafafa] my-[50px]" >
    <div className='flex flex-col h-full gap-5 max-w-[1200px] w-full mx-auto'>
      <h1 className='text-center text-3xl font-bold text-Blue uppercase hover:text-DPBtn' id='about'>About Fenuaza premium paints </h1>

      <p className=' w-[80%] lg:w-[50%] text-center flex mx-auto text-Blue text-sm md:text-lg hover:text-DPText'>At Fenuaza premium paintsg, we pride ourselves on delivering superior quality and personalized painting services..</p>

      <div className="flex items-center gap-[100px] p-5 flex-col md:flex-row">

        <div className="flex gap-4 lg:gap-[50px] items-center border-[1px] border-Blue h-max md:h-[360px]">
          <div className="hidden  w-full md:flex justify-center items-center flex-1 h-full">
              <img src={gallery} alt="" className="h-[360px] w-full object-cover" />
          </div>

          <div className="w-full flex-1">
            <div className="flex flex-col gap-[20px] p-4">
                <h4 className='text-3xl'>Give your home the desired beauty</h4>
                <p className='text-sm text-[#333] hover:text-DPBtn'>
                At Fenuaza Premium Paint, we believe in transforming spaces with vibrant colors and lasting quality. Established with a passion for excellence, we have become a trusted name in the paint industry, offering top-tier products designed to inspire creativity and elegance in every stroke.
                
                Our journey began with a simple mission: to provide premium, eco-friendly paints that deliver exceptional coverage, durability, and beauty. From residential homes to large-scale commercial projects, our paints bring life and personality to walls, inside and out.
                </p>

                <div className="flex gap-4 items-center flex-col md:flex-row" onClick={() => navigate('/about')}>
                    <div className="flex items-center text-White bg-Blue hover:bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
                      <span className="text-2xl font-extrabold">Discover more</span>
                    </div>

                    <div className="flex items-center text-White bg-DPBtn hover:bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
                      <span className="text-2xl font-extrabold">Call Now!</span>
                      <Phone style={{color: 'crimson'}} />
                    </div>

                </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;

