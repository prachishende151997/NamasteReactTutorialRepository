import React from 'react'
import { useState } from 'react';

const User = (props) => {

    const[count,setCount]=useState(0);

  return (
    <div className='user-card'>
        <h2>Name : {props.name}</h2>
        <h3>Location : Nagpur</h3>
        <h4>Contact : p@gmail.com</h4>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>update count</button>
    </div>
  )
}

export default User ;