import AddSVG from "../../assets/add.svg";
import React, { useState, useEffect } from "react";

function ExperienceDetails({ sActive, sPassive }) {
  const [activeForm, setActiveForm] = useState({
    // id: nextKey,
    company: "",
    role: "",
    description: "",
  });
  const [passiveForm, setPassiveForm] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState([]);
  const [description, setDescription] = useState("");
  // const [nextKey, setNextKey] = useState(0);

  const handleFormKey = function (e) {
    if (
      e.key === "Enter" &&
      !document.querySelector(".form--experience").classList.contains("hidden")
    ) {
      debugger;
      save();
    } else if (
      e.key === "Escape" &&
      !document.querySelector(".form--experience").classList.contains("hidden")
    ) {
      cancel();
    }
  };

  useEffect(() => {
    sActive(activeForm);
    sPassive(passiveForm);
  }, [activeForm]);

  useEffect(() => {
    window.addEventListener("keydown", handleFormKey);

    return () => window.removeEventListener("keydown", handleFormKey);
  }, [activeForm]);

  const revealExperience = function (e) {
    e.target.classList.add("hidden");
    document.querySelector(".add-section").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };
  const revealExperienceField = function (e) {
    document.querySelector(".add-experience").classList.add("hidden");
    document.querySelector(".form--experience").classList.remove("hidden");
  };
  const changeCompany = function (e) {
    setCompany(e.target.value);
    // Parenthesis lets you write an object within an arrow function, otherwise it will think that you're trying to write a multi-line statement
    setActiveForm((a) => ({ ...a, company: e.target.value }));
  };
  const changeRole = function (e) {
    setRole(e.target.value);
    setActiveForm((a) => ({ ...a, role: e.target.value }));
  };
  const changeDescription = function (e) {
    setDescription(e.target.value);
    setActiveForm((a) => ({ ...a, description: e.target.value }));
  };
  const cancel = function () {
    setActiveForm({ role: "", company: "", description: "" });
    setCompany("");
    setRole("");
    setDescription("");
    document.querySelector(".form--experience").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };
  const save = function () {
    setPassiveForm((p) => [...p, activeForm]);
    setActiveForm({ role: "", company: "", description: "" });
    setCompany("");
    setRole("");
    setDescription("");
    document.querySelector(".form--experience").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
    // setNextKey(nextKey + 1);
  };
  const editExperience = function () {
    console.log(passiveForm);
  };
  // Handle key presses

  return (
    <React.Fragment>
      <div className="add-section">
        <button className="button-add-section" onClick={revealExperience}>
          Experience <img src={AddSVG} alt="Add icon" />
        </button>
      </div>
      <div className="add-experience hidden">
        {/* Needs dynamic rendering */}
        {passiveForm.map((obj, index) => (
          <div key={index} className="added-section" onClick={editExperience}>
            {obj.company}
          </div>
        ))}

        <div className="button-wrapper">
          <button className="button-add" onClick={revealExperienceField}>
            ADD
          </button>
        </div>
      </div>
      <div className="form form--experience hidden">
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={changeCompany}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" value={role} onChange={changeRole} />
        </div>
        <div className="text-area">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={changeDescription}
          ></textarea>
        </div>
        <div className="cancel-and-save">
          <button onClick={cancel}>Cancel</button>
          <button onClick={save}>Save</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ExperienceDetails;
