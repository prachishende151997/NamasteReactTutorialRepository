import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

//Local State variable - super powerful variable
const [listOfRestaurants , setListOfRestaurants]=useState([]);
const [filteredRestaurant , setFilteredRestaurant] = useState([]);  

//serchTextBox
const [searchText,setSearchText]= useState("");

const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);

console.log("Body Rendered" , listOfRestaurants);

useEffect(
  ()=>
  { 
    fetchData();
  }
  ,[])

 const fetchData=async()=>{

  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.131137&lng=79.106856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();

  console.log(json);

  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}

 //Conditional Rendering
// if(listOfRestaurants.length===0){
//   return <Shimmer/>
// }


const onlineStatus= useOnlineStatus();

if(onlineStatus===false)
return<h1>No internet , please check your internet connection </h1>


    return listOfRestaurants.length===0 ? (
         <Shimmer/>
         ) :  (
        <div className='body'>
            <div className='filter flex'>

                {/* building serach functionality */}

                <div className="search m-4 p-4">
                    <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        //filter the restaurant cards and update the UI
                        //searchText
                        console.log(searchText);
                        
                        //now we need to filter out restaurant aacording to search
                        const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        
                         setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>



                <div className="search m-4 p-4 flex items-center">
                <button className="px- 4 py-2 bg-gray-100 rounded-lg"
                onClick={()=>{
                    //console.log("button clicked")

                    //Filter logic here
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    console.log(filteredList);

                    setFilteredRestaurant(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
                </div>
            </div>


            <div className="flex flex-wrap">
                 {/* Restaurant Card Component */}
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                -------
                <RestaurantCard resData={resList[9]} /> */}
    
             {
             filteredRestaurant.map((restaurant)=> ( 
              <Link  
              key={restaurant.info.id} 
               to={"/restaurants/"+ restaurant.info.id}
              >
                {/* If restaurant is promoted(or isOpen) then add open or promoted label to it */}
                { restaurant.info.isOpen ? (
                     <RestaurantCardPromoted resData={restaurant}/> )
                     : (
                     <RestaurantCard  resData={restaurant}/>
                     )
                }
              </Link>
              ))
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