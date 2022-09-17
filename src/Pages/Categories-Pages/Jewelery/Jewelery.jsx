import React,{useContext} from 'react'
import { cartContext } from '../../../Context'
import JeweleryShow from './JeweleryShow'
const Jewelery = () => {
  const {products, handleOnClick} = useContext(cartContext)

  const menClothing = products.filter(curr => { return curr.category ===  "jewelery"})
return (
  <>
   <div className='all-products'>
   {
          menClothing.map(curr =>{
              return <JeweleryShow items={curr} handleOnClick={handleOnClick}/>
          })
      }
   </div>
      
  </>
)
}

export default Jewelery