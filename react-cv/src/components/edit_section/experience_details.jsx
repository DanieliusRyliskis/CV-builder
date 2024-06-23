import AddSVG from "../../assets/add.svg";
import ExperienceForm from "./experience_form";
import React, { useState, useEffect } from "react";

function ExperienceDetails() {
  const [form, setForm] = useState({
    company: "",
    role: "",
    description: "",
  });
  const [company, setCompany] = useState("");
  const [role, setRole] = useState([]);
  const [description, setDescription] = useState("");

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
    setForm((f) => ({ ...f, company: e.target.value }));
    console.log(form);
  };
  const changeRole = function (e) {
    setRole(e.target.value);
  };
  const changeDescription = function (e) {
    setDescription(e.target.value);
  };
  const cancel = function () {};
  const save = function () {
    console.log(form);
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
