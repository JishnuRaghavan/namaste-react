import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
  const [listOfRestaurant,setListOfRestaurant]  = useState([]);
  const [filteredRestaurents,setFilteredRestaurents]  = useState([]);
  const [searchText,setSearchText]  = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.1926394&lng=76.3869289&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json  = await data.json();
    console.log(json);

    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
    return filteredRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="search-box" />
                <button onClick={()=>{
                  const searchedRes = listOfRestaurant.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurents(searchedRes);
                }}>search</button>
              </div>
              <button className="filter-btn" onClick={()=>{
                const filteredList  = listOfRestaurant.filter(res=>res.info.avgRating > 4.3);
                setFilteredRestaurents(filteredList);
                console.log(filteredList);
              }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                filteredRestaurents.map((restaurant) =>(
                  <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                ))
              }
            </div>
        </div>
    )
}

export default Body;