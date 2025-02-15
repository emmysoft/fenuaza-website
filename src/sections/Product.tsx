import React from 'react'
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

import { satin, matt, textcoat, flexcoat } from '../constant/products';



const productData = [
  {
    img: satin,
    product: 'FENUAZA  SATIN',
    size: '4L, 10L, 20L',
    price: '20,000'
  },
  {
    img: textcoat,
    product: 'TEXCOAT PAINT',
    size: '4L, 10L, 20L',
    price: '24,000'
},
{
  img: matt,
  product: 'SMOOTH MATT',
  size: '4L, 10L, 20L',
  price: '20,000'
},
{
  img: flexcoat,
  product: 'FENUAZA  FLEXCOAT',
  size: '4L, 10L, 20L',
  price: '20,000'
},
]



const Product = () => {

  const navigate = useNavigate();

  return (
    <div className='flex w-full bg-[#fff] my-[50px] flex-col gap-4 mx-auto max-w-[1200px]' id='product'>
      <h1 className='uppercase text-center  text-Blue hover:text-DPBtn text-4xl'>Fenuaza Premium Products</h1>
      <div className="flex items-end justify-end p-4">
        <span onClick={() => {
          navigate('/products')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }} className='text-DPText underline cursor-pointer text-lg font-semibold hover:text-DPBtn'>View All</span>
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
