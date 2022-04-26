import React from 'react'
import './CartWidget.css'
import cart from '../../assets/cart.png'

const CartWidget = () => {
  return (
    <div className="cart-img-container">
      <img className="cart-img"
        src={cart}  
        alt="Carrito de compras" 
      />
    </div>
  )
}

export default CartWidget