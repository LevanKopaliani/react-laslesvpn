import "./Reviewslider.css";
import SliderCard from "./SliderCard";
import ReviewData from "./ReviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import leftArrow from "../img/left.png";
import rightArrow from "../img/right.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReviewSlider = () => {
  return (
    <>
      <Swiper
        className="myswiper container"
        loop={true}
        spaceBetween={50}
        slidesPerView={
          Math.floor(window.innerWidth / 400) < 1
            ? 1
            : Math.floor(window.innerWidth / 400) > 3
            ? 3
            : Math.floor(window.innerWidth / 400)
        }
        draggable={true}
        pagination={{
          el: ".slider-dots",
          clickable: true,
        }}
        navigation={{ nextEl: ".swip-btn-next", prevEl: ".swip-btn-prev" }}
        modules={[Pagination, Navigation]}
        centeredSlides={true}
      >
        <div className="ReviewSlider">
          {ReviewData.map((customer, idx) => (
            <SwiperSlide className="swipslide" key={idx}>
              <SliderCard className={idx} customer={customer} key={idx} />
            </SwiperSlide>
          ))}
        </div>
        <div className="slider-controller">
          <div className="slider-dots">
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
          </div>
          <div className="slider-buttons">
            <button className="swip-btn-prev swip-btn">
              <img src={leftArrow} alt="prevslide" />
            </button>
            <button className="swip-btn-next swip-btn">
              <img src={rightArrow} alt="nextslide" />
            </button>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default ReviewSlider;
