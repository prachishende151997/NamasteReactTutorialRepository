import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {

//Local State variable - super powerful variable
const [listOfRestaurants , setListOfRestaurants]=useState([]);
const [filteredRestaurant , setFilteredRestaurant] = useState([]);  

//serchTextBox
const [searchText,setSearchText]= useState("");

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


    return listOfRestaurants.length===0 ? (
         <Shimmer/>
         ) :  (
        <div className='body'>
            <div className='filter'>

                {/* building serach functionality */}

                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    />
                    <button onClick={()=>{
                        //filter the restaurant cards and update the UI
                        //searchText
                        console.log(searchText);
                        
                        //now we need to filter out restaurant aacording to search
                        const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        
                         setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>



                <button className="filter-btn"
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


            <div className="res-container">
                 {/* Restaurant Card Component */}
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                -------
                <RestaurantCard resData={resList[9]} /> */}
    
             {
              filteredRestaurant.map((restaurant)=> ( <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
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