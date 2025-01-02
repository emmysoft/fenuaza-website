import React from 'react'
import AboutHeader from '../sections/AboutHeader';



import { paint, paint1, paint2, paint3 } from '../constant/gallery';
import ProductCard from '../components/ProductCard';



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
