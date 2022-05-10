import React from 'react'
import './Button.css'

const Button = ({id, btnText, action}) => {
  return (
      <>
        <button id={id} className="btn-primary" onClick={action}>{btnText}</button>  
      </>
  )
}

export default Button