import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting, color}) => {
  return (
    <>
      <h2 style={{color:color}}>{greeting}</h2>
    </>
  
    )
}

export default ItemListContainer
