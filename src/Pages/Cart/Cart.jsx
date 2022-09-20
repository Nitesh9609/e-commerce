import React, { useState, useContext } from "react";
import "./Cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import ShowCart from "./ShowCart";
import { cartContext } from "../../Context";

const Cart = () => {
  const {item, clearCart, totalItem , totalAmount} = useContext(cartContext);
  
  console.log(item, 'cartjs');
  return (
    <>
      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-item-count">{totalItem}</span> in your shopping
          list
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curr) => {
                return <ShowCart items={curr} />;
                
              })}


            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>&#x20b9; {totalAmount}</span>
          </h3>
          <button> CHECKOUT</button>
          <br />
          <button onClick={clearCart}>CLEAR CART</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
