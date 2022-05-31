import React from 'react'
import './Banner.css'

const Banner = ({category}) => {
  return (
    <>
      {
        category ? 
            <div className={`banner banner-${category}`}></div>
            :<div className="banner banner-home"></div>
      }
    </>
    
  )
}

export default Banner