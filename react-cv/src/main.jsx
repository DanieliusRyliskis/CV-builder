import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import Header from "./components/header";
import ResumePreview from "./components/resume_section/resume_preview";
import EditWindow from "./components/edit_window";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className="main-flex">
      <EditWindow />
      <ResumePreview />
    </div>
  </React.StrictMode>
);
