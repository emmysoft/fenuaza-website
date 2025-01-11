import React from 'react'
import AboutHeader from '../sections/AboutHeader';
import CallNow from '../components/buttons/CallNow'
import { paint2 } from '../constant/gallery';

import ProductDetailsCard from '../components/ProductDetailsCard';
import Navbar from '../components/Navbar';
import { productData } from '../constant/data';
import { Phone, WhatsApp } from '@mui/icons-material';





const Product = () => {
  return (
    <div className='flex flex-col bg-[lightgray]'>
      <Navbar isHome={false} text1='Home' text2='About' url2='/about' url='/'/>
      <AboutHeader title='Our Products' title1='Fenuaza Product' url={paint2}/>
      <div className="max-w-[1200px] w-full flex flex-wrap mx-auto gap-3 justify-center md:justify-between items-center p-4 my-[50px] lg:my-[100px]">
        {
          productData.map((product) => (
            <ProductDetailsCard product={product}/>
          ))
        }
      </div>

      <div className="flex flex-col gap-4 mb-8">

        <h1 className='text-center text-Blue text-sm lg:text-xl font-[400]'>Want to speak with any of our experts?</h1>
        <div className="flex items-center justify-center gap-6">
          <CallNow text='Call Now' className='text-White bg-DPBtn hover:bg-DBlue hover:text-White'>
            <a href="tel:+2347038996525">
              <Phone style={{color: 'crimson',  cursor: 'pointer'}}  />
            </a>
          </CallNow>

          <CallNow text='WhatsApp' className=' text-White hover:bg-DPBtn bg-DBlue hover:text-White'> 
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

export default Product;
