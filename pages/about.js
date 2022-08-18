import { Typography } from "@mui/material";
import React from "react";
import NesContainer from "../components/NesContainer";

const about = () => {
  return (
    <NesContainer title="About">
      <Typography>
        I learned front-end web design from scratch when I was put in charge of
        editing the website at the non-profit at which I interned. Coding became
        a fun, new creative outlet for me. I enrolled in Tech Elevator to learn
        more about full-stack web development. After completing the program, I
        got my first developer role at Civil and Environmental Consultants, Inc. 
        My next job was full stack developer at Automated Health Systems.
        Currently, I am a front end engineer at Ottertune, Inc.
      </Typography>
    </NesContainer>
  );
};

export default React.memo(about);
