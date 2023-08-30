import React from "react";
import Footer from "../components/footer";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <div>        
        <Navbar />
      </div>
      <div> <Carousel/> </div>
      <div><Cards/></div> 
      <div><Cards/></div> 
      <div><Cards/></div> 
      <div><Cards/></div> 
      <div><Cards/></div> 
      <div><Cards/></div> 

      <div> <Footer/> </div>

    </div>
  );
};

export default Home;
