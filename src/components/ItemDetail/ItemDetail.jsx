import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    
    function addToCart(count){
        console.log('Agregaste ' + count + ' unidades al carrito!')
    };

    return (
    <>
    <h3 className="item-name">{item?.title}</h3>
    <div className="item-detail">
        <div className="item-detail-left">
            <img className="item-img" src={item?.pictureUrl} alt="Imagen del producto"/>
        </div>
        <div className="item-detail-rigth">
            <p className="item-description">{item?.bodega? item.bodega:''}</p>
            <p className="item-description">{item?.description? item.description:'Producto sin descripción'}</p>
            <div>
                <div className="item-price">Precio $ {item?.price}</div>
                <ItemCount stock={item?.stock} initial={1} onAdd={addToCart}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail