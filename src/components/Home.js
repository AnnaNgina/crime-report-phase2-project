
import React, {useState,useEffect} from "react";
import logo2 from "./images/logo2.jpg";



function Home(){

    const [images, setImages] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/case")
        .then((r) => r.json())
        .then((data) => {
         
          setImages(data.message);
        });
    });
  
    return(
        <div className="charts">
            
            
            <img src={logo2} alt='fire report' height={39}/>
            

             {images.map((image) => (
        <img src={image} key={image} alt="pic"/>
      ))}
        </div>
    )

    }
export default Home;
