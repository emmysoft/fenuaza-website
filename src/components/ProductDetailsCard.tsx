import React from 'react'



interface IProduct {
    img: string;
    product: string;
    desc: string;
    ul1: string;
    ul2: string;
    ul3: string
    desc2: string
    price: string
}



const ProductDetailsCard = ({product}: {product: IProduct}) => {
  return (
    <div className='bg-White h-[370px] w-full md:w-[23%] my-8 flex flex-col p-3 items-center'>
        <img src={product.img} alt="" className="h-[160px] w-[85%] rounded-2xl" />

        <div className="flex flex-col w-[85%] mt-2 text-DBlue text-xs gap-1.5">
            <h3 className='font-bold'>{product.product}</h3>
            <p className='text-[9px]'>{product.desc}</p>
            <ul className='list-disc list-inside text-[9px]'>
                <li>{product.ul1}</li>
                <li>{product.ul2}</li>
                <li>{product.ul3}</li>
            </ul>
            <span className="text-[8px]">{product.desc2} </span>
            <span className="text-[8px] font-[500]">Price: {product.price}</span>
        </div>
    </div>
  )
}

export default ProductDetailsCard;
