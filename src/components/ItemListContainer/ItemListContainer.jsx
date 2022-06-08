import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';
import db from '../../services/firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';
import Banner from '../Banner/Banner';

const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  const getProducts = async (category) => {
    try {
      const document = category ? query(collection(db, "items"), where('category', '==', category))
                                : collection(db, "items");
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = {id:doc.id, ... doc.data()})
      setProducts(result)
      } catch(err) {
        console.log(err)
      }                        
    }
    useEffect(() => {
      getProducts(categoryId)
    },[categoryId])
  
  return (
    <div>
      <Banner category={categoryId} />
      <div className="item-list-container">
        <ItemList items={products} />
      </div>
    </div>
  )
}

export default ItemListContainer
