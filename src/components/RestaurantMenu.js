import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu    =   ()=>{

    const [resInfo,setResInfo]  =   useState(null);
    const {resId}   =   useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu =   async ()=>{
        const data  =   await fetch(MENU_API+resId);
        const json  =   await data.json();
        console.log(json)
        setResInfo(json.data);
    }

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