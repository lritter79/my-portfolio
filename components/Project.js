import React from "react";
import RainbowSpans from "./RainbowSpans";
import { Typography } from "@mui/material";
import { colorArr } from "../data/colorArray";

const Project = ({ project, index }) => {
  return (
    <div>
      <RainbowSpans word={project.name} />
      <Typography>{project.description}</Typography>

      {project?.siteUrl && (
        <a
          href={project.siteUrl}
          style={{
            color: colorArr[index % 4],
            fontFamily: '"Press Start 2P", sans-serif',
          }}
        >
          Try it yourself!
        </a>
      )}
      <div>
        <a title="GitHub" href={project.repoUrl}>
          <i className="nes-icon github is-large"></i>
        </a>
      </div>
    </div>
  );
};

export default React.memo(Project);
