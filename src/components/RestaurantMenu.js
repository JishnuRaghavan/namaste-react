import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu    =   ()=>{

    const {resId}     =   useParams();
    const resInfo   =   useRestaurantMenu(resId);

    return resInfo  === null?<Shimmer />:(
        <div className="menu">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            <h2>Menu</h2>
            <ul>
                {
                    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(item=>(
                        <li key={item.card.info.id}>{item?.card?.info?.name} - ₹{item.card.info.price/100}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;