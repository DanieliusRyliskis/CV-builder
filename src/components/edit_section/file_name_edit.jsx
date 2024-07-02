import editSvg from "../../assets/edit.svg";
function FileNameEdit() {
  const focusForm = function () {
    document.getElementById("fileName").focus();
  };
  return (
    <div className="file-name-div">
      <label className="file-name-label" htmlFor="fileName">
        Change file name:
      </label>
      <input type="text" id="fileName" />
      <img
        className="edit_svg"
        src={editSvg}
        alt="edit icon"
        onClick={focusForm}
      />
    </div>
  );
}

export default FileNameEdit;
