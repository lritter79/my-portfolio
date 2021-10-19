import React from "react";
import contactStyle from "../styles/Contact.module.sass";

const contact = () => {
  return (
    <div className="nes-container is-rounded is-dark">
      <div className={contactStyle.iconContainer}>
        <a title="GitHub" href="https://github.com/lritter79">
          <i className="nes-icon github is-large"></i>
        </a>
        <a title="Linkedin" href="https://www.linkedin.com/in/levon-ritter/">
          <i className="nes-icon linkedin is-large"></i>
        </a>
      </div>
    </div>
  );
};

export default contact;
