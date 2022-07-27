import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Comment from "./components/Comment";


function App() {
  return (
    <div>
      <Home/>
      <Navbar/>
      <About/>
      <Comment/>
      
    </div>
  );
}

export default App;
