import "./SliderCard.css";
// import CustomerImage from "../img/review/viezh.png";
import ReviewStar from "../img/reviewstar.png";

function SliderCard({ customer }) {
  return (
    <div className="slidercard">
      <div className="customer">
        <div className="customer-image">
          <img src={customer.image} alt="customer" />
        </div>
        <div className="customer-info">
          <p className="customer-info__name">{customer.name}</p>
          <p className="customer-info__city">{customer.city}</p>
        </div>
        <div className="review-rating">
          <span className="review-score">{customer.rate}</span>
          <span>
            <img src={ReviewStar} alt="reviwrating" />
          </span>
        </div>
      </div>
      <div className="customer-comment">
        <p>{customer.comment}</p>
      </div>
    </div>
  );
}

export default SliderCard;
