import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header    =   ()=>{

    const {setUserName}   =   useContext(UserContext);
    const [btnName,setBtnName]   =   useState('Login')
    const onlineStatus  = useOnlineStatus();

    const handleClick   =   ()=>{
        if(btnName == "Login"){
            setBtnName('Logout')
            setUserName('jishnu')
        }
        else{
            setBtnName('Login');
            setUserName('Default User');
        }
       }

    const data  =   useContext(UserContext);
    console.log(data)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg my-2">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 items-center">
                   <li className="px-4">Online status: {onlineStatus?"✔":"🔴"}</li>                  
                   <li className="px-4"><Link to='/'>Home</Link></li>
                   <li className="px-4"><Link to='/about'>About Us</Link></li>
                   <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                   <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
                   <li className="px-4 font-bold"><Link>{data.loggedInUser}</Link></li>
                   <button onClick={handleClick} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;