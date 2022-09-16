import React,{useContext,useState} from 'react'
import { productContaxt } from './Product'
import './ShowProducts.css'

const ShowProducts = ({items,handleOnClick}) => {
    // const products = useContext(productContaxt)
    const {title,image,price,id,quantity} = items
    
  return (
    <>
    
        
          <div className='products'>
            <div>
            <h3>{title}</h3>
            <img src={image} alt="" />
            <p>&#x20b9; {price}</p>
            
            <div className="welcome-button">
            <button onClick={() =>handleOnClick(items)}>Add To Cart</button>
            </div>
            
            </div>
          
          </div>
         
         
        
      
    </>
     
  )
}

export default ShowProducts