import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bestSellers from "./sellersData";
import best from "./best";
import BestProduct from "./components/BestProduct";
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

function App(props){

  const products = bestSellers.map((item) => 
    <Product title={item.title} image={item.image} price={item.price} description={item.description} discount={item.discount}/>
  )

  const bestProducts = best.map((item) => 
    <BestProduct title={item.title} image={item.image} price={item.price} description={item.description} discount={item.discount}/>
  )
  
  return (
    <div className="App">
        <Header />
        <Banner />
        <h2 className="product-heading">Best Sellers</h2>
        <Carousel 
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        autoPlay={props.deviceType !== "desktop" ? true : false}
        autoPlaySpeed={3000}
  >
          {products}
        </Carousel>

        <h2 className="product-heading">Exclusive Products</h2>
        {bestProducts}

        <Footer />
    </div>
  );
}

export default App;