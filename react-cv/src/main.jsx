import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import Header from "./components/header";
import FileNameEdit from "./components/edit_section/file_name_edit";
import ResumePreview from "./components/resume_section/resume_preview";
import PersonalDetails from "./components/edit_section/personal_details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className="main-flex">
      <div>
        <FileNameEdit />
        <PersonalDetails />
      </div>
      <ResumePreview />
    </div>
  </React.StrictMode>
);
