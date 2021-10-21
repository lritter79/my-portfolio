import React from "react";

const NesContainer = ({ children, title }) => {
  return (
    <div className="nes-container is-dark is-centered with-title">
      <p className="title">{title}</p>
      {children}
    </div>
  );
};

export default NesContainer;
