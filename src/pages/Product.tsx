import React from 'react'
import AboutHeader from '../sections/AboutHeader';



import { paint2 } from '../constant/gallery';
import { acrylic, flexcoat, gloss, matt, satin, textcoat, vme } from '../constant/products';
import ProductDetailsCard from '../components/ProductDetailsCard';



const productData = [
  
  {
    img: satin,
    product: 'Fenuaza" Satin',
    desc: 'Readymix premium emulsion with a mild sheen that gives wall and ceiling wipable surface',
    ul1: 'Excellent Opacity',
    ul2: 'Wipable finish',
    ul3: 'Quick drying',
    desc2: 'Apply with brush and roller. Available in 4L and 20L',

  },
  {
    img: textcoat,
    product: 'Fenuaa" Screeding Paint',
    desc: 'Fenuaza Premium Paint SCREEDING is high quality heavily textured, flexible masonry paint.',
    ul1: 'Highly Flexible and Highly breathable.',
    ul2: 'Wipeable finish',
    ul3: 'For interior screeding of walls and ceilings',
    desc2: 'Apply with Roller or Trowel.',

},
{
  img: matt,
  product: 'FENUAZA" MATT',
  desc: 'Textured matt for walls, fecades and celings',
  ul1: 'Allows the wall to breath',
  ul2: 'Prevents the growth of fungi and algae',
  ul3: 'Durable external finish in wet and costal areas',
  desc2: 'Apply with brush and roller. Available in 20L',
},
{
  img: flexcoat,
  product: 'FENUAZA" FLEXCOAT',
  desc: 'Elastic water-proofing paint for exterior and interior use',
  ul1: 'Offers total water impermability',
  ul2: 'Protecting wall from rain',
  ul3: 'Have high crack-bridging ability for surface that shows hairlines ',
  desc2: 'Apply with brush and roller. 10-12 years durability. Available in 4L and 20L',
},
  {
    img: vme,
    product: 'FENUAZA" VME',
    desc: 'Great for walls, fecade and celing',
    ul1: 'Resistant to scuffing and scrubbing',
    ul2: 'Excellent covering power capacity',
    ul3: 'Available in double and standard quality',
    desc2: 'Apply with brush and roller. Available in 4L and 20L',
  },
  {
    img: textcoat,
    product: 'Fenuaza" Textured Coat',
    desc: 'A readymix textured paint for hiding cracks on walls and unleaven surfaces',
    ul1: 'Resistant to fungal and algae growth',
    ul2: 'Fire retardant properties for walls',
    ul3: '',
    desc2: 'Apply with roller. Available in 20L',
  },
  {
    img: acrylic,
    product: 'ACRYLIC EMULSION',
    desc: 'Economy based emulsion for walls and ceilings',
    ul1: 'value for money',
    ul2: 'Suitable for interior walls',
    ul3: 'Good covering power',
    desc2: 'Apply with brush and roller. Available in 4L and 20L',
  },
  {
    img: gloss,
    product: 'GLOSS',
    desc: '',
    ul1: '',
    ul2: '',
    ul3: '',
    desc2: '4L, 10L, 20L',
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
