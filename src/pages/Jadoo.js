import React from 'react'

import SubLink from '../components/SubLink'
import SubSummary from '../components/SubSummary'
import TextLine from '../components/TextLine'

import '../components/scss/sub_main.scss'

const Jadoo = () => {
  return (
    <>
    <div className="sub_main">
      <div className="upper">
        <SubLink
          subLinkUrl={`https://naver.com`}
        />
        <SubSummary
          name1={`Jadoo`}
          name2={`기부 앱 자두 기획`}
          attr={`기획 기여도 70%`}
        />
      </div>

      <div className="bottom">
        <div className="project_desc">
          <TextLine
              text={`쇼핑과 기부를 연결하는 기부 앱 자두(Jadoo)의 기획에 참여했습니다.\n
              유저들의 재능기부 캠페인 생성과 참여가 가능토록 기능 정의 및 앱 화면 구현을 위한 화면설계서 제작에 참여했습니다.
              \n
              또한 사회적 기업의 판매 통로로 활용할 파트너스몰 기획에 있어 유저, 판매자, 판매자 어드민 플로우 차트 제작 참여 및 판매자 어드민 웹사이트 기획을 담당했습니다.
              `}
          />
        </div>
      </div>
      
    </div>
  </>
  )
}

export default Jadoo