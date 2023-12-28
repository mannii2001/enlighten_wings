import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footerContainer">
      <div className="contactDetailsDiv">
        <h3 className="contactHeading1">Get In Touch</h3>
        <p class="mb-2">
          <i class="fa fa-map-marker-alt me-3"></i>New Delhi, India
        </p>
        <p class="mb-2">
          <i class="fa fa-phone-alt me-3"></i>+91 88826 73130
        </p>
        <p class="mb-2">
          <i class="fa fa-envelope me-3"></i>info@enlightenwings.com
        </p>
        <div class="SocialHandleImages">
          <a class="btn btn-outline-light btn-social" href="/">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="btn btn-outline-light btn-social" href="/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="btn btn-outline-light btn-social" href="/">
            <i class="fab fa-youtube"></i>
          </a>
          <a class="btn btn-outline-light btn-social" href="/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="quicklinks">
        <h3 class="quickLinkHeading">Quick Links</h3>
        <p class="mb-2 hover" onClick={() => navigate("/")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>Home
        </p>
        <p class="mb-2 hover" onClick={() => navigate("/aboutUs")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>About Us
        </p>
        <p class="mb-2 hover" onClick={() => navigate("/contactUs")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>Contact Us
        </p>
        <p class="mb-2 hover" onClick={() => navigate("/classes")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>Classes
        </p>
      </div>
      <div className="newsletter">
        <h3 class="text-white mb-4 newsletter">Policies</h3>
       <p class="mb-2 hover" onClick={() => navigate("/privacy_policy")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>Privacy Policy
        </p>
        <p class="mb-2 hover" onClick={() => navigate("/terms_conditions")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>Terms and Conditions
        </p>
        <p class="mb-2 hover" onClick={() => navigate("/refund_policy")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>Cancellation and Refund
        </p>
        <p class="mb-2 hover" onClick={() => navigate("/shipping_delivery")}>
          <i class="fas fa-angle-double-right arrowIcon"></i>Shipping and Delivery
        </p>       
      </div>
    </div>
  );
};

export default Footer;
