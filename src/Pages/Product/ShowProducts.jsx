import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../../Components/AddToCartButton";
import { cartContext } from "../../Context";
import "./ShowProducts.css";

const ShowProducts = ({ items }) => {
  const { products, item, handleOnClick, cart } = useContext(cartContext);
  const navigate = useNavigate();
  const { title, image, price, id, quantity } = items;

  return (
    <>
      <div className="products">
        <div>
          <h3>{title}</h3>
          <img
            src={image}
            alt=""
            onClick={() => navigate(`products/${title}`)}
          />
          <p>&#x20b9; {price}</p>
          {item.includes(items) ? (
            <AddToCartButton
              value="Go To Cart"
              onClick={() => navigate("/cart")}
            />
          ) : (
            <AddToCartButton
              onClick={() => handleOnClick(items)}
              value="Add To Cart"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ShowProducts;
