import React from 'react'
import './CartWidget.css'
import cart from '../../assets/cart.png'

const CartWidget = () => {
  return (
    <div className="CartImgContainer">
      <img className="cartImg"
        src={cart}  
        alt="Carrito de compras" 
      />
    </div>
  )
}

export default CartWidget