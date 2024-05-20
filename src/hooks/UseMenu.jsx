import React, { useEffect, useState } from 'react';

const UseMenu = () => {
    const[menu,setMenu]=useState([])
    console.log(menu)
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data=>{
            setMenu(data)
            setLoading(false)
        })
    },[])
    return [menu,loading]
};

export default UseMenu;