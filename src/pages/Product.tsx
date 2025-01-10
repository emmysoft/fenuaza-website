import React from 'react'
import AboutHeader from '../sections/AboutHeader';



import { paint2 } from '../constant/gallery';

import ProductDetailsCard from '../components/ProductDetailsCard';
import Navbar from '../components/Navbar';
import { productData } from '../constant/data';





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
    </div>
  )
}

export default Product;
