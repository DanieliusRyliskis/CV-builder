import { useContext } from "react";
import { personalDetailsContext } from "../../App";

function PersonalPreview() {
  const personalDetails = useContext(personalDetailsContext);
  const entries = Object.entries(personalDetails);
  // console.log(entries);
  // entries.map(([key, item]) => condition and output);
  return (
    <div>
      <h2>{personalDetails.fullName}</h2>
    </div>
  );
}

export default PersonalPreview;
