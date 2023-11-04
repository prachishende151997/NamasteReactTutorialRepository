import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

  const [btnNameReact,SetBtnNameReact]=useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} =useContext(UserContext);
  console.log(loggedInUser);

  //Selector(redux) - selector is nothing but hook inside react , we r subscribing to the store using selector.
  const cartItems = useSelector((store)=>store.cart.items);//this cartItems will get data of items 
  console.log(cartItems);

    return(
        <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 '>
         <div className='logo-container'>
           <img
           className='w-56'
           src={LOGO_URL}
           /> 
        </div>  
         <div className='flex items-center '>
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status :{onlineStatus ? <span style={{color:"green"}}>Online</span>: <span style={{color:"red"}}>Offline</span>}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length}items)</Link></li>
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
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
         </div>
        </div>
    );
}

export default Header;