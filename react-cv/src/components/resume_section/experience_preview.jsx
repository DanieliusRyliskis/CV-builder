import { useContext } from "react";
import { previewContext } from "../../App";

function ExperiencePreview() {
  const allContext = useContext(previewContext);
  const { activeForm, passiveForm, ...personalDetails } = allContext;
  const printing = function () {
    console.log(activeForm);
  };

  return (
    <>
      <div></div>
      <div>
        <p>{activeForm.company}</p>
        <p>{activeForm.role}</p>
        <p>{activeForm.description}</p>
      </div>
    </>
  );
}

export default ExperiencePreview;
