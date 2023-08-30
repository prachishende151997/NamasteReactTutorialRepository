import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {


//normal js variable    
let listOfRestaurantsJS=[
    {
        "info": {
          "id": "54604",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "dp3bbhabqbzpi9lk05la",
          "locality": "Eternity Mall",
          "areaName": "Sitabuldi",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.3,
          "sla": {
            "deliveryTime": 27,
            
          },
      },
    },
    {
        "info": {
          "id": "54605",
          "name": "KFC",
          "cloudinaryImageId": "dp3bbhabqbzpi9lk05la",
          "locality": "Eternity Mall",
          "areaName": "Sitabuldi",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.5,
          "sla": {
            "deliveryTime": 27,
            
          },
      },
    },
    {
        "info": {
          "id": "54606",
          "name": "MCD",
          "cloudinaryImageId": "dp3bbhabqbzpi9lk05la",
          "locality": "Eternity Mall",
          "areaName": "Sitabuldi",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 3.8,
          "sla": {
            "deliveryTime": 27,
            
          },
      },
    }
]

//Local State variable - super powerful variable
const [listOfRestaurants, setListOfRestaurants]=useState(resList);

    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn"
                onClick={()=>{
                    //console.log("button clicked")

                    //Filter logic here
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    console.log(filteredList);

                    setListOfRestaurants(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>


            <div className="res-container">
                 {/* Restaurant Card Component */}
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                -------
                <RestaurantCard resData={resList[9]} /> */}
    
             {
              listOfRestaurants.map((restaurant)=> ( <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
             }
    
             {/* <RestaurantCard
                    resName="KFC"
                    cuisine="Burger,Fast-Food"
                /> */}
                
            </div>
        </div>
    );
    }

    export default Body;