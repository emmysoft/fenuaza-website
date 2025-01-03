import React, { FC } from 'react';



type IProduct = {
  img: any;
  price: string;
  product: string;
  size: string;
}



const ProductCard:FC<IProduct> = ({img, price, product, size}) => {
  return (
    
      <div className='flex flex-col rounded-xl shadow-lg h-[340px] w-[300px] md:w-[23.5%] border-[1px] bg-[lightgray]'>
          <div className="h-2/3">
              <img src={img} alt="" className="h-full w-full" />
          </div>
  
          <div className="flex flex-col justify-center p-4 text-Blue">
            <div className="flex items-center gap-2">
              <h4 className='text-lg font-semibold'>Product: </h4>
              <p className='font-[500] text-sm'>{product}</p>
            </div>
  
            <div className="flex items-center gap-2">
              <h4 className='text-lg font-semibold'>Pack Size: </h4>
              <p className='font-[500] text-sm'>{size}</p>
            </div>
  
            <div className="flex items-center gap-2">
              <h4 className='text-lg font-semibold'>Price: </h4>
              <p className='font-[500] text-sm'>N{price}</p>
            </div>
          </div>
      </div>
      
    
  )
}

export default ProductCard;
