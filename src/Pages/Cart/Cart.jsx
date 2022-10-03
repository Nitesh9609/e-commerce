import React, { useState, useContext } from "react";
import "./ShowCart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import ShowCart from "./ShowCart";
import { cartContext } from "../../Context";

const Cart = () => {
  const {item, clearCart, totalItem , totalAmount} = useContext(cartContext);
  console.log(item, 'cartjs');
  
  if(totalItem === 0){
    return(
      <div className="cart-section">


      <div className="cart-items">
        <div className="cart-count">
          <h3>CART IS EMPTY PLEASE SHOP SOMETHING</h3>
          
        </div>
        <div className="cart-c
        ontent">
        <Scrollbars>
              {item.map((curr) => {
                return <ShowCart items={curr} />;
                
              })}


          </Scrollbars>
        </div>
      </div>


      <div className="place-order">
        <p1>PRICE DETAILS ({totalItem} items)</p1>
        <div className="mrp">
          <p2>Total MRP</p2>
          <p3>&#8377; {totalAmount}</p3>
        </div>
        <div className="delivery-charge">
          <p4>Delivery Charge</p4>
          <p5>FREE</p5>
        </div>
        <ul/>
        <div className="total-amount">
          <h3>Total Amount</h3>
          <h3>&#8377; {totalAmount}</h3>
        </div>

        <div className="cart-buttons">
          <button >PLACE ORDER</button>
          <button  onClick={clearCart}>CLEAR CART</button>
        </div>
      </div>
      
    </div>
    )

    
  }


  const loadScript = (src) =>{
    return new Promise((resolve)=>{
      const script = document.createElement('script')
      script.src = src

      script.onload = () =>{
        resolve(true)
      }

      script.onerror = () =>{
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }

  const dispalyRazarpay = async(totalAmount) =>{
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

      if(!res) {
        alert('you are offline....')
        return
      }

      const options = {
        key: 'rzp_test_q4eCdtbRPhS0so',
        currency:'INR',
        amount: totalAmount * 100,
        description: 'Nitesh Cart',

        handler: function (response){
          alert(response.razorpay.razorpay_payment_id)
          alert('payment successfully')
        },

        prefill: {
          name:'Nitesh Cart'
        }

      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
  }


  return (
    


    <div className="cart-section">


      <div className="cart-items">
        <div className="cart-count">
          <h3>My Cart ({totalItem} items)</h3>
          <h3>Total: Rs.{totalAmount}</h3>
        </div>
        <div className="cart-content">
        <Scrollbars>
              {item.map((curr) => {
                return <ShowCart items={curr} />;
                
              })}


          </Scrollbars>
        </div>
      </div>


      <div className="place-order">
        <p1>PRICE DETAILS ({totalItem} items)</p1>
        <div className="mrp">
          <p2>Total MRP</p2>
          <p3>&#8377; {totalAmount}</p3>
        </div>
        <div className="delivery-charge">
          <p4>Delivery Charge</p4>
          <p5>FREE</p5>
        </div>
        <ul/>
        <div className="total-amount">
          <h3>Total Amount</h3>
          <h3>&#8377; {totalAmount}</h3>
        </div>

        <div className="cart-buttons">
          <button onClick={() => dispalyRazarpay(totalAmount)}>PLACE ORDER</button>
          <button  onClick={clearCart}>CLEAR CART</button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
