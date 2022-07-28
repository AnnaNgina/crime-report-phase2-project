import React, { useEffect, useState } from "react";
//import logo2 from "./images/logo2.jpg";
// const url = "https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300"

function Home() {
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300")
            .then(r => r.json())
            .then(data => setImage(data,image))
           
    }, [])


    return (
        <div className="charts">
            {/* <img src={logo2} alt='logo' height={60} /> */}
            <h1> Crime Report System </h1>
            <img src={image} alt=""/>

        </div>

    );

}
export default Home;
