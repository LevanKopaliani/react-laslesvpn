import { Link } from "react-router-dom";
import "./Footer.css";
import Subscribe from "./Subscribe";
import Logo from "../img/laslesvpn-logo.png";
import Fb from "../img/fb.png";
import Tw from "../img/tw.png";
import Ins from "../img/ins.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Subscribe />
      <div className="footer-main container">
        <div className="footer-info ">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
            <span>LaslesVPN</span>
          </div>
          <p className="footer-text">
            <strong>LaslesVPN</strong> is a private virtual network that has
            unique features and has high security.
          </p>
          <div className="footer-social-links">
            <ul>
              <li className="social-link__item">
                <a href="https://fb.com" target="_blank" rel="noreferrer">
                  <img src={Fb} alt="Facebook" />
                </a>
              </li>
              <li className="social-link__item">
                <a href="https://tweeter.com" target="_blank" rel="noreferrer">
                  <img src={Tw} alt="tweeter" />
                </a>
              </li>
              <li className="social-link__item">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Ins} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">©2020LaslesVPN</div>
        </div>
        <div className="footer-links">
          <ul className="product-links">
            <h1>Product</h1>
            <li className="product-link-item">
              <Link to="">Download</Link>
            </li>
            <li className="product-link-item">
              <Link to="">Pricing</Link>
            </li>
            <li className="product-link-item">
              <Link to="">Locations</Link>
            </li>
            <li className="product-link-item">
              <Link to="">Server</Link>
            </li>
            <li className="product-link-item">
              <Link to="">Countries</Link>
            </li>
            <li className="product-link-item">
              <Link to="">Blog</Link>
            </li>
          </ul>
          <ul className="engage-links">
            <h1>Engage</h1>
            <li className="engage-link-item">
              <Link to="">LaslesVpn ?</Link>
            </li>
            <li className="engage-link-item">
              <Link to="">FAQ</Link>
            </li>
            <li className="engage-link-item">
              <Link to="">Tutorials</Link>
            </li>
            <li className="engage-link-item">
              <Link to="">About Us</Link>
            </li>
            <li className="engage-link-item">
              <Link to="">Privacy Policy</Link>
            </li>
            <li className="engage-link-item">
              <Link to="">Terms of Service</Link>
            </li>
          </ul>
          <ul className="partner-links">
            <h1>Earn Money</h1>
            <li className="partner-link-item">
              <Link to="">Affiliate</Link>
            </li>
            <li className="partner-link-item">
              <Link to="">Become Partner</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
