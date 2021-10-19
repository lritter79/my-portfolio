import homeStyles from "../styles/Home.module.sass";
import { Grid } from "@mui/material";
import { skills } from "../data/skillsArray";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch(`https://api.github.com/users/lritter79/repos`);
  const repos = await res.json();
  let sortedRepos = repos.sort(
    (a, b) => new Date(a.pushed_at) - new Date(b.pushed_at)
  );
  let mostRecentlyUpdated =
    sortedRepos.length > 0 ? sortedRepos[sortedRepos.length - 1] : null;
  //this is how we get static props
  //props must return a JSON object
  return { props: { mostRecentlyUpdated } };
};

export default function Home({ mostRecentlyUpdated }) {
  console.log(mostRecentlyUpdated);
  return (
    <div className="nes-container is-dark is-centered with-title">
      <p className="title">Hello</p>
      <h5>My name is Levon Ritter. I`m a full stack web developer</h5>
      <div>
        <a
          href={mostRecentlyUpdated.svn_url}
          className={`nes-badge is-splited ${homeStyles.nesBadge}`}
        >
          <span className="is-dark">Current</span>
          <span className="is-success">Project</span>
        </a>
        <div className="nes-container is-rounded is-dark">
          <p>{mostRecentlyUpdated.description}</p>
        </div>
      </div>
      <div>
        <a href="https://github.com/lritter79">
          <i className="nes-icon github is-large"></i>
        </a>
        <a href="https://www.linkedin.com/in/levon-ritter/">
          <i className="nes-icon linkedin is-large"></i>
        </a>
      </div>
    </div>
  );
}
