import React from "react";
import logo3 from "./images/logo3.png";

function Navbar(){
    return(
   
        <div className="header">
            <nav className="navbar">
                <img src={logo3} alt='logo'/>
                </nav>

                <ul className="links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#reportcase">Report Case</a>
                        <ul>
                            
                        <a href="#fire">Fire Report </a>
                        <a href="#theft">Theft Report </a>
                        <a href="#kidnapp">Kidnap Report </a>

                        </ul>
                        
                    </li>
                       
                    <li>
                        <a href="#comment">Comment</a>
                    </li>
                </ul>
        
            </div>
            
            
            
    

    );
    
}
export default Navbar;