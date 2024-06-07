

import React from "react";

function Meals(props){

    return (
        <div className="meals-container" id="meals">

        <div className="card">

            <img className="meals-image" src={props.image} alt="product image" />

            <h2 className="meals-title">{props.mealTime}</h2>
            <p className="meals-text">{props.dish}</p>
            <div className="price-container">

            <p className="meals-price">${props.price}</p>
            <p className="meals-offer">{props.discount}% Off</p>

            </div>

            <div className="cart-container">
                <button className="meals-button"><span>Add to Menu</span></button>
            </div>

        </div>
    </div>
    );
}

export default Meals;