import React from 'react'
import AboutHeader from '../sections/AboutHeader';



import { paint2 } from '../constant/gallery';
import { acrylic, flexcoat, gloss, matt, satin, textcoat, vme } from '../constant/products';
import ProductDetailsCard from '../components/ProductDetailsCard';



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
    img: vme,
    product: 'FENUAZA VME',
    size: '4L, 10L, 20L',
    price: '20,000'
  },
  {
    img: textcoat,
    product: 'TEXTURED COAT',
    size: '4L, 10L, 20L',
    price: '20,000'
  },
  {
    img: acrylic,
    product: 'ACRYLIC EMULSION',
    size: '4L, 10L, 20L',
    price: '20,000'
  },
  {
    img: gloss,
    product: 'GLOSS',
    size: '4L, 10L, 20L',
    price: '20,000'
  },
]


const Product = () => {
  return (
    <div className='flex flex-col bg-[lightgray]'>
      <AboutHeader title='Our Products' title1='Fenuaza Product' url={paint2}/>
      <div className="max-w-[1200px] w-full flex flex-wrap mx-auto gap-3 justify-center md:justify-between items-center p-4 my-[50px] lg:my-[100px]">

        <ProductDetailsCard/>
        <ProductDetailsCard/>
        <ProductDetailsCard/>
        <ProductDetailsCard/>
        <ProductDetailsCard/>
        <ProductDetailsCard/>
        <ProductDetailsCard/>
        <ProductDetailsCard/>

      </div>
    </div>
  )
}

export default Product;
