import React, { useContext, useState } from "react";
import ShowProducts from "./ShowProducts";
import "./Products.css";
import { cartContext } from "../../Context";
import Filter from "../../Components/Filters/Filter";
const Product = ({ citem }) => {
  const { products, handleOnClick,search,company,priceValue,category } = useContext(cartContext);
  const [input, setInput] = useState([])
  const searchFilter = products.filter((searchFil) =>  searchFil.name.toLowerCase().includes(search))
  const companyFilter = products.filter((searchFil) =>  searchFil.brand === company)
  const priceFilter = products.filter((searchFil) => searchFil.price <= priceValue)
   
  return (
    <>
      <div className="filter">
        <Filter />
      </div>
      <div className="all-products">
        {products.map((product) => {
          return <ShowProducts items={product} handleOnClick={handleOnClick} />;
        })}
      </div>
    </>
  );
};

export default Product;
