import React from 'react'
import './Button.css'

const Button = ({id, btnText, action, btnClass}) => {
  return (
      <>
        <button id={id} className={`btn-primary ${btnClass}`}  onClick={action}>{btnText}</button>  
      </>
  )
}

export default Button