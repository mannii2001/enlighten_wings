import React from "react";
import { useState } from "react";
import "./Appointment.css";
import emailjs from "@emailjs/browser"

const Appointment = () => {
  const [guardianName, setGuardianName] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !guardianEmail ||
      !guardianName ||
      !childAge ||
      !childName ||
      !message
    ) {
      alert("All Fields are Mandatory!");
      setGuardianName("");
      setGuardianEmail("");
      setChildName("");
      setChildAge("");
      setMessage("");
      return;
    }
    
    const formLocal = document.createElement('form');

    const GnameInput = document.createElement('input');
    const GemailInput = document.createElement('input');
    const childNameLocal = document.createElement('input');
    const childAgeLocal = document.createElement('input');
    const messageLocal = document.createElement('input')

    GnameInput.type = 'text';
    GnameInput.name = 'guardianName';
    GnameInput.value = `${guardianName}`

    GemailInput.type = 'email';
    GemailInput.name = 'guardianEmail';
    GemailInput.value = `${guardianEmail}`;

    childAgeLocal.type = 'number';
    childAgeLocal.name = 'childAge';
    childAgeLocal.value = `${childAge}`;

    childNameLocal.type = 'text';
    childNameLocal.name = 'childName';
    childNameLocal.value = `${childName}`;

    messageLocal.type = 'text';
    messageLocal.name = 'message';
    messageLocal.value = `${message}`

    formLocal.appendChild(GnameInput)
    formLocal.appendChild(GemailInput)
    formLocal.appendChild(childNameLocal)
    formLocal.appendChild(childAgeLocal)
    formLocal.appendChild(messageLocal)


    // console.log(formLocal)

     emailjs
      .sendForm(
        "service_yjjg2ck",
        "template_jvvhi9i",
        formLocal,
        "AZdQhW3d-arztawJE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );


    setGuardianName("");
    setGuardianEmail("");
    setChildName("");
    setChildAge("");
    setMessage("");
  };
  return (
    <div className="Appointment_Form_Container" id="appointmentForm">
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

        <button
          type="submit"
          className="submitButtonDiv"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {/* </form> */}
      </div>
      <div className="Appointment_form_image"></div>
    </div>
  );
};

export default Appointment;
