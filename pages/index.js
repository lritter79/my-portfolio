import homeStyles from "../styles/Home.module.sass";
import { Grid } from "@mui/material";
import { skills } from "../data/skillsArray";
import Image from "next/image";

export default function Home() {
  return (
    <div className="nes-container is-dark is-centered with-title">
      <p className="title">Hello</p>
      <h5>My name is Levon Ritter. I`m a full stack web developer</h5>
      <div>
        <i className="nes-icon github is-large"></i>

        <i className="nes-icon linkedin is-large"></i>
      </div>
    </div>
  );
}
