import React, { useContext,useEffect} from "react";
import { cartContext } from "../../Context";
import "./ShowCart.css";


const ShowCart = ({ items }) => {
  const { removeItem, increment, decrement } = useContext(cartContext);
  const { name,brand, id, image, price, quantity } = items
  
  
  return (
    <>

    
       {/* <div className="items-info">
        <div className="product-img">
          <img src={image} alt="product" />
        </div>
        <div className="title">
          <h2>{name}</h2>
        </div>
        <div className="add-minus-quantity">
          <i
            class="fa-solid fa-minus minus"
            onClick={() => decrement(id)}
          ></i>
          <input type="text" placeholder={quantity} />
          <i
            class="fa-solid fa-plus add"
            onClick={() => increment(id)}
          ></i>
          
        </div>
        <div className="price">
          <h3>&#x20b9; {quantity * price}</h3>
        </div>
        <div className="remove-item">
          <i
            class="fa-solid fa-trash remove"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>  */}
      
      <div className="cartShow-card">

        <div className="cart-item-image">
          <img src={image} alt="aa" />
        </div>

        <div className="cart-item-details">
          
              <h3>{brand}</h3>
              <span>{name}</span>
          
        </div>

        <div className="increment-dec-quantity">
        <i
            class="fa-solid fa-minus minus"
            onClick={() => decrement(id)}
          ></i>
          <input type="text" placeholder={quantity} />
          <i
            class="fa-solid fa-plus add"
            onClick={() => increment(id)}
          ></i>
        </div>

        <div className="price">
        <h3>&#x20b9; {quantity * price}</h3>
        </div>

        <div className="remove-item">
        <i
            class="fa-solid fa-trash remove"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>
      
    </>
  );
};

export default ShowCart;
