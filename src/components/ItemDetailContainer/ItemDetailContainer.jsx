import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'

const getItem = (id) => {
    const myPromise = new Promise((resolve,reject) => {
        const productList = [
            {
              id: 1, 
              title: 'Vino Malbec',
              price : 3500, 
              pictureUrl: 'https://rutini.vteximg.com.br/arquivos/ids/156153-1400-1600/Dominio-Malbec.jpg?v=637582435026930000',
              category: 'Vinos Tintos',
              stock: 25
            },
            {
              id: 2, 
              title: 'Vino Merlot',
              price : 4000, 
              pictureUrl: 'https://rutini.vteximg.com.br/arquivos/ids/156031-1400-1600/Rutini-Merlot.jpg?v=637448527247400000',
              category: 'Vinos',
              stock: 10
            },
            {
              id: 3, 
              title: 'Espumante',
              price : 7000, 
              pictureUrl: 'https://rutini.vteximg.com.br/arquivos/ids/156239-1400-1600/Dominio-Extra-Brut.jpg?v=637739185392200000',
              category: 'Espumantes',
              stock: 5
            },
          ];

        const item = productList.filter(item => item.id === parseInt(id));
        
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
  }
  
const ItemDetailContainer = () => {
    const [item,setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.error(err);
            });
    },[id]);
    
    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
  }
  
  export default ItemDetailContainer