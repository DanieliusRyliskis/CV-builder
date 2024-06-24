// This is the provider component
import Header from "./components/header";
import ResumePreview from "./components/resume_section/resume_preview";
import EditWindow from "./components/edit_window";
import { useState, createContext } from "react";

export const previewContext = createContext();

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [activeForm, setActiveForm] = useState({});
  const [passiveForm, setPassiveForm] = useState({});

  return (
    <>
      <Header />
      <div className="main-flex">
        <EditWindow
          nameParent={setFullName}
          emailParent={setEmail}
          phoneParent={setPhone}
          locationParent={setLocation}
          githubParent={setGithub}
          linkedinParent={setLinkedin}
          activeParent={setActiveForm}
          passiveParent={setPassiveForm}
        />
        <previewContext.Provider
          value={{
            fullName,
            email,
            phone,
            location,
            github,
            linkedin,
            activeForm,
            passiveForm,
          }}
        >
          <ResumePreview />
        </previewContext.Provider>
      </div>
    </>
  );
}

export default App;
