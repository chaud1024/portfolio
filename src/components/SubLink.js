import React from 'react'

const SubLink = ({ subLinkUrl }) => {
  const onclick = () => window.open('www.naver.com','_blank')
  
  return (
    <button className="sub_link" onClick={()=>window.open('www.naver.com','_blank')}>
      사이트 qhrl
        {/* <a target="_blank"
            rel="noopener noreferrer"
            href="www.naver.com"
        >
            사이트 보기 
        </a> */}
    </button>
  )
}

export default SubLink