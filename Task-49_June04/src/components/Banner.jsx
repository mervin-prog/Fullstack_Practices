import React from 'react';

function Banner() {

  return (
    <div className="banner">
      <div className="banner-container">

        <div className="banner-content">

          <h2 className='banner-heading'>Discover your own Fashion</h2>
          <p className='banner-desc'>Explore the latest trends and timeless classics for every occasion and maintain your unique style.</p>

          <span className="custom-btn">
          <button><span>Shop Now</span></button>
          </span>
        </div>

        <img className="image-alt" src="/images/img2.jpg"></img>
      </div>
    </div>
  );
}

export default Banner;
