import React from "react";
import './SingleProduct.css'
import ReactStars from "react-rating-stars-component";
import './SingleElementShow.css'
const SingleElementShow = ({ data, handleOnClick }) => {
  const { title, image, price, description, rating } = data;
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
        />
      </div>
      <div className="product-content">
        <h2>{title}</h2>
        
        <p2>{description}</p2>
        <p1>&#x20b9; {price}</p1>
        <div className="welcome-button">
        <button onClick={() => handleOnClick(data)}>Add To Cart</button>
        </div>
        
      </div>

      
    </div>
  );
};

export default SingleElementShow;
