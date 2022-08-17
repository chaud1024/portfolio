import React from "react";

import SubLink from "../components/SubLink";
import SubSummary from "../components/SubSummary";
import TextLine from "../components/TextLine";
import SubImg from "../components/SubImg";

import "../components/scss/sub_main.scss";
const IMAGE = {
  STRUCTURE: {
    S_ADMIN: "/assets/img/structure_admin.png",
  },
  COLOR: {
    C_ADMIN: "/assets/img/colorchart_admin.png",
  },
};

const TechnomadeAdmin = () => {
  return (
    <>
      <div className="sub_main">
        <div className="upper">
          <SubLink subLinkUrl={`https://naver.com`} />
          <SubSummary
            name1={`Technomade - Admin`}
            name2={`테크노메이드 어드민 웹사이트`}
            attr={`디자인 기여도 100% \n 퍼블리싱 기여도 100%`}
          />
        </div>

        <div className="bottom">
          <div className="project_desc">
            <TextLine
              text={`고객 맞춤 의류를 생산하는 테크노메이드의 주문관리, 회원관리 등을 파악하고 처리할 관리자용 웹사이트 제작을 담당했습니다.\n
                기획자가 제공한 정보를 바탕으로 메뉴 구조 및 각 화면별 정보, 기능 정의 및 이를 토대로 디자인을 제작, 퍼블리싱을 도맡이 진행하였으며, 프론트 개발자들과의 협업을 통해 디자인 시 고려해야하는 폭넓은 시각을 배웠습니다.
                `}
            />
          </div>
        </div>
      </div>

      <div className="sub_cont cont01">
        <SubImg
          subImage={IMAGE.STRUCTURE.S_ADMIN}
          alt={`테크노메이드 어드민 사이트 메뉴 구조`}
        />
        <SubImg
          subImage={IMAGE.COLOR.C_ADMIN}
          alt={`테크노메이드 어드민 사이트 디자인 컬러차트`}
        />
        <h1>준비중입니다.</h1>
      </div>
    </>
  );
};

export default TechnomadeAdmin;
