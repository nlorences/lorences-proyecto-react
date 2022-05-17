import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext'
import './CartItem.css'
import Button from '../Button/Button';

const CartItem = ({item}) => {
  const cartCtx = useContext(CartContext);
  
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <Link to={'/item/' + item?.id}> <img className="cart-item-img" src={item?.pictureUrl} alt="imagen del producto" /> </Link>
        <Link to={'/item/' + item?.id} className="product-link"> <p>{item?.title}</p> </Link>
      </div>
      <div className="cart-item-rigth">
        <div className="cart-item-info">
          <p>Precio unitario</p>
          <p>$ {item?.price}</p>
        </div>
        <div className="cart-item-info">
          <p>Unidades</p>
          <p>{item?.quantity}</p>
        </div>
        <div className="cart-item-info">
          <p>Total</p>
          <p>$ {item?.price * item?.quantity}</p>
        </div>
        <Button btnText="Quitar" btnClass="btn-xs" action={() => cartCtx.deleteById(item.id)}></Button>
      </div>
    </div>
  )
}

export default CartItem