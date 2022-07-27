import React from "react";
import logo from "./images/logo.jpg";

function Navbar(){
    return(
   
        <div className="header">
            <nav className="navbar">
                <img src={logo} alt='logo'/>
                </nav>
                <div id="links">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#reportcase">Report Case</a>
                <a href="#comment">Comment</a>
                <a href="#contact">Contact Us</a>
            </div>
            </div>
            
            
            
    

    );
    
}
export default Navbar;