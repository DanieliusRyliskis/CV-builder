import AddSVG from "../../assets/add.svg";
import React, { useState, useEffect, useRef } from "react";

function ExperienceDetails({ sActive, sPassive }) {
  const [activeForm, setActiveForm] = useState({
    company: "",
    role: "",
    description: "",
  });
  const [passiveForm, setPassiveForm] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState([]);
  const [description, setDescription] = useState("");
  const [openedForm, setOpenedForm] = useState(0);

  useEffect(() => {
    sActive(activeForm);
    sPassive(passiveForm);
  }, [activeForm, passiveForm]);

  // Need activeForm in a dependency array, otherwise i'll endup in a stale closure
  useEffect(() => {
    const handleFormKey = function (e) {
      // !!! Needs a fix because there is now .form--submit and .form--update
      if (
        e.key === "Enter" &&
        !document.querySelector(".form--submit").classList.contains("hidden")
      ) {
        save();
      } else if (
        e.key === "Enter" &&
        !document.querySelector(".form--update").classList.contains("hidden")
      ) {
        update();
      } else if (
        e.key === "Escape" &&
        !document.querySelector(".form--submit").classList.contains("hidden")
      ) {
        cancel();
      }
    };

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
    document.querySelector(".form--submit").classList.remove("hidden");
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
    setActiveForm({ company: "", role: "", description: "" });
    setCompany("");
    setRole("");
    setDescription("");
    document.querySelector(".form--submit").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };
  const save = function () {
    setPassiveForm((p) => [...p, activeForm]);
    setActiveForm({ company: "", role: "", description: "" });
    setCompany("");
    setRole("");
    setDescription("");
    document.querySelector(".form--submit").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };
  const editExperience = function (e) {
    setOpenedForm(e.target.dataset.key);
    setCompany(passiveForm[e.target.dataset.key].company);
    setRole(passiveForm[e.target.dataset.key].role);
    setDescription(passiveForm[e.target.dataset.key].description);
    document.querySelector(".add-experience").classList.add("hidden");
    document.querySelector(".form--update").classList.remove("hidden");
  };
  const updateCompany = function (e) {
    const copyPassive = [...passiveForm];
    copyPassive[openedForm].company = e.target.value;
    setPassiveForm(copyPassive);
    setCompany(e.target.value);
  };
  const updateRole = function (e) {
    const copyPassive = [...passiveForm];
    copyPassive[openedForm].role = e.target.value;
    setPassiveForm(copyPassive);

    setRole(e.target.value);
  };
  const updateDescription = function (e) {
    const copyPassive = [...passiveForm];
    copyPassive[openedForm].description = e.target.value;
    setPassiveForm(copyPassive);
    setDescription(e.target.value);
  };
  const deleteForm = function () {
    const copyPassive = [...passiveForm];
    copyPassive.splice(openedForm, 1);
    setPassiveForm(copyPassive);
    setCompany("");
    setRole("");
    setDescription("");
    document.querySelector(".form--update").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };
  const update = function () {
    setCompany("");
    setRole("");
    setDescription("");
    document.querySelector(".form--update").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };

  const cancelUpdate = function () {
    document.querySelector(".form--update").classList.add("hidden");
    document.querySelector(".add-experience").classList.remove("hidden");
  };

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
          <div
            key={index}
            data-key={index}
            className="added-section"
            onClick={editExperience}
          >
            {obj.company}
          </div>
        ))}

        <div className="button-wrapper">
          <button className="button-add" onClick={revealExperienceField}>
            ADD
          </button>
        </div>
      </div>
      <div className="form form--submit hidden">
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
          <button onClick={cancel} className="button-cancel">
            Cancel
          </button>
          <button onClick={save} className="button-save">
            {/* change the name to save later */}
            Save
          </button>
        </div>
      </div>
      <div className="form form--update hidden">
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company--update"
            value={company}
            onChange={updateCompany}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role--update"
            value={role}
            onChange={updateRole}
          />
        </div>
        <div className="text-area">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description--update"
            value={description}
            onChange={updateDescription}
          ></textarea>
        </div>
        <div className="cancel-and-save">
          <button onClick={deleteForm} className="button-delete">
            Delete
          </button>
          <button onClick={cancelUpdate} className="button-cancel">
            Cancel
          </button>
          <button onClick={update} className="button-update">
            Save
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ExperienceDetails;
