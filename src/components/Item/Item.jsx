import React from 'react';
import './Item.css';

const Item = ({item}) => {
  return (
    <div className="card">
      <img className="product-img" src={item?.pictureUrl} alt="Imagen del producto"/>
      <div className="product-info-container">
        <h3 className="product-name">{item?.title}</h3>
        <div className="product-price">$ {item?.price}</div>
      </div>
    </div>
  )
}

export default Item