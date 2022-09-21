import "./App.css";
import axios from "axios";
import React, { createContext, useState, useEffect, useReducer } from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage";
import PerticularCategory from "./Pages/Categories-Pages/PerticularCategory";
import SingleProduct from "./Pages/SingleProductPage/SingleProduct";

export const productContaxt = createContext();

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<PerticularCategory />} />
        <Route path="/category/:category/product/:name" element={<SingleProduct/>}/>
        <Route path='/products/product/:name' element={<SingleProduct/>}/>
      </Routes>
    </>
  );
};

export default App;
