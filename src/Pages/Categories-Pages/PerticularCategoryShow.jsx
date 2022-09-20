import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../../Components/AddToCartButton";
import { cartContext } from "../../Context";

const PerticularCategoryShow = ({ items}) => {
  const { title, image, price, category, id } = items;
  const { item, handleOnClick } = useContext(cartContext)
  const navigate = useNavigate()
  return (
    <div>
      <div className="products">
        <div>
          <h3>{title}</h3>
          <img src={image} alt="" onClick={() => navigate(`product/${title}`)}/>
          <p>&#x20b9; {price}</p>

          <div className="welcome-button">
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
      </div>
    </div>
  );
};

export default PerticularCategoryShow;
