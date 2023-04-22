import homeStyles from "../styles/Home.module.sass";
import { useEffect, useReducer, useRef } from "react";
import NesContainer from "../components/NesContainer";
import useSWR from "swr";
import Skills from "../components/Skills";
import CustomProgressBar from "../components/CustomProgressBar/CustomProgressBar";
import Spaceship from "../components/GalagaComponents/Spaceship";
import ChameleonParagraph from "../components/ChameleonParagraph";
import { useContainerDimensions } from "../functions/useContainerDimensions";
import { useDeviceOrientation } from "../functions/useDeviceOrientation";
//this is what fetches the most repo I've been woring on, but it's static, so it's based on the last time the portfolio was commited
//so I'm commenting this out to switch to dynamically loading the most recent project
// export const getStaticProps = async () => {
//   const res = await fetch(`https://api.github.com/users/lritter79/repos`);
//   const repos = await res.json();
//   let sortedRepos = repos.sort(
//     (a, b) => new Date(a.pushed_at) - new Date(b.pushed_at)
//   );
//   let mostRecentlyUpdated =
//     sortedRepos.length > 0 ? sortedRepos[sortedRepos.length - 1] : null;
//   //this is how we get static props
//   //props must return a JSON object
//   return { props: { mostRecentlyUpdated } };
// };

export default function Home() {
  const repoUrl = `https://api.github.com/users/lritter79/repos`;
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async function FetchMostRecent(url) {
    await sleep(3000);
    const res = await fetch(url);
    const repos = await res.json();
    let sortedRepos = repos
      .filter((repo) => repo?.description)
      .sort((a, b) => new Date(a.pushed_at) - new Date(b.pushed_at));
    return sortedRepos.length > 0 ? sortedRepos[sortedRepos.length - 1] : null;
  }

  const { data, error } = useSWR(repoUrl, FetchMostRecent, 3);

  return (
    <NesContainer title="Hello">
      <div className={homeStyles.missle}></div>
      <div>
        <h5>My name is Levon Ritter. I`m a full stack web developer</h5>
      </div>
      {/* <h5>My name is Levon Ritter. I`m a full stack web developer</h5> */}

      <div>
        <div className={`nes-badge is-splited ${homeStyles.nesBadge}`}>
          <span className="is-dark">Current</span>
          <span className="is-success">Project</span>
        </div>
        {(!data || error) && (
          <>
            <p>Now Loading ...</p>
            <CustomProgressBar />
          </>
        )}
        {data && (
          <div className="nes-container is-rounded is-dark">
            <a href={data.svn_url}>
              <ChameleonParagraph>{data.description}</ChameleonParagraph>
            </a>
          </div>
        )}
      </div>
      <Skills />
    </NesContainer>
  );
}
