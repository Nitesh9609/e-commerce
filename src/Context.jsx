import React, { createContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "./Components/Reducer";
import { products } from "./Components/Data2";

export const cartContext = createContext();

const Context = ({ children }) => {
  // const [products, setProductes] = useState([])

  // ****** FILTER STATE **********//
  const [filter, setFilter] = useState([])
  

  const [state, dispatch] = useReducer(reducer, {
    item: [],
    quantity: 0,
    totalAmount: 0,
    titalItem: 0,
  });

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

  // *********************** FILTERS ************************//

  const searchHandler = (name) => {
    const searchFilter = products.filter((searchFil) =>  searchFil.name.toLowerCase().includes(name))
    setFilter(searchFilter)
  };

  const categoryHandler = (data) => {
    const categotyFilter = products.filter((searchFil) => searchFil.category === data)
    setFilter(categotyFilter)
  };

  const companyHandler = (data) => {
    const companyFilter = products.filter((searchFil) =>  searchFil.brand === data)
    setFilter(companyFilter)
  };

  const priceHandler = (data) => {
    const priceFilter = products.filter((searchFil) => searchFil.price <= data)
    setFilter(priceFilter)
  };

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
        searchHandler,
        categoryHandler,
        companyHandler,
        priceHandler,
        // search,company,priceValue,category,
        
        filter
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default Context;
