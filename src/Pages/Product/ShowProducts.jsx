import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../../Components/AddToCartButton";
import { cartContext } from "../../Context";
import "./ShowProducts.css";

const ShowProducts = ({ items }) => {
  const { products, item, handleOnClick, cart } = useContext(cartContext);
  const navigate = useNavigate();
  const { brand,name, image, price, discount } = items;

  return (
    <>
      
      <div className="products">
        {item.includes(items) ? (
          <AddToCartButton
            className="addToCartButton"
            value="Go To Cart"
            onClick={() => navigate("/cart")}
          />
        ) : (
          <AddToCartButton
            onClick={() => handleOnClick(items)}
            value="Add To Cart"
          />
        )}
        <div className="product-container">
          <img
            className="product-img"
            src={image}
            alt=""
            onClick={() => navigate(`product/${name}`)}
          />
        </div>
        <div className="product-title">
          <h3>{brand}</h3>
          <p1>{name}</p1>
          <div>
          <p>&#x20b9;{price} <span>-({discount}% off)</span></p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ShowProducts;
