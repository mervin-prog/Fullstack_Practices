import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Explore from "./components/Explore";
import mealsData from "./mealsData";
import Meals from "./components/Meals";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const meals = mealsData.map((item) => 
  <Meals mealTime={item.mealTime} image={item.image} price={item.price} dish={item.dish} discount={item.discount}/>)

function App(props){

  return (
    <>
      <Header />
      <Banner />
      <h2>Our Services</h2>
      <Services />
      <h2>Explore the World</h2>
      <Explore />
      
      <h2 style={{marginTop:'100px'}}>Most Delicious Foods</h2>

      <Carousel 
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        autoPlay={props.deviceType !== "desktop" ? true : false}
        autoPlaySpeed={1000}
  >
          {meals}
        </Carousel>

        <h2 style={{marginTop:'100px'}}>Comfortable & Luxury Accommodations</h2>
        <Rooms/>

        <Footer />
    </>
  );
}

export default App;