import React from 'react'

import TextArea from './TextArea'

const Main = () => {
  return (
    <main className="wrap main">
      <TextArea
        title={`Hi, there🤙`}
        subtitle={`다양한 경험을 즐기는 제너럴리스트이자, 책임감 있는 퍼블리셔 김보라입니다.`}
        body={`새로운 경험과 배움을 즐기고 도전하며,
        더 나은 코드 작성을 위해 끊임없이 고민하고 공부합니다.`}
      />
    </main>
  )
}

export default Main