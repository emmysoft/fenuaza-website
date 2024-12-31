import React from 'react'
import ProductCard from '../components/ProductCard';

const Product = () => {
  return (
    <div className='flex w-full bg-[#fff] my-[50px] flex-col gap-4'>
      <h1 className='uppercase text-center'>Fenuaza Premium Product and Services</h1>
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
