import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './ShowProducts.css'

const ShowProducts = ({items,handleOnClick}) => {
  const navigate = useNavigate()
  const {title,image,price,id,quantity} = items
    
  return (
    <>
    
        
          <div className='products'>
            <div>
            <h3>{title}</h3>
            <img src={image} alt="" onClick={() => navigate(`products/${title}`)}/>
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