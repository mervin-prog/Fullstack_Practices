


import React from 'react';
import roomsData from '../roomsData';

function Rooms() {

  return (

    <div id="rooms" className='rooms-container'>

      <div className="container pt-10">

        {roomsData.map((room, index) => (
          <div key={room.id} className={`row ${index % 2 !== 0 ? 'featurette order-md-2' : 'featurette'}`}>

            <div className={`col-md-7 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
            
              <h3 className='room-title'>{room.title}</h3>
              <br />

              <p className="lead">{room.description}</p>

            <p className="rent"><strong>Rent:</strong> {room.rent} /day</p>

            <p className={`availability ${room.availability === 'Available' ? 'text-success' : 'text-danger'}`}>
                <strong>Availability:</strong> {room.availability}
            </p>
              
            </div>

            <div className={`col-md-5 pt-5 pb-5 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>

              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={room.image}
                alt='Room Image'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
