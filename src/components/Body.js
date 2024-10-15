import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = ()=>{
  const [ListOfRestaurant,setListOfRestaurant]  = useState(resList);
    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
                const filteredList  = ListOfRestaurant.filter(res=>res.info.avgRating > 4.3);
                setListOfRestaurant(filteredList);
                console.log(filteredList);
              }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                ListOfRestaurant.map((restaurant) =>(
                  <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                ))
              }
            </div>
        </div>
    )
}

export default Body;