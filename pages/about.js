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
        My next job was full stack developer at Automated Health Systems. I
        worked on a fullstack team there using .Net and Angular. Then one of my
        friends offered me a job at the now defunct startup OtterTune, Inc. I
        worked there for two year and got promoted to Software Engineer II,
        branching out into fullstack engineering and dev ops. Currently I work
        on a freelance basic doing web development and blockchain development
        for different clients in the Pittsburgh area. I am always looking for
        new clients and opportunities.
      </Typography>
    </NesContainer>
  );
};

export default React.memo(about);
