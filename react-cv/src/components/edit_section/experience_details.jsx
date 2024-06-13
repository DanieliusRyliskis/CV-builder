import AddSVG from "../../assets/add.svg";
import ArrowSvgLeft from "./arrow_svg_left";
import ArrowSvgRight from "./arrow_svg_right";
function ExperienceDetails() {
  const revealForms = function () {};

  return (
    <>
      <button className="button-add button--active" onClick={revealForms}>
        Experience <img src={AddSVG} alt="Add icon" />
      </button>
      <div className="form form--experience">
        <div className="form--hidden">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" />
        </div>
        <div className="form--hidden">
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" />
        </div>
        <div className="form--hidden text-area">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description"></textarea>
        </div>
      </div>
    </>
  );
}

export default ExperienceDetails;
