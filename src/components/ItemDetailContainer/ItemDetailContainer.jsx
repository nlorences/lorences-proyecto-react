import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const getItem = () => {
    const myPromise = new Promise((resolve,reject) => {
        const item = {
            id: 1, 
            title: 'Vino Malbec',
            price : 3500,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quaerat vero in magnam molestias dolore labore deleniti maiores fuga reiciendis?', 
            pictureUrl: 'https://rutini.vteximg.com.br/arquivos/ids/156153-1400-1600/Dominio-Malbec.jpg?v=637582435026930000',
            category: 'Vinos Tintos',
            stock: 25
        };
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
    return myPromise;
  }
  
const ItemDetailContainer = () => {
    const [item,setItem] = useState({});

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.error(err);
            });
    },[]);
    
    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
  }
  
  export default ItemDetailContainer