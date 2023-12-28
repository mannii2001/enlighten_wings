import React from "react";
import "./Contact.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer'
import Appointment from "../Components/ApoointmentForm/Appointment";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="contactPageHeading">
        <h1 className="contactHeading">Get in Touch</h1>
        <span className="contactSubheading">
          Get in Touch with Our Support Team: A Personalized Connection for
          Questions, Assistance, and Collaborative Opportunities
        </span>
      </div>
      <div className="contactIcons">
        <div className="IconItem">
         <div className="iconDiv"> <i class="fa fa-map-marker-alt fa-2x text-warning"></i></div>
          <h6 className="contactIconDetails">New Delhi, India</h6>
        </div>
        <div className="IconItem">
          <div className="iconDiv"><i class="fa fa-envelope-open fa-2x text-warning"></i></div>
          <h6 className="contactIconDetails">info@enlightenwings.com</h6>
        </div>
        <div className="IconItem">
          <div className="iconDiv"><i class="fa fa-phone-alt fa-2x text-warning"></i></div>
          <h6 className="contactIconDetails">+91 88826 73130</h6>
        </div>
      </div>
      <Appointment/>
      <Footer/>
    </>
  );
};

export default Contactus;
