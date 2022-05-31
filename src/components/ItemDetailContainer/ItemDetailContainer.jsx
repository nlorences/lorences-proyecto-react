import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'
import db from '../../services/firebase';
import {doc, getDoc} from 'firebase/firestore';

const getItem = (id) => {

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
}
  
const ItemDetailContainer = () => {
    const [item,setItem] = useState({});
    const {id} = useParams();

    const getSelectedItem = async(itemId) =>{
        try {
            const document = doc(db, 'items', itemId)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setItem(result)

        }catch(err){
            console.error(err);
        }
    } 

    useEffect(() => {
        getSelectedItem(id)
    },[id])
    
    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
}
  
export default ItemDetailContainer