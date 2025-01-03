import React from 'react'
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

import { paint, paint1, paint2, paint3 } from '../constant/gallery';



const productData = [
  {
      img: paint1,
      product: 'Fenuaza premium satin',
      size: '4L, 10L, 20L',
      price: '20,000'
  },
  {
    img: paint2,
    product: 'Fenuaza premium gloss',
    size: '4L, 10L, 20L',
    price: '24,000'
},
{
  img: paint3,
  product: 'ECONOMIC EMULSION',
  size: '4L, 10L, 20L',
  price: '20,000'
},
{
  img: paint,
  product: 'TEXTURED MATT',
  size: '4L, 10L, 20L',
  price: '20,000'
},
]



const Product = () => {
  return (
    <div className='flex w-full bg-[#fff] my-[50px] flex-col gap-4 mx-auto max-w-[1200px]' id='product'>
      <h1 className='uppercase text-center  text-Blue hover:text-DPBtn text-4xl'>Fenuaza Premium Products</h1>
      <div className="flex items-end justify-end p-4">
        <Link to='/products' className='text-DPText underline cursor-pointer text-lg font-semibold hover:text-DPBtn'>View All</Link>
      </div>
      <div className="max-w-[1200px] w-full flex flex-wrap mx-auto gap-4 justify-center md:justify-between items-center p-4">
        {
          productData.map((product) => (
            <ProductCard img={product.img} size={product.size} price={product.price} product={product.product} />
          ))
        }
      </div>
    </div>
  )
}

export default Product;
