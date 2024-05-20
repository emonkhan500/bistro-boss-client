import React from 'react';
import { FaDollarSign } from "react-icons/fa";

const Showmenu = ({menu}) => {
    const { _id,name,recipe,image,category,price}=menu
    return (
        <div className=''>
            <div className='border border-sky-400 px-3 py-2 flex gap-4
           text-[#737373] '>
                <div><img style={{borderRadius:'0px 200px 200px 200px'}} className='w-28 h-24 ' src={image} alt="" /></div>
                <div>
                    <div className='flex gap-52'>
                        <h1 className='text-xl font-bold'>{name}--</h1>
                       <div className='flex text-[#BB8506] items-center'>
                       <FaDollarSign />
                       <h1 className=' text-xl font-semibold'>
                         {price}</h1>
                       </div>
                    </div>
                    <div>
                        <p>{recipe}</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Showmenu;