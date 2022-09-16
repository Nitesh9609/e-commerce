// import React,{useState,useContext, createContext} from 'react'
import axios from 'axios';
import ShowProducts from './ShowProducts';
import './Products.css'
import Cart from '../Cart/Cart';
import { productContaxt } from '../../App';
// import { productContaxt } from '../../Context';

// export const productContaxt = createContext()

const Product = () => {
  const products = useContext(productContaxt)
  // const [products, setProductes] = useState([])
  const [cartItem, setCartItem] = useState([])

  //  axios.get('https://fakestoreapi.com/products/')
  // .then((response) => {
  //   setProductes(response.data);
  // })
  const handleOnClick = (item) =>{
    setCartItem([...cartItem, item]);
  }
  // // console.log(cartItem); 
  // console.log(cartItem);
  return (
    <>
      {/* <productContaxt.Provider value={{products, cartItem}}> */}
        <div className='all-products'>
          {
            products.map(product =>{
            return <ShowProducts items={product} />
            })
          }
          
        </div>
        {/* <Cart/> */}
      {/* </productContaxt.Provider> */}
    </>
  )
}

export default Product