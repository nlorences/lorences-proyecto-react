import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting, color}) => {
  return (
    <>
    <h2 style={{color:color}}>{greeting}</h2>
    </>
  
    )
}
