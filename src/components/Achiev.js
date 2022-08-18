import React from "react";
import { Link } from "react-router-dom";

import TextArea from "./TextArea";
import TextLine from "./TextLine";
import ImageArea from "./ImageArea";

import "../components/scss/home_achiev.scss";
import Img1 from "../assets/images/prj1.png";
import Img2 from "../assets/images/prj2.jpg";
import Img3 from "../assets/images/prj3.jpg";
import Img4 from "../assets/images/prj4.png";

const Achiev = () => {
  return (
    <>
      <div className="layout_achiev">
        <>
          <TextArea
            title={"Achievements"}
            subtitle={""}
            body={
              <TextLine
                text={
                  "깔끔한 디자인과 이를 구현하는 코드 작성, \n 무엇보다 소통을 기반으로 한 작업과 \n 원활한 협업을 위해 노력합니다."
                }
              />
            }
          />
          <div className="latest_prj">
            <ImageArea image={Img4} />
            <Link to="/BusanBeachWeather" className="visit_prj">
              작업과정 보러가기
            </Link>
          </div>
        </>
      </div>
      <div className="other_prj">
        <div className="wrap_prj">
          <div className="prj">
            <ImageArea image={Img3} />
            <Link to="/jadoo" className="visit_prj">
              작업과정 보러가기
            </Link>
          </div>

          <div className="prj">
            <ImageArea image={Img2} />
            <Link to="/technomade-admin" className="visit_prj">
              작업과정 보러가기
            </Link>
          </div>

          <div className="prj">
            <ImageArea image={Img1} />
            <Link to="/technomade-service" className="visit_prj">
              작업과정 보러가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achiev;
