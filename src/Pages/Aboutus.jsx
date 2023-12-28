import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import './aboutus.css';
import Footer from '../Components/Footer/Footer'
import Review from '../Components/ReviewsSection/Review'

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div className="aboutUsDetails">
        <h1 className="aboutUsHeading">Empowering Young Minds with Tech</h1>
        <h4 className="aboutUsSubHeading">Our Vision</h4>
        <p className="aboutusVision">
          At Enlighten Wings, we envision a world where every
          young mind is equipped with the tools to shape their future. Our
          mission is to provide children aged 7 to 15 with a foundation in
          technical knowledge, introducing them to the exciting realms of AI,
          machine learning, and more. We believe that by fostering a sense of
          curiosity, creativity, and critical thinking from an early age, we can
          empower the next generation of thinkers, problem solvers, and
          innovators. Through engaging content, collaborative projects, and a
          supportive community, we aim to ignite the spark of learning and
          inspire young learners to explore, create, and lead in the
          ever-evolving landscape of technology. Join us on this exciting
          journey of discovery and growth!
        </p>
      </div>
      <Review/>
      <Footer/>
    </>
  );
};

export default Aboutus;
