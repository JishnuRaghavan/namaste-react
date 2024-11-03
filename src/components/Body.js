import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurents(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus  = useOnlineStatus();

  if(onlineStatus == false)return<h1>looks like you are offline!!! please check your internet connection.</h1>
    return filteredRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex items-center">
              <div className="search m-4 p-4">
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="border border-solid border-black" />
                <button className="px-4 bg-green-100 mx-4 rounded-lg hover:shadow-lg hover:bg-green-200" onClick={()=>{
                  const searchedRes = listOfRestaurant.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurents(searchedRes);
                }}>search</button>
              </div>
              <div className="m-4 p-4 flex items-center">
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 hover:shadow-lg" onClick={()=>{
                const filteredList  = listOfRestaurant.filter(res=>res.info.avgRating > 4.3);
                setFilteredRestaurents(filteredList);
                console.log(filteredList);
              }}>Top Rated Restaurants</button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              {
                filteredRestaurents.map((restaurant) =>(
                  <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))
              }
            </div>
        </div>
    )
}

export default Body;