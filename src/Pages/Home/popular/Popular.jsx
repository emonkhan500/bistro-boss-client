import React, { useEffect, useState } from 'react';
import Showmenu from './Showmenu';
import UseMenu from '../../../hooks/UseMenu';

const Popular = () => {

const [menu]=UseMenu()
const popularItem= menu.filter(item =>item.category==='popular')
    
    
    // const[menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res =>res.json())
    //     .then(data=>{
    //         const popularItem= data.filter(item =>item.category==='popular')
    //         setMenu(popularItem)
    //     })
    // },[])
    return (
        <div className='mt-20 mb-20'>
            <div className='text-center'>
<p className='text-[#D99904]'>---Check it out---</p>
<hr className='h-4 mt-3 w-60 mx-auto' />
<h1 className='text-3xl font-semibold'>FROM OUR MENU</h1>
<hr className='h-4 mt-3 mb-4 w-60 mx-auto' />
</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
    {
        popularItem.map(men=><Showmenu menu={men}></Showmenu>)
    }
</div>
            
        </div>
    );
};

export default Popular;