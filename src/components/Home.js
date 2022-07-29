
import React, {useState,useEffect} from "react";

function Home(){
    const [images, setImages] = useState([]);

    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random/3")
        .then((r) => r.json())
        .then((data) => {
          // setting state in the useEffect callback
          setImages(data.message);
        },[]);
    });
   
    
    
    return(
        <div className="charts">
             {images.map((image) => (
        <img src={image} key={image} alt="pic"/>
      ))}
        </div>
    )

    }
export default Home;
