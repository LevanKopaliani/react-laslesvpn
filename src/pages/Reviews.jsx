import Reviewslider from "../components/Reviewslider";
import "./Reviews.css";

function Reviews() {
  return (
    <>
      <div className="reviews-heading">
        <h1 className="reviews-title">
          Trusted by Thousands of Happy Customer
        </h1>
        <p className="reviews-subtitle">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="review-main">
        <div className="review-slider">
          <Reviewslider />
        </div>
      </div>
    </>
  );
}

export default Reviews;
