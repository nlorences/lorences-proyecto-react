import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
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
    </div>
  )
}

export default Item