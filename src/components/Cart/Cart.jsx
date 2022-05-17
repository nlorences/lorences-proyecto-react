import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import Button from './../Button/Button'
import './Cart.css'

const Cart = () => {
  const cartCtx = useContext(CartContext)


  return (
    cartCtx.totalCount() > 0 ?
      <div className="cart-container">
        <h2 className="cart-title">Carrito</h2>
        <div className="cart-item-container">
          {cartCtx.products.map((item) => (<CartItem key={item.id} item={item}/>))}    
          <div className="cart-checkout">        
          <p>Total de la compra $ {cartCtx.totalAmount()} </p>
          <Button btnText="Finalizar compra"></Button>
          </div>
        </div>
      </div>
    : 
      <div className="cart-empty">
        <h2 className="cart-title">Tu carrito está vacio</h2>
        <Link to="/"> <Button btnText="Volver" btnClass="btn-small"></Button> </Link>
      </div>
  )
}

export default Cart