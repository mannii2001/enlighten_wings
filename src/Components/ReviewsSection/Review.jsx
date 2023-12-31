import React from "react";
import './Review.css';
import harsh from '../../images/harshLodhi.jpeg'
import dhruv from '../../images/dhruv.jpeg'
import dummy from '../../images/dummy.jpg'
// import dhruv2 from '../../images/dhruv-removebg-preview.png'
// import harsh2 from '../../images/harshLodhi-removebg-preview.png'
// import dummy3 from '../../images/dummy-removebg-preview.png'
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h1 className="mb-4 testimoniHeading">Testimonials</h1>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Voices of Inspiration: Unveiling a Tapestry of Success Stories - Explore the Impact of Our Coding Classes Through the Genuine Experiences Shared by Our Empowered Students.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={dhruv}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt=""
            />
          </div>
          <h5 className="mb-3"><strong>Dhruv</strong></h5>
          <h6 className="text-primary mb-3">India</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Fantastic coding classes! Elevated my coding proficiency. Patient tutors and hands-on practice made learning enjoyable and effective.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={harsh}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt=""
            />
          </div>
          <h5 className="mb-3"><strong>Harsh Lodhi</strong></h5>
          <h6 className="text-primary mb-3">India</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Outstanding results! Methodical teaching approach. Impressed with personalized attention and insightful study material.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={dummy}
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt=""
            />
          </div>
          <h5 className="mb-3"><strong>Rohan Sharma</strong></h5>
          <h6 className="text-primary mb-3">India</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Fantastic institute! Improved my skills dramatically. Grateful for expert guidance and interactive classes.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}