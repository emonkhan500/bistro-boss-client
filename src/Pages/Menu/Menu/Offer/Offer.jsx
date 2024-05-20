import React from 'react';
import UseMenu from '../../../../hooks/UseMenu';
import { FaDollarSign } from "react-icons/fa";

const Offer = () => {
    const[menu]=UseMenu([])
    const offerItem= menu.filter(item =>item.category==='offered')
    // console.log(menu)
    return (
        <div className='mt-10 mb-10'>
            <div className='text-center'>
<p className='text-[#D99904]'>---Don't miss---</p>
<hr className='h-4 mt-3 w-60 mx-auto' />
<h1 className='text-3xl font-semibold'>TODAY'S OFFER</h1>
<hr className='h-4 mt-3 mb-4 w-60 mx-auto' />
</div>

<div className='px-0 lg:px-14'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
    {
        offerItem?.map(item =><div className=''>

<div className='border border-sky-400 px-3 py-2 flex gap-4
           text-[#737373] '>
                <div><img style={{borderRadius:'0px 200px 200px 200px'}} className='w-28 h-24 ' src={item?.image} alt="" /></div>
                <div>
                    <div className='flex gap-52'>
                        <h1 className='text-xl font-bold'>{item?.name}--</h1>
                       <div className='flex text-[#BB8506] items-center'>
                       <FaDollarSign />
                       <h1 className=' text-xl font-semibold'>
                         {item?.price}</h1>
                       </div>
                    </div>
                    <div>
                        <p>{item?.recipe}</p>
                    </div>
                </div>
  
  
            </div>

        </div>)
    }
</div>
</div>
<div className='text-center mt-6'><button className='btn btn-outline border-b-4'>ORDER YOUR FAVOURITE FOOD</button></div>

        </div>
    );
};

export default Offer;