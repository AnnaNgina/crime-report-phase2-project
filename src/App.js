import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Comment from "./components/Comment";
import ReportCase from "./components/ReportCase";
import "./index.css";



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <ReportCase/>
      <Comment/>
      
    </div>
  );
}

export default App;
