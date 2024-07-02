import { useContext, useEffect } from "react";
import { previewContext } from "../../App";

function ExperiencePreview() {
  const allContext = useContext(previewContext);
  const { activeForm, passiveForm, showExp, ...personalDetails } = allContext;

  useEffect(() => {
    if (showExp.length !== 0 && showExp !== "") {
      document.querySelector(".experience-title").classList.remove("hidden");
    }
  }, [showExp]);

  const passiveList = passiveForm.map((obj, index) => {
    return (
      <li key={index}>
        <div className="form_element">
          <h5>{obj.company}</h5>
          <h6>{obj.role}</h6>
          <h6>{obj.description}</h6>
        </div>
      </li>
    );
  });
  useEffect(() => {}, [passiveForm]);

  return (
    <>
      <div className="experience">
        <div className="experience-title hidden">
          <h5>Experience</h5>
          <hr />
        </div>
        <div className="passive_form">
          <ul>{passiveList}</ul>
        </div>
        <div className="active_form">
          <ul>
            <li>
              <div className="form_element">
                <h5>{activeForm.company}</h5>
                <h6>{activeForm.role}</h6>
                <h6>{activeForm.description}</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ExperiencePreview;
