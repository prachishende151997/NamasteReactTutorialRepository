import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn"
                onClick={()=>{
                    //console.log("button clicked")
                    //Filter logic here
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
              resList.map((restaurant)=> ( <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
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