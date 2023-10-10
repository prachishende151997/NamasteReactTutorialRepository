import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

const [resInfo, setResInfo] = useState(null);

const { resId }= useParams();

 useEffect(()=>{
    fetchMenu();
 },[]);

 const fetchMenu = async ()=>{
    const data = await fetch (MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
    
    const json = await data.json();
    console.log(json);

    setResInfo(json.data) 
 }

if(resInfo === null) return <Shimmer/>;

const {name,costForTwoMessage,cuisines} =resInfo?.cards[0]?.card?.card?.info ;
 
const{itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards)

 return(
    <div>
        <h1>Restaurants Menu</h1>
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}  - {costForTwoMessage} </p>
        
        <h2>menu</h2>
        <ul>
         {itemCards.map(item => 
         <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100 }
         </li>)}
            {/* <li>{itemCards[0].card.info.name}</li> */}
        </ul>
    </div>
   )
}
export default RestaurantMenu;