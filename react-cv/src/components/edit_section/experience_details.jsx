import AddSVG from "../../assets/add.svg";
import ExperienceForm from "./experience_form";
import React, { useState } from "react";

function ExperienceDetails() {
  const [importedForm, setImportedForm] = useState([]);
  const [nextKey, setNextKey] = useState(0);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const revealExperience = function (e) {
    e.target.classList.add("hidden");
    document.querySelector(".add-section").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };
  const revealExperienceField = function (e) {
    e.target.classList.add("hidden");
    document.querySelector(".add-experience").classList.add("hidden");
    // document.querySelector(".form--experience").classList.remove("hidden");
    setImportedForm([
      ...importedForm,
      {
        id: nextKey,
        component: (
          <ExperienceForm
            sCompany={setCompany}
            sRole={setRole}
            sDescription={setDescription}
          />
        ),
      },
    ]);
    setNextKey(nextKey + 1);
  };

  return (
    <React.Fragment>
      <div className="add-section">
        <button className="button-add-section" onClick={revealExperience}>
          Experience <img src={AddSVG} alt="Add icon" />
        </button>
      </div>
      <div className="add-experience hidden">
        <div className="added-section">Company</div>
        <div className="button-wrapper">
          <button className="button-add" onClick={revealExperienceField}>
            ADD
          </button>
        </div>
      </div>

      {importedForm.map(({ id, component }) => (
        <React.Fragment key={id}>{component}</React.Fragment>
      ))}
      <p>{company}</p>
      <p>{role}</p>
    </React.Fragment>
  );
}

export default ExperienceDetails;
