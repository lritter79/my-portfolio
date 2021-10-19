import React from "react";
import RainbowSpans from "./RainbowSpans";

const Project = ({ project }) => {
  return (
    <div>
      <a href={project.siteUrl ? project.siteUrl : project.repoUrl}>
        <RainbowSpans word={project.name} />
      </a>

      <p>{project.description}</p>
    </div>
  );
};

export default Project;
