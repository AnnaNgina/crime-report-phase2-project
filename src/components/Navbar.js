import React from "react";
import logo from "./images/logo.jpg";
import "./Navbar.css";

function Navbar() {
    return (

        <div className="header">

            <img src={logo} alt='logo' height={60} />

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