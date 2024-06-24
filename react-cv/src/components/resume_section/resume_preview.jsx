import PersonalPreview from "./personal_preview.jsx";
import ExperiencePreview from "./experience_preview.jsx";

function ResumePreview() {
  return (
    <div className="resume-window">
      <PersonalPreview />
      <ExperiencePreview />
    </div>
  );
}

export default ResumePreview;
