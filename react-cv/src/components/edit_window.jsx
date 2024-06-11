import FileNameEdit from "./edit_section/file_name_edit.jsx";
import PersonalDetails from "./edit_section/personal_details.jsx";
import { useState } from "react";

function EditWindow() {
  const [fullName, setFullName] = useState();
  return (
    <div>
      <FileNameEdit fullNameSend={fullName} />
      <PersonalDetails fName={setFullName} />
      <p>{fullName}</p>
    </div>
  );
}

export default EditWindow;

// function Display() {
//   return <div>{number}</div>;
// }

// function Dice({ callback }) {
//   return (
//     <button onClick={() => callback(Math.floor(Math.random() * 6) + 1)}>
//       Roll Dice
//     </button>
//   );
// }
// // Parent component
// function Parent() {
//   const [number, setNumber] = React.useState(1);
//   return (
//     <div>
//       <Display number={number} />
//       <Dice callback={setNumber} />
//     </div>
//   );
// }
