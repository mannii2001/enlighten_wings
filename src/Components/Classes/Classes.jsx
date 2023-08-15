import React from "react";
import "./Classes.css";
import languageImg from '../../images/languagesImage.jpg'
import img1 from '../../images/classes-5.jpg'
import webDev from '../../images/webdev.png'
import appDev from '../../images/appDev.png'
import AI from '../../images/AI.png'
import gameDev from '../../images/gameDev.jpg'

const Classes = () => {
  return (<>
        <h2 className="coursesHeading">Our Courses</h2>
        <p className="coursesSubheading">Embark on an Extraordinary Educational Journey with Our Exquisite Array of Comprehensive and Enriching Courses, Designed to Ignite Your Passion and Propel Your Learning Forward.</p>
      <div className="classesContainer">
      <div className="classItemContainer">
        <div className="classImage">
          <img
            src={img1}
            alt=""
            className="classImg"
          />
        </div>
        <div className="classHeading">
          <h3>Scratch Programming</h3>
        </div>
        <div className="classDetails">
          <div className="orangeBorder">
            <span className="orangeText">Age:</span>
            <span>7 - 15 Years</span>
          </div>
          <div className="greenBorder">
            <span className="greenText">Time:</span>
            <span>9 - 12 Am</span>
          </div>
          <div className="yellowBorder">
            <span className="yellowText">Capacity:</span>
            <span>One to One</span>
          </div>
        </div>
      </div>
      <div className="classItemContainer">
        <div className="classImage">
          <img
            src={languageImg}
            alt=""
            className="classImg"
          />
        </div>
        <div className="classHeading">
          <h3>International Languages</h3>
        </div>
        <div className="classDetails">
          <div className="orangeBorder">
            <span className="orangeText">Age:</span>
            <span>7 - 15 Years</span>
          </div>
          <div className="greenBorder">
            <span className="greenText">Time:</span>
            <span>9 - 12 Am</span>
          </div>
          <div className="yellowBorder">
            <span className="yellowText">Capacity:</span>
            <span>One to One</span>
          </div>
        </div>
      </div>
      <div className="classItemContainer">
        <div className="classImage">
          <img
            src={webDev}
            alt=""
            className="classImg"
          />
        </div>
        <div className="classHeading">
          <h3>Web Development</h3>
        </div>
        <div className="classDetails">
          <div className="orangeBorder">
            <span className="orangeText">Age:</span>
            <span>7 - 15 Years</span>
          </div>
          <div className="greenBorder">
            <span className="greenText">Time:</span>
            <span>9 - 12 Am</span>
          </div>
          <div className="yellowBorder">
            <span className="yellowText">Capacity:</span>
            <span>One to One</span>
          </div>
        </div>
      </div>
      <div className="classItemContainer">
        <div className="classImage">
          <img
            src={appDev}
            alt=""
            className="classImg"
          />
        </div>
        <div className="classHeading">
          <h3>App Development</h3>
        </div>
        <div className="classDetails">
          <div className="orangeBorder">
            <span className="orangeText">Age:</span>
            <span>7 - 15 Years</span>
          </div>
          <div className="greenBorder">
            <span className="greenText">Time:</span>
            <span>9 - 12 Am</span>
          </div>
          <div className="yellowBorder">
            <span className="yellowText">Capacity:</span>
            <span>One to One</span>
          </div>
        </div>
      </div>
      <div className="classItemContainer">
        <div className="classImage">
          <img
            src={AI}
            alt=""
            className="classImg"
          />
        </div>
        <div className="classHeading">
          <h3>Artifical Intelligence</h3>
        </div>
        <div className="classDetails">
          <div className="orangeBorder">
            <span className="orangeText">Age:</span>
            <span>7 - 15 Years</span>
          </div>
          <div className="greenBorder">
            <span className="greenText">Time:</span>
            <span>9 - 12 Am</span>
          </div>
          <div className="yellowBorder">
            <span className="yellowText">Capacity:</span>
            <span>One to One</span>
          </div>
        </div>
      </div>
      <div className="classItemContainer">
        <div className="classImage">
          <img
            src={gameDev}
            alt=""
            className="classImg"
          />
        </div>
        <div className="classHeading">
          <h3>Game Development</h3>
        </div>
        <div className="classDetails">
          <div className="orangeBorder">
            <span className="orangeText">Age:</span>
            <span>7 - 15 Years</span>
          </div>
          <div className="greenBorder">
            <span className="greenText">Time:</span>
            <span>9 - 12 Am</span>
          </div>
          <div className="yellowBorder">
            <span className="yellowText">Capacity:</span>
            <span>One to One</span>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Classes;
