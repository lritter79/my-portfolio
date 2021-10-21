import React from "react";
import { portfolioArray } from "../../data/portfolioArray";
import { Link } from "@mui/material";
import NesContainer from "../../components/NesContainer";

const projects = () => {
  console.log(portfolioArray);
  return (
    <NesContainer title="Projects">
      <ul className="nes-list is-circle">
        {portfolioArray.map((project, i) => (
          <li style={{ wordBreak: "break-all" }} key={i}>
            <Link href={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </NesContainer>
  );
};

export default projects;
