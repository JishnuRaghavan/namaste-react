import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const User  =   (props)=>{

    const {loggedInUser}  =   useContext(UserContext);
    const [count,setCount] =   useState(0);

    useEffect(()=>{
        const timer =   setInterval(() => {
            console.log('namaste react')
        }, 1000);

        return ()=> {
            return clearInterval(timer);
        }
    },[])

    console.log('render');
    return (
        <div className="user-card">
            <h1>count       :   {count}</h1>
            <h2>Name        :   {loggedInUser}</h2>
            <h3>Location    :   {props.location}</h3>
            <h4>Contact     :   @jishnu.raghavan</h4>
            <button onClick={()=>{
                setCount(count+1);
            }}>increment</button>
        </div>
    )
}

export default User;