import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'


const ItemListContainer = ({greeting, color}) => {
  function addToCart(count){
    console.log('Agregaste ' + count + ' unidades al carrito!')
  }
  return (
    <div>
      <h2 style={{color:color}}>{greeting}</h2>
      <div className="item-list-container">
        <ItemCount stock={5} initial={1} onAdd={addToCart}/>
      </div>
    </div>
  )
}

export default ItemListContainer
