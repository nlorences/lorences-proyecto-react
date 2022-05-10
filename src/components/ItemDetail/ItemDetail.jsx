import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({item}) => {

    const [qProducts, setQProducts] = useState (null);
    
    function addToCart(quantityToAdd){
        setQProducts(quantityToAdd);
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
                {qProducts ?
                <>
                    <div className="btn-finish-container">
                        <div className="item-price">Unidades: {qProducts}. Total $ {qProducts * item.price}</div>
                        <Link to='/cart'> <Button btnText={'Finalizar compra'}></Button> </Link>
                    </div>
                </> :
                <>
                    <div className="item-price">Precio $ {item?.price}</div>
                    <ItemCount stock={item?.stock} initial={1} onAdd={addToCart}/> 
                </>   
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail