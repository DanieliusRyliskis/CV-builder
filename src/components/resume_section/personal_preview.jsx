import { useContext } from "react";
import { previewContext } from "../../App";
import emailSVG from "../../assets/mail.svg";
import phoneSVG from "../../assets/phone.svg";
import locationSVG from "../../assets/location.svg";
import githubSVG from "../../assets/github.svg";
import linkedinSVG from "../../assets/linkedin.svg";

function PersonalPreview() {
  const icons = {
    email: emailSVG,
    phone: phoneSVG,
    location: locationSVG,
    github: githubSVG,
    linkedin: linkedinSVG,
  };

  const allContext = useContext(previewContext);
  const { activeForm, passiveForm, showExp, ...personalDetails } = allContext;
  const links = Object.entries(personalDetails).map(function ([key, value]) {
    if (value !== "" && !["fullName", "github", "linkedin"].includes(key)) {
      return (
        <li key={key}>
          <img src={icons[key]} alt={`${key} icon`} />
          <h6>{value}</h6>
        </li>
      );
    } else if (value !== "" && ["github", "linkedin"].includes(key)) {
      return (
        <li key={key}>
          <a href={value}>
            <img src={icons[key]} alt={`${key} icon`} />
            <h6>{value}</h6>
          </a>
        </li>
      );
    } else {
      null;
    }
  });
  return (
    <div className="personal-preview">
      <h2 className="full-name">{personalDetails.fullName}</h2>
      <ul>{links}</ul>
    </div>
  );
}

export default PersonalPreview;

