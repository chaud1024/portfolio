import React from 'react'

const SubImg = ({ subImage, alt }) => {
  return (
    <div className='sub-img'>
        <img src={subImage} alt={alt} />
    </div>
  )
}

export default SubImg