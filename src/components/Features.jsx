import "./Features.css";
import FeaturesImg from "../img/features-img.png";
import Users from "../img/user.png";
import Locations from "../img/location.png";
import Servers from "../img/Server.png";

function Features() {
  return (
    <section className="features">
      <div className="users-info container">
        <div className="user-info_block left">
          <div className="block-icon">
            <img src={Users} alt="users" />
          </div>
          <div className="block-title">
            <h1>90+</h1>
            <p>Users</p>
          </div>
        </div>
        <div className="user-info_block center">
          <div className="block-icon">
            <img src={Locations} alt="locations" />
          </div>
          <div className="block-title">
            <h1>30+</h1>
            <p>Locations</p>
          </div>
        </div>
        <div className="user-info_block right">
          <div className="block-icon">
            <img src={Servers} alt="servers" />
          </div>
          <div className="block-title">
            <h1>50+</h1>
            <p>Servers</p>
          </div>
        </div>
      </div>
      <div className="features-section container">
        <div className="features-section_img">
          <img src={FeaturesImg} alt="features" />
        </div>
        <div className="features-section_info">
          <h1 className="features-title">
            We Provide Many Features You Can Use
          </h1>
          <h4 className="features-subtitle">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </h4>
          <ul className="features-list">
            <li>
              <span>Powerfull online protection.</span>
            </li>
            <li>
              <span>Internet without borders.</span>
            </li>
            <li>
              <span>Supercharged VPN</span>
            </li>
            <li>
              <span>No specific time limits.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
