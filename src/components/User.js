import React, { useEffect } from 'react'
import { useState } from 'react';

const User = (props) => {

    const[count,setCount]=useState(0);
    const[count2,setCount2]=useState(1);

    useEffect(()=>{
      //API Calls
    },[]);

  return (
    <div className='user-card'>
        <h2>Name : {props.name}</h2>
        <h3>Location : Nagpur</h3>
        <h4>Contact : p@gmail.com</h4>
        <h1>count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>update count</button>
        <h1>count : {count2}</h1>
    </div>
  )
}

export default User ;