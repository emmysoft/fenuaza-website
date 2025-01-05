import React, { FC } from 'react';
import { pic } from '../constant/images';



type IProduct = {
  img: any;
  price: string;
  product: string;
  size: string;
}



const ProductCard:FC<IProduct> = ({img, price, product, size}) => {
  return (
    
      <div className='flex flex-col rounded-xl shadow-lg h-[360px] w-[300px] md:w-[23.5%] border-[1px] bg-[lightgray]'>
          <div className="h-2/3">
              <img src={img} alt="" className="h-full w-full" />
          </div>
  
          <div className="flex flex-col justify-center items-center p-4 text-Blue gap-3">
            <div className="flex items-center gap-2">
              <h4 className='text-lg font-semibold'>Product: </h4>
              <p className='font-[500] text-sm'>{product}</p>
            </div>

            <div className="flex items-center text-White hover:bg-DPBtn bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
              <span className="text-2xl font-extrabold">Call Now!</span>
              <img src={pic} alt="" className="h-9 w-9 rounded-full" />
            </div>
  
            {/* <div className="flex items-center gap-2">
              <h4 className='text-lg font-semibold'>Pack Size: </h4>
              <p className='font-[500] text-sm'>{size}</p>
            </div>
  
            <div className="flex items-center gap-2">
              <h4 className='text-lg font-semibold'>Price: </h4>
              <p className='font-[500] text-sm'>N{price}</p>
            </div> */}
          </div>
      </div>
      
    
  )
}

export default ProductCard;
