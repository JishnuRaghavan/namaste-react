import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header    =   ()=>{

    const [btnName,setBtnName]   =   useState('Login')
    const onlineStatus  = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                   <li>Online status: {onlineStatus?"✔":"🔴"}</li>                  
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/about'>About Us</Link></li>
                   <li><Link to='/contact'>Contact Us</Link></li>
                   <li><Link to='/grocery'>Grocery</Link></li>
                   <li><Link>Cart</Link></li>
                   <button onClick={()=>{
                    btnName == "Login"? setBtnName('Logout'):setBtnName('Login')
                   }} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;