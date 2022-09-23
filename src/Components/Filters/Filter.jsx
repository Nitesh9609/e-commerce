import React, { useState, useContext } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { cartContext } from "../../Context";

const Filter = () => {
  const { searchHandler, categoryHandler, companyHandler, priceHandler,priceValue } =
    useContext(cartContext);
  
  return (
    <div>
      <div>
        <input type="text" placeholder="SEARCH" onChange={ searchHandler} id='search' />
      </div>

      <div>
        <h2>Category</h2>
        <p onClick={categoryHandler} id='category'>Men's</p>
        <p onClick={categoryHandler} id='category'>Women's</p>
        <p onClick={categoryHandler} id='category'>kids</p>
      </div>

      <div>
        <select onChange={companyHandler} id='brands'>
        <option value="none">---- Select Company ------</option>
          <option value="Roadster">Roadster</option>
          <option value="Puma">Puma</option>
          <option value="Nike">Nike</option>
          <option value="Tommy Hilfiger">Tommy Hilfiger</option>
          <option value="Adidas">Adidas</option>
          <option value="AURELIA">AURELIA</option>
          <option value="HERE&NOW">HERE&NOW</option>
          <option value="Vero Moda">Vero Moda</option>
          <option value="Van Heusen">Van Heusen</option>
          <option value="Gini and Jony">Gini and Jony</option>
          <option value="United Colors of Benetton">
            United Colors of Benetton
          </option>
          <option value="CUTECUMBER">CUTECUMBER</option>
          <option value="Bella Moda">Bella Moda</option>
          <option value="Nauti Nati">Nauti Nati</option>
        </select>
      </div>

      <div>
        <h3>Price</h3>
        <h2>&#x20b9; {priceValue}</h2>
        <Box sx={{ m: 3 }} />
        <Slider defaultValue={0} max={1000} onChange={priceHandler} id='price'/>
      </div>
    </div>
  );
};

export default Filter;
