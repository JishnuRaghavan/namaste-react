import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{

    const [expand,setExpand]    =   useState(showItems);

    const handleClick   =   ()=>{
        setShowIndex();
        setExpand(!expand);
    }
    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div onClick={handleClick} className="flex justify-between cursor-pointer">
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    {
                        (showItems && expand)? <span>⏫</span> : <span>⏬</span>
                    }
                </div>
                {
                    (showItems && expand) && <ItemList items={data.itemCards} />
                }
            </div>
            {/* Accordion body  */}
        </div>
    )
}

export default RestaurantCategory;