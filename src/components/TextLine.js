import React from 'react'

const TextLine = ({ text }) => {
  return (
    <p>
        {text.split("\n").map((txt) => (
            <>
                {txt}
                <br />
            </>
        ))}
    </p>
  )
}

export default TextLine