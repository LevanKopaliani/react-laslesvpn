import "./Reviewslider.css";
import SliderCard from "./SliderCard";
import ReviewData from "./ReviewData";

function ReviewSlider() {
  return (
    <div>
      {ReviewData.map((customer, idx) => (
        <SliderCard customer={customer} key={idx} />
      ))}
    </div>
  );
}

export default ReviewSlider;
