import "./App.css";
import axios from "axios";
import React, { createContext, useState,useEffect, useReducer } from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage";
import MenCloth from "./Pages/Categories-Pages/MenCloth/MenCloth";
import WomenCloth from "./Pages/Categories-Pages/WomenCloth/WomenCloth";
import Electronics from "./Pages/Categories-Pages/Electronics/Electronics";
import Jewelery from "./Pages/Categories-Pages/Jewelery/Jewelery";



export const productContaxt = createContext();



const App = () => {
 

  

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Men's-Clothing" element={<MenCloth/>} />
          <Route path="/Women's-Clothing" element={<WomenCloth/>} />
          <Route path="/Electronics" element={<Electronics/>} />
          <Route path="/Jewelery" element={<Jewelery/>} />
        </Routes>
      
    </>
  );
};

export default App;
