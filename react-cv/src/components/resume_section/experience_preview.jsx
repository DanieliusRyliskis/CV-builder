import { useContext, useEffect } from "react";
import { previewContext } from "../../App";

function ExperiencePreview() {
  const allContext = useContext(previewContext);
  const { activeForm, passiveForm, ...personalDetails } = allContext;

  const passiveList = passiveForm.map((obj, index) => {
    return (
      <li key={index}>
        <div>
          <h5 className="bolded">{obj.company}</h5>
          <h5>{obj.role}</h5>
          <h5>{obj.description}</h5>
        </div>
      </li>
    );
  });
  useEffect(() => {}, [passiveForm]);

  return (
    <>
      <div className="Experience">
        <h5>Experience</h5>
        <hr />
        <div>
          <ul>{passiveList}</ul>
        </div>
        <div className="active_form">
          <ul>
            <li>
              <div>
                <h5 className="bolded">{activeForm.company}</h5>
                <h5>{activeForm.role}</h5>
                <h5>{activeForm.description}</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ExperiencePreview;
