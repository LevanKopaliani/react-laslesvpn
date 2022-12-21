import "./Footer.css";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer className="footer">
      <Subscribe />
      <div className="footer-main container">
        <div className="footer-info ">
          <div className="footer-logo">LaslesVPN</div>
          <p className="footer-text">
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>
          <div className="footer-social-links">test</div>
        </div>
        <div className="footer-links">
          <ul className="product-links">
            <h1>Product</h1>
            <li className="product-link-item">Download</li>
            <li className="product-link-item">Pricing</li>
            <li className="product-link-item">Locations</li>
            <li className="product-link-item">Server</li>
            <li className="product-link-item">Countries</li>
            <li className="product-link-item">Blog</li>
          </ul>
          <ul className="engage-links">
            <h1>Engage</h1>
            <li className="engage-link-item">LaslesVpn ?</li>
            <li className="engage-link-item">FAQ</li>
            <li className="engage-link-item">Tutorials</li>
            <li className="engage-link-item">About Us</li>
            <li className="engage-link-item">Privacy Policy</li>
            <li className="engage-link-item">Terms of Service</li>
          </ul>
          <ul className="partner-links">
            <h1>Earn Money</h1>
            <li className="partner-link-item">Affiliate</li>
            <li className="partner-link-item">Become Partner</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
