import React, {useContext} from 'react'
import { cartContext } from '../../../Context'
import MenClothShow from './MenClothShow'


const MenCloth = () => {
    const {products, handleOnClick} = useContext(cartContext)

    const menClothing = products.filter(curr => { return curr.category ===  "men's clothing"})
  return (
    <>
     <div className='all-products'>
     {
            menClothing.map(curr =>{
                return <MenClothShow items={curr} handleOnClick={handleOnClick}/>
            })
        }
     </div>
        
    </>
  )
}

export default MenCloth