import React from 'react'
import MarketCard from '../components/MarketCard';
import { marketData } from '../constant/data';

const Market = () => {
  return (
    <div className='flex w-full bg-[#1E0D37]'>
        <div className="p-5 flex max-w-[1200px] w-full mx-auto flex-col" >
            <h1 className='flex mx-auto text-3xl font-bold my-[50px] text-[#A76AFF] uppercase'>Market opportunity</h1>

            <div className="flex justify-around flex-wrap gap-3">
                {
                    marketData.map((data) => (
                        <MarketCard title={data.title} body={data.body}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Market;
