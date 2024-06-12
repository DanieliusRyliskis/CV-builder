// This is the provider component
import Header from "./components/header";
import ResumePreview from "./components/resume_section/resume_preview";
import EditWindow from "./components/edit_window";
import { useState, createContext } from "react";

export const personalDetailsContext = createContext();

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

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
        />
        <personalDetailsContext.Provider
          value={{ fullName, email, phone, location, github, linkedin }}
        >
          <ResumePreview />
        </personalDetailsContext.Provider>
      </div>
    </>
  );
}

export default App;
