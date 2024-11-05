import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu    =   ()=>{

    const {resId}     =   useParams();
    const resInfo   =   useRestaurantMenu(resId);
    const itemCards   =   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    
    const categories    =   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]  ==  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories)

    return resInfo  === null?<Shimmer />:(
        <div className="menuBody flex justify-center">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            
        </div>
    )
}

export default RestaurantMenu;