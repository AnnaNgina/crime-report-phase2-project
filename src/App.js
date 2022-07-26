import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import ReportCase from "./components/ReportCase";
import About from "./components/About";
import Comment from "./components/Comment";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <ReportCase/>
      <About/>
      <Comment/>
    </div>
  );
}

export default App;
