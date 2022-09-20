import React, { useContext, useState } from "react";

const AddToCartButton = (props) => {
  const [addCart, setAddCart] = useState(false);
  return (
    <div className="welcome-button">
    
        <button onClick={props.onClick}>{props.value}</button>
  
    </div>
  );
};

export default AddToCartButton;
