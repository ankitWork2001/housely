import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Home from "../component/Home";
import DetailsPage from "./components/DetailsPage";

const Test = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <DetailsPage/>
      <Footer />
    </div>
  );
};

export default Test;
