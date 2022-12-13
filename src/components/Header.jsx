import React, { useState } from "react";
import Logo from "../img/laslesvpn-logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="nav-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={Logo} alt="logo" />
              <span>LaslesVPN</span>
            </Link>
          </div>
          <div className="menu-icon" onClick={toogleMenu}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Help
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
