import React from 'react'
import './CartWidget.css'
import cart from './cart.png'

const CartWidget = () => {
  return (
    <div className="CartImgContainer">
        <img className="cartImg"
            src={cart}  
            alt="" 
        />
    </div>
  )
}

export default CartWidget