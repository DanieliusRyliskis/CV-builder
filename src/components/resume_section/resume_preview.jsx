import PersonalPreview from "./personal_preview.jsx";
import ExperiencePreview from "./experience_preview.jsx";
import { useEffect } from "react";

function ResumePreview(props) {
  useEffect(() => {
    if (props.download.length !== 0 && props.download !== "") {
      console.log("download");
      const printContent = document.querySelector(".resume-window");
      html2pdf(printContent);
    }
  }, [props.download]);

  return (
    <div className="resume-window">
      <PersonalPreview />
      <ExperiencePreview />
    </div>
  );
}

export default ResumePreview;
