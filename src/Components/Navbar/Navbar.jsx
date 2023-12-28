import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");

    setShowMenu(!showMenu);
  };
  const navigateHome = ()=>{
    navigate("/");
  }
  const navigateContactus = ()=>{
    navigate("/contactUs");
  }
  const navigateAboutus = ()=>{
    navigate("/aboutUs");
  }
  const navigateClasses = ()=>{
    navigate("/classes");
  }
  return (
    <div className="navbarContainer">
      {/* Only Mobile menu */}
      <div className={`mobile-menu only-mobile ${showMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
          <div className="mobile-nav-item" onClick={navigateHome}>Home</div>
          <div className="mobile-nav-item" onClick={navigateClasses}>Classes</div>
          <div className="mobile-nav-item" onClick={navigateAboutus}>About Us</div>
          <div className="mobile-nav-item" onClick={navigateContactus}>Contact Us</div>
          <button className="joinButtonDesign" onClick={navigateContactus}>
          Join Us<i class="fa fa-arrow-right"></i>
        </button>
        </div>
      </div>
      {/* Mobile Menu Ends */}
      <div className="logoContainer">
        <h1 className="logo" onClick={navigateHome}>
          <i class="fa fa-book-reader p2"></i>EnlightenWings
        </h1>
      </div>
      <div className="centerMenu">
        <p className="menuText" onClick={navigateHome}>sound in the Home</p>
        <p className="menuText" onClick={navigateClasses}>Classes</p>
        <p className="menuText" onClick={navigateAboutus}>About Us</p>
        <p className="menuText" onClick={navigateContactus}>Contact Us</p>
      </div>
      <div className="joinButton">
        <button className="joinButtonDesign" onClick={navigateContactus}>
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
