import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import './Item.css';


const Item = ({item}) => {
  const [qProducts, setQProducts] = useState (null);
  const cartCtx = useContext (CartContext)

  function handleOnAdd(quantityToAdd){
      setQProducts(quantityToAdd);
      cartCtx.addToCart(item, quantityToAdd);
  };

  return (
    <div className="card">
      <Link to={'/item/' + item?.id} className="product-detail-link">
        <img className="product-img" src={item?.pictureUrl} alt="Imagen del producto"/>
      </Link>
      <h3 className="product-name">
        <Link to={'/item/' + item?.id} className="product-detail-link">
          {item?.title}
        </Link>
      </h3>
      <div className="product-price">$ {item?.price}</div>
      <ItemCount stock={item?.stock} initial={1} onAdd={handleOnAdd} classPage="itemList" btnClass="btn-small"/>  

    </div>
  )
}

export default Item