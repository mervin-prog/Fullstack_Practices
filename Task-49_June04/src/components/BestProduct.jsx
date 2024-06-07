import React from "react";

function BestProduct(props){

    return (
        <div className="best-products-container" id="products">
        <div className="card">
            <img className="best-product-image" src={props.image} alt="product image" />
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

export default BestProduct;