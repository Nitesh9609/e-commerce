import React,{useContext} from 'react'
import ShowProducts from './ShowProducts';
import './Products.css'
import { cartContext } from '../../Context';
const Product = ({citem}) => {
  const  {products,handleOnClick} = useContext(cartContext)
  
  return (
    <>
      
        <div className='all-products'>
          {
            products.map(product =>{
            return <ShowProducts items={product}  handleOnClick={handleOnClick} />
            })
          }
          
        </div>
        
    </>
  )
}

export default Product