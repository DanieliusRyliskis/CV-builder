import { useState } from "react";
// fName callback
function PersonalDetails({
  sName,
  sEmail,
  sPhone,
  sLocation,
  sGithub,
  sLinkedin,
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  function nameChange(e) {
    setFullName(e.target.value);
    sName(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
    sEmail(e.target.value);
  }
  function phoneChange(e) {
    setPhone(e.target.value);
    sPhone(e.target.value);
  }
  function locationChange(e) {
    setLocation(e.target.value);
    sLocation(e.target.value);
  }
  function githubChange(e) {
    setGithub(e.target.value);
    sGithub(e.target.value);
  }
  function linkedinChange(e) {
    setLinkedin(e.target.value);
    sLinkedin(e.target.value);
  }

  return (
    <div className="form form--personal">
      <div>
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          // Triggers every time the value of a input changes
          onChange={nameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={emailChange} value={email} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone:</label>
        <input
          type="tel"
          id="phoneNumber"
          onChange={phoneChange}
          value={phone}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          onChange={locationChange}
          value={location}
        />
      </div>
      <div>
        <label htmlFor="github">Github:</label>
        <input type="url" id="github" onChange={githubChange} value={github} />
      </div>
      <div>
        <label htmlFor="linkedin">LinkedIn:</label>
        <input
          type="url"
          id="linkedin"
          onChange={linkedinChange}
          value={linkedin}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;
