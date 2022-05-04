import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const getProducts = () => {
  const myPromise = new Promise((resolve,reject) => {
    const productsList = [
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
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

const ItemListContainer = () => {
  
  function addToCart(count){
    console.log('Agregaste ' + count + ' unidades al carrito!')
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return (
    <div>
      <div className="item-list-container">
        <ItemList items={products} />
      </div>
    </div>
  )
}

export default ItemListContainer
