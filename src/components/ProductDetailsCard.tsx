import React from 'react'
import { vme } from '../constant/products';

const ProductDetailsCard = () => {
  return (
    <div className='bg-White h-[340px] w-[23%] my-8 flex flex-col p-3 items-center'>
        <img src={vme} alt="" className="h-[160px] w-[85%] rounded-2xl" />

        <div className="flex flex-col w-[85%] mt-2 text-DBlue text-xs gap-2">
            <h3 className='font-bold'>Fenuaza satin</h3>
            <p className='text-[9px]'>Readymix premium emulsion with a mild sheen that gives wall and ceiling wipable surface </p>
            <ul className='list-disc list-inside text-[9px]'>
                <li>Excellent Opacity</li>
                <li>Wipable finish</li>
                <li>Quick drying</li>
            </ul>
            <span className="text-[8px]">Apply with brush and roller. Available in 4L and 20L </span>
        </div>
    </div>
  )
}

export default ProductDetailsCard;
