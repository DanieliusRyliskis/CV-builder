import { useState } from "react";

function ExperienceForm({ sCompany, sRole, sDescription }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const changeCompany = function (e) {
    setCompany(e.target.value);
    sCompany(e.target.value);
  };
  const changeRole = function (e) {
    setRole(e.target.value);
    sRole(e.target.value);
  };
  const changeDescription = function (e) {
    setDescription(e.target.value);
    sDescription(e.target.value);
  };

  return (
    <div className="form form--experience">
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
        <button onClick={removeElement}>Cancel</button>
        <button onClick={MakeItHidden}>Save</button>
      </div>
    </div>
  );
}

export default ExperienceForm;
