import React from "react";
import { portfolioArray } from "../../data/portfolioArray";
import { Link } from "@mui/material";
import NesContainer from "../../components/NesContainer";
import Project from "../../components/Project";

const projects = () => {
  return (
    <NesContainer title="Projects">
      {portfolioArray.map((project, i) => (
        <Project project={project} key={project.id} index={i}></Project>
      ))}
    </NesContainer>
  );
};

export default React.memo(projects);
