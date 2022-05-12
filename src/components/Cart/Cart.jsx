import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {
  const cartCtx = useContext(CartContext)


  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito</h2>
      {cartCtx.products.map((item) => (<CartItem key={item.id} item={item}/>))}    
    </div>
  )
}

export default Cart