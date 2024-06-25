import { useContext, useEffect } from "react";
import { previewContext } from "../../App";

function ExperiencePreview() {
  const allContext = useContext(previewContext);
  const { activeForm, passiveForm, ...personalDetails } = allContext;

  const activeList = Object.entries(activeForm).map(function ([key, value]) {
    if (value !== "") {
      return <li key={key}>{value}</li>;
    }
  });
  const passiveList = passiveForm.map((obj, index) => console.log(obj));
  useEffect(() => {}, [passiveForm]);

  return (
    <>
      <div>{/* <ul>{passiveList}</ul> */}</div>
      <div className="active_form">
        <ul>{activeList}</ul>
      </div>
    </>
  );
}

export default ExperiencePreview;
