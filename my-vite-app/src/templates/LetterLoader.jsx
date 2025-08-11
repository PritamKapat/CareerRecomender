import React from "react";
import "../styles/LetterLoader.css";

const LetterLoader = () => {
  return (
    <div id="page-loader">
      <div className="loader-card">
        <div className="loader-text">
          <p>loading</p>
          <div className="loader-words">
            <span className="loader-word">buttons</span>
            <span className="loader-word">forms</span>
            <span className="loader-word">switches</span>
            <span className="loader-word">cards</span>
            <span className="loader-word">buttons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterLoader;
