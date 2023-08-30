import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {

//Local State variable - super powerful variable
const [listOfRestaurants, setListOfRestaurants]=useState([]);

useEffect(
  ()=>
  { 
    fetchData();
  }
  ,[])

 const fetchData=async()=>{

  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.131137&lng=79.106856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();

  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  console.log(json);
 }

if(listOfRestaurants.length===0){
  return <Shimmer/>
}


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