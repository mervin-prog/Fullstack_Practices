import React from "react";

function Product(props){

    return (
        <div className="products-container" id="shop">
        <div className="card">
            <img className="product-image" src={props.image} alt="product image" />
            <h2 className="product-title">{props.title}</h2>
            <p className="product-text">{props.description}</p>
            <div className="price-container">
            <p className="product-price">${props.price}</p>
            <p className="product-offer">{props.discount}% Off</p>
            </div>
            <div className="cart-container">
                <button className="product-button"><span>Add to Cart</span></button>
            </div>
         </div>
     </div>
    );
}

export default Product;