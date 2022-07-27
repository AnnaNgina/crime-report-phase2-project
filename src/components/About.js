import React from "react";
import fire from "./images/fire.jpg";
import theft from "./images/theft.jpg";
import kidnap from "./images/kidnap.jpg";

function About(){
    return(
        <div id ="about">
            <h2>About Us</h2>
            <p>Crime Reporting System is to provide an avenue for the residents and police to report and respond to crimes reported through this platform.
                click on the link to view the steps required to file a complain online. We respond to residence complains immediately.
                We also give an open platform where the citizens can raise their issues about the cinviniences of our service.
                
        
            </p>
            <h3>
            Check for the crime reported .
            </h3>
            <img src={fire} alt='fire report'/>
            <img src={theft} alt='theft report'/>
            <img src={kidnap} alt='kidnap report'/>
           </div>

    );
}
export default About;