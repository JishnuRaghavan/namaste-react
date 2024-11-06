import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurantMenu    =   ()=>{

    const [showIndex,setShowIndex]  =   useState(0)
    const {resId}     =   useParams();
    const resInfo   =   useRestaurantMenu(resId);

    const resData   =   resInfo?.cards[2].card.card.info;
    const itemCards   =   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    
    const categories    =   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]  ==  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return resInfo  === null?<Shimmer />:(
        <div className="menuBody text-center">
            <h1 className="font-bold my-6 text-2xl">{resData.name}</h1>
            <p className="font-bold text-lg">
                {resData.cuisines.join(',')}    -   {resData.costForTwoMessage}
            </p>
            {
                categories.map((category,index)=>{
                    return <RestaurantCategory key={categories?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex ? true:false} setShowIndex={()=>setShowIndex(index)}/>
                })
            }
        </div>
    )
}

export default RestaurantMenu;