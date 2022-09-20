import React, { useContext } from "react";
import './SingleProduct.css'
import ReactStars from "react-rating-stars-component";
import './SingleElementShow.css'
import { cartContext } from "../../Context";
import AddToCartButton from "../../Components/AddToCartButton";
import { useNavigate } from "react-router-dom";



const SingleElementShow = ({ data }) => {
  const { title, image, price, description } = data;
  const { item, handleOnClick } = useContext(cartContext);
const navigate = useNavigate()

  const ratingChanged = (rating) =>{
    alert(`You Have Given ${rating} star rating to this product`)
  }
  return (
    <div className="single-product">
    
      <div className="product-image">
        <img src={image} alt="no image" /><br/>
        <ReactStars
        activeColor='black'
        size={30}
        count={5}
        isHalf={true}
        onChange={ratingChanged}
        // rating={rating}
        />
      </div>
      {/* <p>{rating}</p> */}
      <div className="product-content">
        <h2>{title}</h2>
        
        <p2>{description}</p2>
        <p1>&#x20b9; {price}</p1>
        <div className="welcome-button">
        {item.includes(data) ? (
            <AddToCartButton
              value="Go To Cart"
              onClick={() => navigate("/cart")}
            />
          ) : (
            <AddToCartButton
              onClick={() => handleOnClick(data)}
              value="Add To Cart"
            />
          )}
        </div>
        
      </div>

      
    </div>
  );
};

export default SingleElementShow;
