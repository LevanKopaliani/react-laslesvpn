import "./Pricing.css";
import PlanIcon from "../img/plan-icon.png";

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-heading container">
        <h1 className="pricing-title">Choose Your Plan</h1>
        <h4 className="pricing-subtitle">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </h4>
      </div>
      <div className="pricing-plan container">
        <div className="pricing-plan__free">
          <div className="plan-icon">
            <img src={PlanIcon} alt="plan-icon" />
          </div>
          <div className="plan-title">Free Plan</div>
          <ul className="plan-list">
            <li className="plan-list__item">Unlimited Bandwitch</li>
            <li className="plan-list__item">Encrypted Connection</li>
            <li className="plan-list__item">No Traffic Logs</li>
            <li className="plan-list__item">Works on All Devices</li>
          </ul>
          <div className="plan-price">
            <p>Free</p>
            <button className="plan-pricing__button">Select</button>
          </div>
        </div>
        <div className="pricing-plan__standart">
          <div className="plan-icon">
            <img src={PlanIcon} alt="plan-icon" />
          </div>
          <div className="plan-title">Standard Plan</div>
          <ul className="plan-list">
            <li className="plan-list__item">Unlimited Bandwitch</li>
            <li className="plan-list__item">Encrypted Connection</li>
            <li className="plan-list__item">Yes Traffic Logs</li>
            <li className="plan-list__item">Works on All Devices</li>
            <li className="plan-list__item">Connect Anyware</li>
          </ul>
          <div className="plan-price">
            <p>$9 / mo</p>
            <button className="plan-pricing__button">Select</button>
          </div>
        </div>
        <div className="pricing-plan__premium">
          <div className="plan-icon">
            <img src={PlanIcon} alt="plan-icon" />
          </div>
          <div className="plan-title">Premium Plan</div>
          <ul className="plan-list">
            <li className="plan-list__item">Unlimited Bandwitch</li>
            <li className="plan-list__item">Encrypted Connection</li>
            <li className="plan-list__item">Yes Traffic Logs</li>
            <li className="plan-list__item">Works on All Devices</li>
            <li className="plan-list__item">Connect Anyware</li>
            <li className="plan-list__item">Get New Features</li>
          </ul>
          <div className="plan-price">
            <p>$12 / mo</p>
            <button className="plan-pricing__button">Select</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
