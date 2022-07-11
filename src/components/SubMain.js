import React from 'react'

import TextArea from './TextArea'
import TextLine from './TextLine'

const SubMain = () => {
  return (
    <>
        <div className="submain">
            <div className="upper">
                <div className="link">
                    <a target="_blank"
                        rel="noreferrer"
                        href="http://www.naver.com"
                    >
                        사이트 보기 
                    </a>
                </div>
                <div className="project_summary">
                    <TextArea
                        title={`Technomade`}
                        subtitle={`테크노메이드 서비스 웹사이트`}
                        body={
                            <TextLine
                                text={`디자인 기여도 90% \n 퍼블리싱 기여도 95%`}
                            />
                        }
                    />
                </div>
            </div>
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

export default SubMain