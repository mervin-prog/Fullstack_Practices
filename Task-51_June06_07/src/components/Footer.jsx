
import React from "react";
import { useState } from "react";



function Footer(){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
  
   
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
     
      if (!name || !phone || !email) {
        alert("Please fill in all fields.");
        return;
      }

      else{
        alert('Thank You for Booking:');
      }
      // Reset form fields after submission
      setName('');
      setPhone('');
      setEmail('');
    };
  
    return (
      <div id="footer" className="footer-section">

        <div className="container form-block">
          <form id="form" onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-lg-12 text-center">
                <h3>Book Now</h3>
              </div>
             
              
              <div className="col-lg-4 col-md-4 col-sm-12">
                <span className="input input-contact">
                  Name
                  <input
                    className="input_field"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <span className="input input-contact">
                  Phone
                  <input
                    className="input_field"
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </span>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                Email
                <span className="input input-contact">
                  <input
                    className="input_field"
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </div>
              
              <div className="col-lg-12 col-md-12 col-sm-12 text-center" id="submit">
                <button type="submit" className="btn btn-capsul btn-transparent-white">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Footer;
  