import React from 'react';

function Banner() {

  return (
      <div className="banner-container" id='home'>

        <div className="banner-content">

          <h2 className='banner-heading'>Discover your Next Adventure</h2>
          <p className='banner-desc'> Explore our curated selection of destinations and start planning your next adventure today.</p>

          <div className="banner-btn">
          <a href='#footer'><button><span>Book Now</span></button></a>
          </div>
        </div>
      </div>
  );
}

export default Banner;