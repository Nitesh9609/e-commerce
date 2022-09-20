import React,{useContext, useState} from 'react'
import ShowProducts from './ShowProducts';
import './Products.css'
import { cartContext } from '../../Context';
const Product = ({citem}) => {
  const  {products,handleOnClick} = useContext(cartContext)
  const [cartItem, setCartItem] = useState([])
 
  return (
    <>
      
        <div className='all-products'>
          {
            products.map(product =>{
            return <ShowProducts items={product} cartItem={cartItem} setCartItem={setCartItem}  handleOnClick={handleOnClick} />
            })
          }
          
        </div>
        
    </>
  )
}

export default Product