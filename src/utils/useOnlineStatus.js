import React from 'react'
import { useEffect,useState } from 'react'

const useOnlineStatus = () => {
  const[onlineStatus, setOnlineStatus]=useState(true);

  //condition for checking internet online offline status
  useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    })

  
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })
  },[]);

  return onlineStatus; //boolean value
}

export default useOnlineStatus;