import React from 'react'

const ElectronicsShow = ({items, handleOnClick}) => {
    const {title,image,price,category} = items
  return (
    <div>
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
    </div>
  )
}
export default ElectronicsShow