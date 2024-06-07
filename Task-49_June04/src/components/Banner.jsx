import React from 'react';

function Banner() {

  return (
      <div className="banner-container" id='home'>

        <div className="banner-content">

          <h2 className='banner-heading'>Discover your own Fashion</h2>
          <p className='banner-desc'>Explore the latest trends and timeless classics for every occasion and maintain your unique style.</p>

          <div className="shop-btn">
          <button><span>Shop Now</span></button>
          </div>
        </div>

        {/* <img className="image-alt" src="/images/img2.jpg"></img> */}
      </div>
  );
}

export default Banner;
