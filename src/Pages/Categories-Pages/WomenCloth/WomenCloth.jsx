import React,{useContext} from 'react'
import { cartContext } from '../../../Context'
import WomenClothShow from './WomenClothShow'

const WomenCloth = () => {
  const {products, handleOnClick} = useContext(cartContext)

    const menClothing = products.filter(curr => { return curr.category ===  "women's clothing"})
  return (
    <>
     <div className='all-products'>
     {
            menClothing.map(curr =>{
                return <WomenClothShow items={curr} handleOnClick={handleOnClick}/>
            })
        }
     </div>
        
    </>
  )
}

export default WomenCloth