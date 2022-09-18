import React from "react";
import { useNavigate } from "react-router-dom";

const PerticularCategoryShow = ({ items, handleOnClick }) => {
  const { title, image, price, category, id } = items;
  const navigate = useNavigate()
  return (
    <div>
      <div className="products">
        <div>
          <h3>{title}</h3>
          <img src={image} alt="" onClick={() => navigate(`product/${title}`)}/>
          <p>&#x20b9; {price}</p>

          <div className="welcome-button">
            <button onClick={() => handleOnClick(items)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerticularCategoryShow;
