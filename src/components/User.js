import React, { useEffect } from 'react'
import { useState } from 'react';

const User = (props) => {

    const[count,setCount]=useState(0);
    

    useEffect(()=>{
      //API Calls
    },[]);

  return (
    <div className='user-card m-4 p-4 bg-gray-50 rounded-lg'>
        <h2>Name : {props.name}</h2>
        <h3>Location : Nagpur</h3>
        <h4>Contact : p@gmail.com</h4>
        <h1>count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>update count</button>
        
    </div>
  )
}

export default User ;