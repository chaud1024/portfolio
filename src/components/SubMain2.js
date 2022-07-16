import React from 'react'

import TextLine from './TextLine'

import '../components/scss/sub_main.scss'

const SubMain2 = () => {
  return (
    <>
        <div className="sub_main">

            <div className="bottom">
                <div className="project_desc">
                    <TextLine
                        text={`개인 모바일 디바이스 카메라를 통해 치수를 측정, 해당 데이터 기반으로 한 고객 맞춤 의류를 생산하는 테크노메이드 서비스 웹사이트 제작 프로젝트에 서브 디자이너, 서브 퍼블리셔로 참가했습니다.
                        `}
                    />
                    <TextLine
                        text={`고객 문의 게시판, 후기 게시판, 고객 정보 게시판 디자인 및 퍼블리싱을 담당했습니다.`}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default SubMain2