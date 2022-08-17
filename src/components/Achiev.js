import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TextArea from "./TextArea";
import TextLine from "./TextLine";

import "../components/scss/home_slide.scss";
import SlideImg1 from "../assets/images/slide1.png";
import SlideImg2 from "../assets/images/slide2.jpg";
import SlideImg3 from "../assets/images/slide3.jpg";
import SlideImg4 from "../assets/images/slide4.jpg";

const Achiev = () => {
  const swiperNavPrevRef = useRef("");
  const swiperNavNextRef = useRef("");
  const photos = [
    { name: SlideImg1, id: 1 },
    { name: SlideImg2, id: 2 },
    { name: SlideImg3, id: 3 },
    { name: SlideImg4, id: 4 },
  ];

  return (
    <div className="layout_slide">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: swiperNavPrevRef,
            nextEl: swiperNavNextRef,
          }}
          speed={800}
          slidePerView={1}
          loop
          pagination={{ clickable: true }}
          // scrollbar
          // autoplay={{ delay: 800 }}
          className="mySwiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {photos.map((photo, i) => (
            <SwiperSlide className="swiperslide">
              <img src={`${photo.name}`} alt="achivement" />
              <button href="#" className="slide-button">
                더보기
              </button>
            </SwiperSlide>
          ))}

          <div className="swiperNavPrev" ref={swiperNavPrevRef}></div>
          <div className="swiperNavNext" ref={swiperNavNextRef}></div>
        </Swiper>
      </div>
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
    </div>
  );
};

export default Achiev;
