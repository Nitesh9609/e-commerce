import React,{useContext} from 'react'
import ShowProducts from './ShowProducts';
import './Products.css'
import { productContaxt } from '../../App';
const Product = () => {
  const {products, handleOnClick} = useContext(productContaxt)
  
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