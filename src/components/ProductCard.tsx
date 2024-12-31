import React from 'react';

import { gallery } from '../constant/gallery';

const ProductCard = () => {
  return (
    <div className='flex flex-col rounded-xl shadow-lg h-[340px] w-[300px] md:w-[23.5%] border-[1px] bg-[lightgray]'>
        <div className="h-1/2">
            <img src={gallery} alt="" className="h-full w-full" />
        </div>

        <div className=""></div>
    </div>
  )
}

export default ProductCard;
