import { useState, useEffect } from "react";

function Header({ shouldDownloadParent }) {
  const [signal, setSignal] = useState("");

  useEffect(() => {
    shouldDownloadParent(signal);
  }, [signal]);

  const downloadPDF = function () {
    setSignal((s) => [...s, "update"]);
  };

  return (
    <header>
      <button className="save-button">
        Save
      </button>
      <h1>
        <span>CV</span>-Builder
      </h1>
      <button className="download-button" onClick={downloadPDF}>
        Download
      </button>
    </header>
  );
}

export default Header;
