import React from "react";
import servicesData from "../servicesData";

function Services() {
  return (

    <div id="services" className="services-section">
      <div className="section-container">

        <div className="row">

          {servicesData.map((service, index) => (

            <div key={index} className="col-md-4">
              <div className="card">

                <div style={{ textAlign: "center" }}>
                  <img src={service.image} className="card-img-top" alt={service.alt} />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
