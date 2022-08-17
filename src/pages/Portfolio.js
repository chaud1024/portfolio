import React from "react";

import SubLink from "../components/SubLink";
import SubSummary from "../components/SubSummary";
import SubDesc from "../components/SubDesc";
import TextLine from "../components/TextLine";
import SubImg from "../components/SubImg";

import "../components/scss/sub_main.scss";
const IMAGE = {
  COMPONENTS: {
    CMPNT: "/assets/img/busanbeachweather/wireframe_components.png",
  },
  WF: {
    PCMO: "/assets/img/busanbeachweather/wireframe.png",
  },
  SCREEN: {
    PCM: "/assets/img/busanbeachweather/screen_pc_main.png",
    PCD: "/assets/img/busanbeachweather/screen_pc_detail.png",
    ERRCMPNT: "/assets/img/busanbeachweather/error_component.png",
    ERRRFS: "/assets/img/busanbeachweather/error_refresh.png",
    LOADING: "/assets/img/busanbeachweather/loading.png",
    MO: "/assets/img/busanbeachweather/screen_mobile.png",
  },
};

const Portfolio = () => {
  return (
    <>
      <div className="sub_main">
        <div className="upper">
          <SubLink subLinkUrl={`https://busanbeachweather.com`} />
          <SubSummary
            name1={`부산해수욕장날씨`}
            name2={`DX Challange 해커톤 참가 프로젝트`}
            attr={`디자인 기여도 100% \n 개발 기여도 40% | React, React-Query, Next.js, Typescript, emotion`}
          />
        </div>

        <div className="bottom">
          <div className="project_desc">
            <TextLine
              text={`2022년 8월 12일~18일 2주동안 웹/앱 서비스를 만드는 DX Challange 해커톤에 참가, 4인으로 구성된 팀에서 작업한 프로젝트입니다.\n
              짧은 기간 내 완성해야 하는 만큼 재사용성을 고려한 아토믹 디자인 시스템을 바탕으로 UI 디자인 및 일러스트를 직접 제작했습니다. \n
              또한 팀 내 개발 리더의 설계를 바탕으로 컴포넌트 제작 및 emotion을 사용한 스타일과 미디어 쿼리 적용을 통한 반응형 웹사이트 구현 및 React Skeleton을 통한 로딩 컴포넌트, 에러 컴포넌트 처리를 담당했습니다.\n
              `}
            />
          </div>
        </div>
      </div>
      <div className="sub_cont cont01">
        <SubDesc
          name1={`1. 디자인 컴포넌트`}
          name2={`재사용성과 간결함에 집중했습니다.`}
          attr={`아토믹 디자인 시스템을 활용한 Atoms, Molecules, Components, Templates, Layouts`}
        />
        <SubImg
          subImage={IMAGE.COMPONENTS.CMPNT}
          alt={`부산해수욕장 날씨 디자인 컴포넌트`}
        />
      </div>
      <div className="sub_cont cont02">
        <SubDesc
          name1={`2. 와이어프레임`}
          name2={`빠른 반응형 구현을 위해 사전에 와이어프레임을 제작했습니다.`}
          attr={`PC버전, iPhone13 그리고 iPhone SE 사이즈를 토대로 한 와이어프레임 배리에이션`}
        />
        <SubImg
          subImage={IMAGE.WF.PCMO}
          alt={`부산해수욕장날씨 사이트 반응형 와이어프레임`}
        />
      </div>
      <div className="sub_cont cont03">
        <SubDesc
          name1={`3. 실제 구현 화면`}
          name2={`emotion을 통해 tsx 컴포넌트별 스타일을 적용했습니다.`}
          attr={`글로벌 스타일과 컴포넌트별 스타일 적용을 통한 효율적인 코드 작성 \n 편안하고 위트있는 UI, UX를 위해 일러스트 직접 제작 \n 로딩중일 때 React Skeleton을 활용하여 UX를 개선 \n 리프레쉬 에러 및 각 컴포넌트별 서버 에러 시 대응화면 제작`}
        />
        <h2>• PC - 메인화면</h2>
        <SubImg
          subImage={IMAGE.SCREEN.PCM}
          alt={`부산해수욕장날씨 사이트 반응형 실제구현화면: 메인화면`}
        />
        <h2>• PC - 상세화면</h2>
        <SubImg
          subImage={IMAGE.SCREEN.PCD}
          alt={`부산해수욕장날씨 사이트 반응형 실제구현화면: 상세화면`}
        />
        <h2>• 컴포넌트 에러화면</h2>
        <SubImg
          subImage={IMAGE.SCREEN.ERRCMPNT}
          alt={`부산해수욕장날씨 사이트 반응형 실제구현화면: 컴포넌트 에러화면`}
        />
        <h2>• 리프레쉬 에러화면</h2>
        <SubImg
          subImage={IMAGE.SCREEN.ERRRFS}
          alt={`부산해수욕장날씨 사이트 반응형 실제구현화면: 리프레쉬 에러화면`}
        />
        <h2>• 스켈레톤을 사용한 컴포넌트 로딩화면</h2>
        <SubImg
          subImage={IMAGE.SCREEN.LOADING}
          alt={`부산해수욕장날씨 사이트 반응형 실제구현화면: 스켈레톤을 사용한 컴포넌트 로딩화면`}
        />
        <h2>• 모바일 사이즈 화면</h2>
        <SubImg
          subImage={IMAGE.SCREEN.MO}
          alt={`부산해수욕장날씨 사이트 반응형 실제구현화면: 모바일 사이즈 화면`}
        />
      </div>
    </>
  );
};

export default Portfolio;
