import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import './CartWidget.css'
import CartContext from '../../context/CartContext'
import cart from '../../assets/cart.png'
  
const CartWidget = () => {
  const cartCtx = useContext(CartContext)

  return (
    <div className="cart-img-container">
      <NavLink to={'/cart'}>
        <img className="cart-img"
          src={cart}  
          alt="Carrito de compras" 
        />
      </NavLink>
      <div className="cart-count">
        <NavLink to={'/cart'}> {cartCtx.totalCount() > 0 ? cartCtx.totalCount() :""} </NavLink>
      </div>

    </div>
  )
}

export default CartWidget