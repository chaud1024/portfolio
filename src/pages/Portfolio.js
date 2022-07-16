import React from 'react'

import SubLink from '../components/SubLink'
import SubSummary from '../components/SubSummary'
import TextLine from '../components/TextLine'

import '../components/scss/sub_main.scss'

const Portfolio = () => {
  return (
    <>
    <div className="sub_main">
      <div className="upper">
        <SubLink
          subLinkUrl={`https://naver.com`}
        />
        <SubSummary
          name1={`CDCC - Portfolio`}
          name2={`개인 포트폴리오 CDCC 제작`}
          attr={`기획 기여도 100% \n 디자인 기여도 100% \n 개발 기여도 100%`}
        />
      </div>

      <div className="bottom">
        <div className="project_desc">
          <TextLine
              text={`개인 포트폴리오 CDCC 프로젝트를 진행했습니다.\n
              Jadoo 파트너스 어드민 프로젝트 진행 시 처음으로 프론트 개발에 참여를 했고, 리액트 컴포넌트에 scss를 입히는 작업을 했습니다.\n
              이때의 경험을 바탕으로 리액트를 활용하여 개인 포트폴리오를 새로 재정비하였습니다.
              `}
          />
        </div>
      </div>
      
    </div>
  </>
  )
}

export default Portfolio