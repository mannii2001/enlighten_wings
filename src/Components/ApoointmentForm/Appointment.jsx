import React from "react";
import { useState } from "react";
import "./Appointment.css";

const Appointment = () => {
  const [guardianName, setGuardianName] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle form submission, e.g. sending data to a server
    // For now, let's just log the form data
    console.log({
      guardianName,
      guardianEmail,
      childName,
      childAge,
      message,
    });

    // You can also clear the form fields here if needed
    setGuardianName("");
    setGuardianEmail("");
    setChildName("");
    setChildAge("");
    setMessage("");
  };
  return (
    <div className="Appointment_Form_Container">
      <div className="Appointment_Form">
        <div>
          <h3 className="appointmentHeading">Schedule Your Appointment</h3>
        </div>
        {/* <form onSubmit={handleSubmit} className="form"> */}
          
            
            <input
              type="text"
              id="guardianName"
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
              placeholder="Guardian Name"
              required
            />
          
        
            <input
              type="email"
              id="guardianEmail"
              value={guardianEmail}
              onChange={(e) => setGuardianEmail(e.target.value)}
              placeholder="Guardian Email"
              required
            />
          
        
            <input
              type="text"
              id="childName"
              value={childName}
              placeholder="Child Name"
              onChange={(e) => setChildName(e.target.value)}
              required
            />
          
         
            <input
              type="number"
              id="childAge"
              value={childAge}
              placeholder="Child Age"
              onChange={(e) => setChildAge(e.target.value)}
              required
            />
          
          
            <textarea
              id="message"
              value={message}
              placeholder="Leave Your Message Here"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          
          <button type="submit" className="submitButtonDiv" onClick={handleSubmit}>Submit</button>
        {/* </form> */}
      </div>
      <div className="Appointment_form_image"></div>
    </div>
  );
};

export default Appointment;
