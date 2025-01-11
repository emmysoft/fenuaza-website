import React, { FC } from 'react';
import { WhatsApp } from '@mui/icons-material';



type IProduct = {
  img: any;
  price: string;
  product: string;
  size: string;
}



const ProductCard:FC<IProduct> = ({img, price, product, size}) => {
  return (
    
      <div className='flex flex-col rounded-xl shadow-lg h-[400px] w-[300px] md:w-[23.5%] border-[1px] bg-[lightgray]'>
          <div className="h-2/3">
              <img src={img} alt="" className="h-full w-full" />
          </div>
  
          <div className="flex flex-col justify-center items-center p-4 text-Blue gap-3">
            <div className="flex items-center gap-2">
              <h4 className='text-lg font-semibold'>Product: </h4>
              <p className='font-[400] text-sm'>{product}</p>
            </div>

            <a 
              href='https://wa.me/2347038996525'
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-White hover:bg-DPBtn bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
              <span className="text-lg font-[400]">WhatsApp</span>
              <WhatsApp style={{color: '#fff', cursor: 'pointer'}}/>
            </a>
  
          </div>
      </div>
      
    
  )
}

export default ProductCard;
