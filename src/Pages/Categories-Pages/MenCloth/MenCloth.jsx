import React, {useContext} from 'react'
import { cartContext } from '../../../Context'
import MenClothShow from './MenClothShow'
import { useParams } from 'react-router'

const MenCloth = () => {
    const {products, handleOnClick} = useContext(cartContext)
  const params = useParams()
    const menClothing = products.filter(curr => { return curr.category ===  `${params.category}`})
    
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