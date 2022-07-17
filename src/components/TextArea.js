import React from 'react'

import './scss/textarea.scss';

const TextArea = ({ title, subtitle, body }) => {
  return (
    <div className="textarea">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">
          {subtitle}
        </h3>
        <p className="body">
          {body}
        </p>
    </div>
  )
}

export default TextArea