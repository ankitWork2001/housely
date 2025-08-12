import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Home from "../component/Home";

const Test = () => {
  return (
    <div>
      <Navbar />
      {/* ---home page is here */}
      <Home/> 
      <Footer />
    </div>
  );
};

export default Test;
