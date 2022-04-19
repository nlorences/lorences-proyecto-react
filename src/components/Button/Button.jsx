import React from 'react'

export const Button = ({texto, color}) => {
  // const { color,texto} = props; se puede desestructurar asi tambien
  return (
    <>
    <input type="text" />
    <button style={{color:color}}>{texto ? texto : 'default'}</button>
    </>
  )
}
