import React from 'react'

import TextArea from './TextArea'
import TextLine from './TextLine'
import ImageArea from './ImageArea'

import '../components/scss/home_main.scss'
import MainVisual from '../assets/images/img01.jpg'

const Main = () => {
  return (
    <>
      <div className="layout">
        <TextArea
          title={`Hi, there🤙`}
          subtitle={`다양한 경험을 즐기는 제너럴리스트이자, 책임감 있는 퍼블리셔 김보라입니다.`}
          body={
            <TextLine text={"새로운 경험과 배움을 즐기고 도전하며, \n 더 나은 코드 작성을 위해 끊임없이 고민하고 공부합니다."} />
          }
        />
        <ImageArea image={MainVisual}/>
      </div>
    </>
  )
}

export default Main