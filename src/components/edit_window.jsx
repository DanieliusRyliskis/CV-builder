import FileNameEdit from "./edit_section/file_name_edit.jsx";
import PersonalDetails from "./edit_section/personal_details.jsx";
import ExperienceDetails from "./edit_section/experience_details.jsx";
import { useState, useEffect } from "react";

function EditWindow({
  nameParent,
  emailParent,
  phoneParent,
  locationParent,
  githubParent,
  linkedinParent,
  activeParent,
  passiveParent,
  showExpParent,
}) {
  // I won't need no dependecies for useEffect
  function sendToParent() {
    nameParent(fullName);
    emailParent(email);
    phoneParent(phone);
    locationParent(location);
    githubParent(github);
    linkedinParent(linkedin);
    activeParent(activeForm);
    passiveParent(passiveForm);
    showExpParent(showExp);
  }
  useEffect(sendToParent);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [activeForm, setActiveForm] = useState({});
  const [passiveForm, setPassiveForm] = useState([]);
  const [showExp, setShowExp] = useState([]);

  return (
    <div>
      <FileNameEdit />
      <PersonalDetails
        sName={setFullName}
        sEmail={setEmail}
        sPhone={setPhone}
        sLocation={setLocation}
        sGithub={setGithub}
        sLinkedin={setLinkedin}
      />
      <ExperienceDetails
        sActive={setActiveForm}
        sPassive={setPassiveForm}
        sShowExp={setShowExp}
      />
    </div>
  );
}

export default EditWindow;

// onChange={() => console.log("updated")}
