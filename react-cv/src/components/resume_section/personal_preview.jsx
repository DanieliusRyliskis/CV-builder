import { useContext } from "react";
import { personalDetailsContext } from "../../App";
import emailSVG from "../../assets/mail.svg";
import phoneSVG from "../../assets/phone.svg";
import locationSVG from "../../assets/location.svg";
import githubSVG from "../../assets/github.svg";
import linkedinSVG from "../../assets/linkedin.svg";

// eval(`${key}SVG`)

function PersonalPreview() {
  const icons = {
    email: emailSVG,
    phone: phoneSVG,
    location: locationSVG,
    github: githubSVG,
    linkedin: linkedinSVG,
  };

  const personalDetails = useContext(personalDetailsContext);
  const links = Object.entries(personalDetails).map(function ([key, value]) {
    if (value !== "" && !["fullName", "github", "linkedin"].includes(key)) {
      return (
        <li key={key}>
          <img src={icons[key]} alt={`${key} icon`} />
          {value}
        </li>
      );
    } else if (value !== "" && ["github", "linkedin"].includes(key)) {
      return (
        <li key={key}>
          <a href={value}>
            <img src={icons[key]} alt={`${key} icon`} />
            {value}
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

// [
//   [
//       "fullName",
//       "asdaasdas"
//   ],
//   [
//       "email",
//       "asdas"
//   ],
//   [
//       "phone",
//       "asdas"
//   ],
//   [
//       "location",
//       "asdasd"
//   ],
//   [
//       "github",
//       "asdas"
//   ],
//   [
//       "linkedin",
//       "asda"
//   ]
// ]
