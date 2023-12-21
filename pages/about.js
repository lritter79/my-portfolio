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
        My next job was full stack developer at Automated Health Systems. I started at my current company, OtterTune, Inc, in the summer of 2022 as a
        a Software Engineer I with a focus on front-end engineering. In the past year I&apos;ve been promoted to Software Engineer II, branching out into fullstack engineering and dev ops. 
      </Typography>
    </NesContainer>
  );
};

export default React.memo(about);
