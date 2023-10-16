import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

  const [btnNameReact,SetBtnNameReact]=useState("Login");

  const onlineStatus = useOnlineStatus();

    return(
        <div className='header'>
         <div className='logo-container'>
           <img
           className='logo'
           src={LOGO_URL}
           /> 
        </div>  
         <div className='nav-items'>
            <ul>
                <li>Online Status :{onlineStatus ? <span style={{color:"green"}}>Online</span>: <span style={{color:"red"}}>Offline</span>}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <button className="login" 
                onClick={()=>{
                    //const btnNameReact="Logout";
                    //SetBtnNameReact(btnNameReact);

                    btnNameReact==="Login" ? SetBtnNameReact("Logout")
                     : SetBtnNameReact("Login") ;
                }}
                >
                {btnNameReact}
                </button>
            </ul>
         </div>
        </div>
    );
}

export default Header;