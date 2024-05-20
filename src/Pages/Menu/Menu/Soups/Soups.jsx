import React, { useEffect, useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import Cover from '../../../Home/Home/Shared/Cover';
import soups from '../../../../assets/menu/soup-bg.jpg'
import UseMenu from '../../../../hooks/UseMenu';


const Soups = () => {
    const[menu]=UseMenu([])

    const [soupsItem,setSoupsItem]=useState([])
    console.log(soupsItem)
    useEffect((()=>{
        const soupsItems= menu.filter(item =>item.category==='soup')
        setSoupsItem(soupsItems.slice(0,6))
    }),[])
    return (
        <div className='mt-10'>
            
        <Cover img={soups} title='SALADS' des='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'>
        
        </Cover>
        <div className='px-0 lg:px-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
            {
                soupsItem?.map(item =><div className=''>
        
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

export default Soups;