import React from "react";

import SubLink from "../components/SubLink";
import SubSummary from "../components/SubSummary";
import SubDesc from "../components/SubDesc";
import TextLine from "../components/TextLine";
import SubImg from "../components/SubImg";

import "../components/scss/sub_main.scss";

const Technomade = () => {
  return (
    <>
      <div className="sub_main">
        <div className="upper">
          <SubLink subLinkUrl={`https://www.technomade.co.kr/`} />
          <SubSummary
            name1={`Technomade`}
            name2={`테크노메이드 서비스 웹사이트`}
            attr={`디자인 기여도 40% \n 퍼블리싱 기여도 40%`}
          />
        </div>

        <div className="bottom">
          <div className="project_desc">
            <TextLine
              text={`개인 모바일 디바이스 카메라를 통해 치수를 측정, 해당 데이터 기반으로 고객 맞춤 의류를 생산하는 테크노메이드 서비스 웹사이트 제작 프로젝트에 서브 디자이너, 서브 퍼블리셔로 참가했습니다.\n
                전체 페이지 중 고객 문의 게시판, 후기 게시판, 고객 정보 게시판 디자인 및 퍼블리싱을 담당, 처음으로 git을 통한 협업과 프로젝트 관리를 익혔습니다.
                `}
            />
          </div>
        </div>
      </div>

      <div className="sub_cont cont01">
        <SubDesc
          name1={`1. 화면별 흐름도 작성`}
          name2={`화면 누락을 방지하고자 디자인 전 기획 단계에서 필요한 화면들을 미리 작성했습니다.`}
          attr={`문의, 후기 메뉴별, 화면별 구조 및 흐름도와 마이페이지 화면 구조 및 흐름도`}
        />
        <SubImg
          subImage={"/assets/img/tech_service/structure_service.png"}
          alt={`테크노메이드 서비스 사이트 고객 문의, 후기, 고객 정보 게시판 구조`}
        />
      </div>

      <div className="sub_cont cont02">
        <SubDesc
          name1={`2. 디자인 제작 - 문의`}
          name2={`앞선 화면별 흐름도를 바탕으로 문의 콘텐츠들의 화면을 디자인했습니다.`}
          attr={`문의: 게시판 메인, 게시글 비밀번호 입력, 콘텐츠 공개 등록과 비밀글 등록, 답글 여부 별 게시글 상세화면`}
        />
        <h2>• 문의게시판 메인, 게시글 비밀번호 입력</h2>
        <SubImg
          subImage={"/assets/img/tech_service/board/01_inquiry.png"}
          alt={`문의게시판 메인, 게시글 비밀번호 입력`}
        />
        <h2>• 문의게시판 게시글 답변 여부에 따른 상세화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/board/02_inquiry.png"}
          alt={`문의게시판 게시글 답글 여부에 따른 상세화면 `}
        />
        <h2>• 문의게시판 게시글 작성시 공개, 비공개 여부에 따른 화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/board/03_inquiry.png"}
          alt={`문의게시판 게시글 작성시 공개, 비공개 여부에 따른 화면 `}
        />
      </div>

      <div className="sub_cont cont03">
        <SubDesc
          name1={`3. 디자인 제작 - 후기`}
          name2={`앞선 화면별 흐름도를 바탕으로 후기 콘텐츠들의 화면을 디자인했습니다.`}
          attr={`후기: 게시판 메인, 답글 여부 별 게시글 상세화면 `}
        />
        <h2>• 후기게시판 메인화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/board/01_review.png"}
          alt={`후기게시판 메인화면`}
        />
        <h2>• 후기게시판 게시글 답변 여부에 따른 상세화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/board/02_review.png"}
          alt={`후기게시판 게시글 답변 여부에 따른 상세화면 `}
        />
      </div>

      <div className="sub_cont cont04">
        <SubDesc
          name1={`4. 디자인 제작 - 마이페이지`}
          name2={`앞선 화면별 흐름도를 바탕으로 마이페이지 콘텐츠들의 화면을 디자인했습니다.`}
          attr={`마이페이지:  메인화면, 사용자정보 및 정보변경 화면, 주문내역과 주문상세화면, 문의내역화면, 작성한 후기 화면과 등록화면`}
        />
        <h2>• 마이페이지 메인화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/myp/01_myp.png"}
          alt={`마이페이지 메인화면`}
        />
        <h2>• 마이페이지 나의 정보 및 치수 수정 화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/myp/02_myp.png"}
          alt={`마이페이지 나의 정보 및 치수 수정 화면 `}
        />
        <h2>• 마이페이지 주문내역 및 주문상세 화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/myp/03_myp.png"}
          alt={`마이페이지 주문내역 및 주문상세 화면 `}
        />
        <h2>• 마이페이지 문의내역 및 문의상세 화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/myp/04_myp.png"}
          alt={`마이페이지 문의내역 및 문의상세 화면 `}
        />
        <h2>• 마이페이지 작성한 후기 게시글 및 후기작성 화면</h2>
        <SubImg
          subImage={"/assets/img/tech_service/myp/05_myp.png"}
          alt={`마이페이지 작성한 후기 게시글 및 후기작성 화면 `}
        />
      </div>
    </>
  );
};

export default Technomade;
