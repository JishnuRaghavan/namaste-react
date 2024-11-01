import { useEffect, useState } from "react";

const User  =   (props)=>{

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
            <h2>Name        :   {props.name}</h2>
            <h3>Location    :   {props.location}</h3>
            <h4>Contact     :   @jishnu.raghavan</h4>
            <button onClick={()=>{
                setCount(count+1);
            }}>increment</button>
        </div>
    )
}

export default User;