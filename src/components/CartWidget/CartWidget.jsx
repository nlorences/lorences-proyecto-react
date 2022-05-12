import React from 'react'
import { NavLink } from 'react-router-dom';
import './CartWidget.css'
import cart from '../../assets/cart.png'

const CartWidget = () => {
  return (
    <div className="cart-img-container">
      <NavLink to={'/cart'}>
        <img className="cart-img"
          src={cart}  
          alt="Carrito de compras" 
        />
      </NavLink>
    </div>
  )
}

export default CartWidget