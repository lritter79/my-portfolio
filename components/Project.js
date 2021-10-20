import React from "react";
import RainbowSpans from "./RainbowSpans";
import { Typography } from "@mui/material";

const Project = ({ project }) => {
  return (
    <div>
      <a href={project.siteUrl ? project.siteUrl : project.repoUrl}>
        <RainbowSpans word={project.name} />
      </a>
      <Typography>{project.description}</Typography>
    </div>
  );
};

export default Project;
