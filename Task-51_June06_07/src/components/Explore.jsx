import React from "react";
import exploreData from "../exploreData";

function Explore() {
  return (

    <div className="explore-section" id="explore">

      <p className="desc-para">                         
        Uncover Unique Experiences, Cultural Treasures, and Unforgettable Adventures by Exploring with Us.
      </p>

      <div className="tours-container">

        {exploreData.map((tour, index) => (

          <div key={index} className="tour-card" data-aos="fade-up">

            <img src={tour.image} className="tour-img" alt={`${tour.name} tour`} />

            <div className="tour-body">
              <h3 className="tour-name">{tour.name}</h3>
              <p className="tour-action">View city</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Explore;
