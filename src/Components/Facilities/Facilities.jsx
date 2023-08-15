import React from "react";
import "./Facilities.css";

const Facilities = () => {
  return (
    <>
    <div className="facilitiesHeadingAndSubheading">
      <h1 className="facilitiesMainheading">Our Facilities</h1>
      <span className="facilitiesMainSubheading">"Fostering Innovation and Growth: Discover a World of Possibilities Through Our Array of State-of-the-Art Facilities and Abundant Resources for AI, Coding, and Skill Development."</span>
    </div>
    <div className="facilitiesContainer">
      <div className="facilities_item">
        <div className="facilities_item_logo">
          <i
            class="fa fa-user-graduate fa-3x text-primary"
            id="Qualified_Mentor"
          ></i>
        </div>
        <div className="item_content">
          <h4 className="qualified">Qualified Mentors</h4>
          <span className="para">
            Skilled Coaches Guiding Your Pathway to Success with Expertise and
            Dedication
          </span>
        </div>
      </div>

      <div className="facilities_item">
        <div className="facilities_item_logo">
          <i class="fa fa-comments fa-3x text-warning" id="One-on-One"></i>
        </div>
        <div className="item_content">
          <h4 className="one_to_one">Personalised Classes</h4>
          <span className="para">
            Personalized One-to-One Coaching for Tailored Learning and Rapid
            Progress
          </span>
        </div>
      </div>
      <div className="facilities_item">
        <div className="facilities_item_logo">
          <i
            class="fa fa-chalkboard-teacher fa-3x text-info"
            id="learning_with_fun"
          ></i>
        </div>
        <div className="item_content">
          <h4 className="learning_with_fun">Leaning With Fun </h4>
          <span className="para">
            Engaging Education: Where Learning and Fun Converge for an Enriching
            Experience
          </span>
        </div>
      </div>
      <div className="facilities_item">
        <div className="facilities_item_logo">
          <i
            class="fa fa-graduation-cap fa-3x text-success"
            id="Enhance_the_Critical_Thinking_abilities_in_children"
          ></i>
        </div>
        <div className="item_content">
          <h4 className="critical_thinking">Critical Thinking abilities</h4>
          <span className="para">Sharpening Critical Thinking for Smarter Decision-Making and Innovation</span>
        </div>
      </div>
    </div>
    </>
    // "Personalized One-to-One Coaching for Tailored Learning and Rapid Progress."
    // "Engaging Education: Where Learning and Fun Converge for an Enriching Experience."
    // Sharpening Critical Thinking for Smarter Decision-Making and Innovation.
  );
};

export default Facilities;
