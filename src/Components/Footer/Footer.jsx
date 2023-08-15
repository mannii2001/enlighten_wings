import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="contactDetailsDiv">
        <h3 className="contactHeading">Get In Touch</h3>
        <p class="mb-2">
          <i class="fa fa-map-marker-alt me-3"></i>123 Street, New Delhi
        </p>
        <p class="mb-2">
          <i class="fa fa-phone-alt me-3"></i>+012 345 67890
        </p>
        <p class="mb-2">
          <i class="fa fa-envelope me-3"></i>info@Enlightenwings.com
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
        <p class="mb-2">
          <i class="fas fa-angle-double-right arrowIcon"></i>About Us
        </p>
        <p class="mb-2">
          <i class="fas fa-angle-double-right arrowIcon"></i>Contact Us
        </p>
        <p class="mb-2">
          <i class="fas fa-angle-double-right arrowIcon"></i>Classes
        </p>
        <p class="mb-2">
          <i class="fas fa-angle-double-right arrowIcon"></i>Privacy Policy
        </p>
      </div>
      <div className="newsletter">
        <h3 class="text-white mb-4 newsletter">Newsletter</h3>
        <p style={{maxWidth: "400px",paddingBottom:"1rem"}} className="newsLetterEmailHeading">Subscribe to Our Newsletter to Stay Informed About The Latest Technology Updates.</p>
        <div class="position-relative mx-auto newsLetterEmail" style={{maxWidth: "400px"}}>
          <input
            class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            type="button"
            class="btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
