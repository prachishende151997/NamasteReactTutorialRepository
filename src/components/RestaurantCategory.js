import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems,setShowIndex}) => {
    console.log(data);

  // this state wont be required as we r receiving state value as a props from parent component 
  // const[showItems , setShowItems]=useState(false);

   const handleClick = () =>{
    setShowIndex();
    //setShowItems(!showItems);
   }

    return(
        <div>
        
          {/* accordian header */}
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>

          {/* accordian Body */}

          {
            showItems &&
          <ItemList items={data.itemCards}/>
          }
          </div>


          

        </div>
    )
}
export default RestaurantCategory;