import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../Context'
import SingleElementShow from './SingleElementShow'

const SingleProduct = () => {
    const params = useParams()
    const {products, handleOnClick} = useContext(cartContext)

    const singleProduct = products.filter((ele) => { return ele.name === `${params.name}`})
// console.log(singleProduct);
  return (
    <>
    
        {
            singleProduct.map(currElem => {
                return <SingleElementShow data={currElem} handleOnClick={handleOnClick}/>
            })
        }
    </>
  )
}

export default SingleProduct