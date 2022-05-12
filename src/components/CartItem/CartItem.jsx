import React from 'react'
import './CartItem.css'

const CartItem = ({item}) => {
  return (
    <div className="cart-item-container">
        <p>{item.title}</p>
        <p className="cart-item-quantity">{item.quantity}</p>
    </div>
  )
}

export default CartItem