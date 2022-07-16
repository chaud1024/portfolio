import React from 'react'

const ImageArea = ({ image }) => {
  return (
    <div className="img-area">
        <img src={image} alt="main visual" />
    </div>
  )
}

export default ImageArea