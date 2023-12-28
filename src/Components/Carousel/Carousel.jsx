import React from "react";
import { useState,useEffect } from "react";
import "./Carousel.css";
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image5 from '../../images/image5.jpg'
import image6 from '../../images/image6.jpg'
import { useNavigate } from "react-router-dom";



const Carousel = () => {
  const navigate = useNavigate();
 
  // const[xxx,setxxx] = useState(0);
  // let img = [image1,image2,image5,image6]
  const Data = [
    { heading: "Building Bright Futures: AI, ML, Coding for Kids", subHeading: "At our virtual playground, kids develop problem-solving abilities and unleash their creativity by diving into the world of AI, ML, and  coding, shaping them into tech-savvy trailblazers.", BackgroundImage: image5 },
    { heading: "Empower Your Kids with Problem Solving Skills", subHeading: "Step into a world of discovery as kids explore the realms of AI, ML, and coding. Our dynamic lessons provide a solid foundation for young tech enthusiasts to flourish.", BackgroundImage: image2 },
    { heading: "Embark on an exciting journey of AI, ML, and coding", subHeading: "Lay the foundation for your child's future success with our AI, ML, and coding curriculum. Through hands-on projects, they cultivate analytical thinking and tech process.", BackgroundImage:image1 },
    { heading: "Inspiring Tomorrow's Tech Leaders: AI, ML, Coding", subHeading: "Fuel your child's curiosity with interactive adventures in AI, ML, and coding. Our program equips them with valuable skills, preparing them to explore the ever-evolving tech landscape.", BackgroundImage: image6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  
  useEffect(() => {
    
    const interval = setInterval(() => {
      let x = (currentIndex+1)%Data.length;
      setCurrentIndex(x);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });
  

  
  var currentData = Data[currentIndex];
  const design = {
    backgroundImage: ` url(${image6})`,//Will change when the animation will be added
    // background:`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) )`,
    width: '100%',
    height: '90vh',
    backgroundSize:'cover',
    backgroundPosition: 'top',
    display: 'flex',
    alignItems: 'center',
    transition: "all ease-in-out 2s",
  };
    


  return (
    <><div className="backgroundDiv" style={design}>
      <div className="contentDiv">
        <div className="contentHeading" >
          {currentData.heading}
        </div>
        <div className="contentsubHeading">
          {currentData.subHeading}
        </div>
        <div className="contentButtons">
          <button className="learnButton" onClick={()=>navigate('/contactUs')}>Learn More</button>
          <button className="classesButton" onClick={()=>navigate('/classes')}>Our Classes</button>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Carousel;
