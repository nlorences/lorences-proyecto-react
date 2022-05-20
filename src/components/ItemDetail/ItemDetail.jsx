import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import './ItemDetail.css';


const ItemDetail = ({item}) => {
    const [qProducts, setQProducts] = useState (null);
    const cartCtx = useContext (CartContext)

    function handleOnAdd(quantityToAdd){
        setQProducts(quantityToAdd);
        cartCtx.addToCart(item, quantityToAdd);
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
                <ItemCount stock={item?.stock} initial={1} onAdd={handleOnAdd}/>  
                
                {cartCtx.totalCount() > 0 ?
                <div className="btn-finish-container">
                    <Link to='/cart'> <Button btnText={`Ir al carrito ${cartCtx.totalCount()} Items`}></Button> </Link>
                </div>
                : ""                 
                }
            </div>
        </div>

        
    </div>
    </>
  )
}

export default ItemDetail