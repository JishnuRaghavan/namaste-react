import { CDN_URL } from "../utils/constants";

const ItemList  =   ({items})=>    {

    return (
        <div>
            {
                items.map(item=>(
                    <div key={item.card.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex py-10 ">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span>  - ₹{item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 flex flex-col justify-center items-center relative">
                            <img className="w-32 h-32 rounded-xl" src={CDN_URL+item.card.info.imageId}/>
                            <button className="border-solid border-white bg-white rounded-xl mt-[-20px] w-8/12 h-1/4 shadow-lg font-bold text-green-500 hover:bg-slate-300 absolute top-32 ">ADD</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;