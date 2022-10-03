import React, { useContext, useState } from "react";
import ShowProducts from "./ShowProducts";
import "./Products.css";
import { cartContext } from "../../Context";
import Filter from "../../Components/Filters/Filter";
const Product = ({ citem }) => {
  const { filter, products, handleOnClick,search,company,priceValue,category } = useContext(cartContext);
  const [input, setInput] = useState([])
  
   
  return (
    <>
      <div className="filter">
        <Filter />
      </div>
      <div className="all-products">
        { filter.length !==0 ? filter.map((product) => {
          return <ShowProducts items={product} handleOnClick={handleOnClick} />;
        }):
        
        products.map((product) => {
          return <ShowProducts items={product} handleOnClick={handleOnClick} />;
        })}
      </div>
    </>
  );
};

export default Product;
