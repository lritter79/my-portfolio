import React from "react";
import { portfolioArray } from "../../data/portfolioArray";
import { Link } from "@mui/material";

const projects = () => {
  console.log(portfolioArray);
  return (
    <div>
      <ul className="nes-list is-circle">
        {portfolioArray.map((project, i) => (
          <li style={{ wordBreak: "break-all" }} key={i}>
            <Link href={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default projects;
