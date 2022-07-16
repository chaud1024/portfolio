import React from 'react'

import '../components/scss/sub_link.scss'

const SubLink = ({ subLinkUrl }) => {
  return (
    <div className="sub_link">
        <a target="_blank"
            rel="noopener noreferrer"
            href={subLinkUrl}
        >
            사이트 보기 
        </a>
    </div>
  )
}

export default SubLink