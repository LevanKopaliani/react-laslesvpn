import "./Testimonials.css";
import TestimonialsMap from "../img/testimonials-map.png";
import Brands from "../components/Brands";

function Testimonials() {
  return (
    <section className="testimonials">
      <h1 className="testimonials-title">Huge Global Network of Fast VPN</h1>
      <p className="testimonials-subtitle">
        See <strong>LaslesVPN</strong> everywhere to make it easier for you when
        you move locations.
      </p>
      <div className="testimonials-map">
        <img
          src={TestimonialsMap}
          alt="testimonials"
          className="testimonials-map__img"
        />
      </div>
      <Brands />
    </section>
  );
}

export default Testimonials;
