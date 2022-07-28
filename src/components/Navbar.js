import React from "react";

import "./Navbar.css";

function Navbar() {
    return (

        <div className="header">
            <div id="links">
                <a href="#contact">Contact Us</a>
                <a href="#comment">Comment</a>
                <a href="#reportcase">Report Case</a>
                <a href="#about">About Us</a>
                <a href="#home">Home</a>
            </div>
        </div>
    );

}
export default Navbar;