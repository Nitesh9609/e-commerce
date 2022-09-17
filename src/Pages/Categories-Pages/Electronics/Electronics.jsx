import React,{useContext} from 'react'
import { cartContext } from '../../../Context'
import ElectronicsShow from './ElectronicsShow'
const Electronics = () => {
  const {products, handleOnClick} = useContext(cartContext)

    const menClothing = products.filter(curr => { return curr.category ===  "electronics"})
  return (
    <>
     <div className='all-products'>
     {
            menClothing.map(curr =>{
                return <ElectronicsShow items={curr} handleOnClick={handleOnClick}/>
            })
        }
     </div>
        
    </>
  )
}

export default Electronics