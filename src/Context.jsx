import React,{createContext, useState, useReducer, useEffect} from 'react'
import axios from 'axios';
import { reducer } from './Components/Reducer';
import { products } from './Components/Data';

export const cartContext = createContext()

const Context = ({children}) => {
  const [products, setProductes] = useState([]);
  
  
  // console.log(cart);

  const handleOnClick = (items) =>{
    state.item = [...state.item, items]
    console.log(state.item)
    
  }
  
 let initialState = {
    item:[],
    quantity:0,
    totalAmount: 0,
    titalItem: 0
  }

  const [state, dispatch]= useReducer(reducer, initialState)
  
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
    // console.log(temp, 'data');
    setProductes(temp);
 });


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
    <cartContext.Provider value={{...state,products, handleOnClick, removeItem, clearCart, increment, decrement}}>
      {children}
    </cartContext.Provider>
  )
}

export default Context