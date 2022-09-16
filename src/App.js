import "./App.css";
import axios from "axios";
import React, { createContext, useState,useEffect, useReducer } from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage";
import { reducer } from "./Components/Reducer";
import { product } from "./Components/Data";


export const productContaxt = createContext();



const App = () => {
 
  const [products, setProductes] = useState([]);
  
  
  const handleOnClick = (items) =>{
    state.item = [...state.item, items]
    console.log(state.item);
}

  const [state, dispatch]= useReducer(reducer, {
    item:[],
    quantity:0,
    totalAmount: 0,
    titalItem: 0
  })
  
  
  
  // const apidata =  () =>{
   axios.get("https://fakestoreapi.com/products/").then((response) => {
      var temp = response.data.map(curr => {
        var d = { 
          id: curr.id,
      title: curr.title,
      price: curr.price,
      description: curr.description,
      category: curr.category,
      image: curr.image,
      quantity: 1
        }
        return d
      })
      console.log(temp, 'data');
      setProductes(temp);
   });
  // }
  

  
  
  /////////////  REMOVE ITEM /////////////

  const removeItem = (id) =>{
    return dispatch ({
      type: 'REMOVE-ITEM',
      payload: id
    })
  }

  const clearCart = () =>{
    return dispatch ({
      type: 'CLEAR-CART'
    })
  }

  const increment = (id) =>{
    return dispatch({
      type: 'INCREMENT',
      payload: id
    })
  }

  const decrement = (id) =>{
    return dispatch({
      type: 'DECREMENT',
      payload: id
    })
  }

  useEffect(()=>{
    return dispatch({
      type: 'CART_ITEM'
    })
  },[state.item])
  

  return (
    <>
      <productContaxt.Provider value={{...state,products, handleOnClick, removeItem, clearCart, increment, decrement}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </productContaxt.Provider>
    </>
  );
};

export default App;
