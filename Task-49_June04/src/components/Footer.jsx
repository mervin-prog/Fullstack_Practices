import React from "react";
import Social from "./Social";

function Footer() {
  return (

    <div class="container" id="footer">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
      <div class="col mb-3">
        <h2 style={{letterSpacing: '2.0px'}}>Fashynation</h2>
        <p class="text-body-secondary">© 2024</p>
        <Social />
      </div>
  
      <div class="col mb-3">
  
      </div>
  
      <div class="col mb-3">
        <h5>Shop</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#shop" class="nav-link p-0 text-body-secondary">Shop</a></li>
          <li class="nav-item mb-2"><a href="#products" class="nav-link p-0 text-body-secondary">Products</a></li>
          <li class="nav-item mb-2"><a href="#testimonial" class="nav-link p-0 text-body-secondary">Reviews</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
  
      <div class="col mb-3">
        <h5>Products</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#shop" class="nav-link p-0 text-body-secondary">Shop</a></li>
          <li class="nav-item mb-2"><a href="#products" class="nav-link p-0 text-body-secondary">Products</a></li>
          <li class="nav-item mb-2"><a href="#testimonial" class="nav-link p-0 text-body-secondary">Reviews</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
  
      <div class="col mb-3">
        <h5>Contact</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#shop" class="nav-link p-0 text-body-secondary">Shop</a></li>
          <li class="nav-item mb-2"><a href="#products" class="nav-link p-0 text-body-secondary">Products</a></li>
          <li class="nav-item mb-2"><a href="#testimonial" class="nav-link p-0 text-body-secondary">Reviews</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

    </footer>
  </div>
  );
}

export default Footer;
