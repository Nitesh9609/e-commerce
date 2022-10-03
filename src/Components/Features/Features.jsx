import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'
import './Features.css'
const Features = () => {
  return (
    <div className='features'>
        <div className='delivery'>
            <i><TbTruckDelivery/></i>
            <h4>Super Fast and Free Delivery</h4>
        </div>
        <div className='shipping'>
            <i><MdSecurity/></i>
            <h4>Non-contact Shipping</h4>
        </div>
        <div className='money'>
            <i><GiReceiveMoney/></i>
            <h4>Money-back Guaranteed</h4>
        </div>
        <div className='payment'>
            <i><RiSecurePaymentLine/></i>
            <h4>Super Secure payment system</h4>
        </div>

    </div>
  )
}

export default Features