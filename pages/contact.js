import React from "react";
import contactStyle from "../styles/Contact.module.sass";
import NesContainer from "../components/NesContainer";

const contact = () => {
  return (
    <NesContainer title="Contact">
      <div className={contactStyle.iconContainer}>
        <a title="GitHub" href="https://github.com/lritter79">
          <i className="nes-icon github is-large"></i>
        </a>
        <a title="Linkedin" href="https://www.linkedin.com/in/levon-ritter/">
          <i className="nes-icon linkedin is-large"></i>
        </a>
      </div>
    </NesContainer>
  );
};

export default contact;
