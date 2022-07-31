import React from "react";
import fire from "./images/fire.jpg";
import theft from "./images/theft.jpg";
import kidnap from "./images/kidnap.jpg";
import "./Navbar.css";
 import crime from "./images/crime.jpg";


function About(){

    return(
       
        <div className="about">
             <img src={crime} alt='fire report' height={900}/> 
        
        
            
            <p>Crime Reporting System is to provide an avenue for the residents and police to report and respond to crimes reported through this platform.
                click on the link to view the steps required to file a complain online. 
            </p>
            <h3>Check for the crime reported .</h3>
        
            <img src={fire} alt='fire report' height={260}/>
            
            <img src={theft} alt='theft report' height={260}/>
            
            <img src={kidnap} alt='kidnap report'height={260} width={420}/>
            
           </div>
           
           
    );
}
export default About;