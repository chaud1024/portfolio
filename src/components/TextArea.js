import React from 'react'

const TextArea = ({ title, subtitle, body }) => {
  return (
    <div className="textarea">
        <h1 className="text-title">{title}</h1>
        <h3 className="text-subtitle">
          {subtitle}
        </h3>
        <p className="text-body">
          {body}
        </p>
    </div>
  )
}

export default TextArea