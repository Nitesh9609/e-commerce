import React, { createContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "./Components/Reducer";
import { products } from "./Components/Data";

export const cartContext = createContext();

const Context = ({ children }) => {
  // const [products, setProductes] = useState([]);
  
  
  

  // const handleOnClick = (items) => {
  //   return dispatch({
  //     type: 'CART-HANDLER',
  //     payload: items
  //   })
  //   // state.item = [...state.item, items];
  //   // console.log(state.item)
  //   setCart([...cart, items]);
  //   // console.log(cart);
  // };

  

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
      type: 'CART-HANDLER',
      payload: items
    })
    // state.item = [...state.item, items];
    // console.log(state.item)
    setCart([...cart, items]);
    // console.log(cart);
  };

  //   axios.get("https://fakestoreapi.com/products/").then((response) => {
  //     var temp = response.data.map(curr => {
  //       var d = {
  //         id: curr.id,
  //     title: curr.title,
  //     price: curr.price,
  //     description: curr.description,
  //     category: curr.category,
  //     image: curr.image,
  //     rating: curr.rating.rate,
  //     quantity: 1
  //       }
  //       return d
  //     })
  //     // console.log(temp, 'data');
  //     setProductes(temp);
  //  });

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
