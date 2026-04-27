import React from "react";
import "../shared/sstyles/Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="headphone">
        <div className="ear left"></div>
        <div className="ear right"></div>
        <div className="band"></div>
      </div>

      <h1 className="logo-text">
        {"SpotSonger".split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;