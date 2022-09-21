import React, { useContext, useState } from "react";
import './AddToCartButton.css'
const AddToCartButton = (props) => {
  const [addCart, setAddCart] = useState(false);
  return (
    <div className="addToCartButton" >
    
        <button  onClick={props.onClick}>{props.value}</button>
  
    </div>
  );
};

export default AddToCartButton;
