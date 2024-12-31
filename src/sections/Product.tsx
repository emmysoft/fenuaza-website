import React from 'react'
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='flex w-full bg-[#fff] my-[50px] flex-col gap-4 mx-auto max-w-[1200px]'>
      <h1 className='uppercase text-center  text-Blue hover:text-DPBtn text-4xl'>Fenuaza Premium Products</h1>
      <div className="flex items-end justify-end p-4">
        <Link to='/products' className='text-DPText underline cursor-pointer text-lg font-semibold hover:text-DPBtn'>View All</Link>
      </div>
      <div className="max-w-[1200px] w-full flex flex-wrap mx-auto gap-4 justify-center md:justify-between items-center p-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Product;
