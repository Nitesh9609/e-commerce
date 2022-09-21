import React, { createContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "./Components/Reducer";
import { products } from "./Components/Data2";

export const cartContext = createContext();

const Context = ({ children }) => {
  // const [products, setProductes] = useState([])
  const [state, dispatch] = useReducer(reducer, {
    item: [],
    quantity: 0,
    totalAmount: 0,
    titalItem: 0,
  });

  const [cart, setCart] = useState(state.item);
  console.log(state.item);

  const handleOnClick = (items) => {
    return dispatch({
      type: "CART-HANDLER",
      payload: items,
    });
  };

 //////////////// AXIOS SECTION ///////////////////
// useEffect(() => {
//  axios.get("https://ecommerce-backend.prithvibytes.repl.co/products/mens").then((response) => {
//     var temp = response.data.products.map(curr => {
//       var d = { 
//     id: curr.id,
//     name: curr.name,
//     type: curr.type,
//     brand: curr.brand,
//     price: curr.price,
//     description: curr.description,
//     category: curr.category,
//     image: curr.image,
//     discount: curr.discount,
//     quantity: 1
//       }
//       return d
//     })
//     console.log(temp, 'data');
//     setProductes(temp);
//  });
// }, [])
  

  /////////////  REMOVE ITEM /////////////

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE-ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "CLEAR-CART",
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    return dispatch({
      type: "CART_ITEM",
    });
  }, [state.item]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        products,
        handleOnClick,
        removeItem,
        clearCart,
        increment,
        decrement,
        cart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default Context;
