import React from 'react'
import AboutHeader from '../sections/AboutHeader';



import { paint, paint1, paint2, paint3 } from '../constant/gallery';
import ProductCard from '../components/ProductCard';
import { flexcoat, matt, satin, textcoat } from '../constant/products';



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
  product: 'FENUAZA SMOOTH MATT',
  size: '4L, 10L, 20L',
  price: '20,000'
},
{
  img: flexcoat,
  product: 'FENUAZA  FLEXCOAT',
  size: '4L, 10L, 20L',
  price: '20,000'
},
  {
    img: paint,
    product: 'TEXTURED MATT',
    size: '4L, 10L, 20L',
    price: '20,000'
  },
  {
    img: paint,
    product: 'TEXTURED MATT',
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
    <div className='flex flex-col'>
      <AboutHeader title='Our Products' title1='Fenuaza Product' url={paint2}/>
      <div className="max-w-[1200px] w-full flex flex-wrap mx-auto gap-8 justify-center md:justify-between items-center p-4 my-[50px] lg:my-[100px]">
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
