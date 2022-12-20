import "./Reviewslider.css";
import SliderCard from "./SliderCard";
import ReviewData from "./ReviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function ReviewSlider() {
  return (
    <>
      <Swiper
        // className="myswiper container"
        // direction={"vertical"}
        loop={true}
        spaceBetween={180}
        slidesPerView={3}
        draggable={true}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: ".swip-btn-next" }}
        modules={[Pagination, Navigation]}
        centeredSlides={true}
      >
        <div className="ReviewSlider">
          {ReviewData.map((customer, idx) => (
            <SwiperSlide key={idx}>
              <SliderCard className={idx} customer={customer} key={idx} />
            </SwiperSlide>
          ))}
        </div>
        <div className="slider-controller">{Pagination}</div>
        <div className="slider-controller">
          <button className="swip-btn-next">next</button>
        </div>
      </Swiper>
    </>
  );
}

export default ReviewSlider;
