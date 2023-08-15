import React from "react";
import { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");

    setShowMenu(!showMenu);
  };
  return (
    <div className="navbarContainer">
      {/* Only Mobile menu */}
      <div className={`mobile-menu only-mobile ${showMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
          <div className="mobile-nav-item">Home</div>
          <div className="mobile-nav-item">Classes</div>
          <div className="mobile-nav-item">About Us</div>
          <div className="mobile-nav-item">Contact Us</div>
          <button className="joinButtonDesign">
          Join Us<i class="fa fa-arrow-right"></i>
        </button>
        </div>
      </div>
      {/* Mobile Menu Ends */}
      <div className="logoContainer">
        <h1 className="logo">
          <i class="fa fa-book-reader p2"></i>EnlightenWings
        </h1>
      </div>
      <div className="centerMenu">
        <p className="menuText">Home</p>
        <p className="menuText">Classes</p>
        <p className="menuText">About Us</p>
        <p className="menuText">Contact Us</p>
      </div>
      <div className="joinButton">
        <button className="joinButtonDesign">
          Join Us<i class="fa fa-arrow-right"></i>
        </button>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
