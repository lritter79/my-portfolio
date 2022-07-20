import homeStyles from "../styles/Home.module.sass";
import { skillsArray } from "../data/technicalSkillsArray";
import { useState, useEffect } from "react";
import NesContainer from "../components/NesContainer";
import useSWR from "swr";
import { colorByClassArr } from "../data/colorArray";
import Skills from "../components/Skills";

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
  const [seconds, setSeconds] = useState(0);
  const repoUrl = `https://api.github.com/users/lritter79/repos`;
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async function FetchMostRecent(url) {
    await sleep(3000);
    const res = await fetch(url);
    //console.log(res);
    const repos = await res.json();
    //console.log(repos);
    //const test = await setTimeout(5000, () => console.log(repos));
    let sortedRepos = repos
          .filter(repo => repo?.description)
          .sort(
            (a, b) => new Date(a.pushed_at) - new Date(b.pushed_at)
          );
    //console.log(sortedRepos[sortedRepos.length - 1]);

    return sortedRepos.length > 0 ? sortedRepos[sortedRepos.length - 1] : null;
  }
  const { data, error } = useSWR(repoUrl, FetchMostRecent, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      //console.log(seconds);
      if (seconds === 10) setSeconds(0);
      else setSeconds(seconds + 1);
      
    }, 500);
    // clearing interval
    return () => clearInterval(timer);
  });

  useEffect(() => {
    //console.log(skillsArray);
  }, []);

  //console.log(mostRecentlyUpdated);
  return (
    <NesContainer title="Hello">
      <h5>My name is Levon Ritter. I`m a full stack web developer</h5>
      <div>
        <div className={`nes-badge is-splited ${homeStyles.nesBadge}`}>
          <span className="is-dark">Current</span>
          <span className="is-success">Project</span>
        </div>
        {(!data || error) && (
          <>
            <p>Now Loading ...</p>
            <progress
              className="nes-progress is-success"
              value={seconds * 20}
              max="100"
            >{`${seconds * 20}%`}</progress>
          </>
        )}
        {data && (
          <div className="nes-container is-rounded is-dark">
            <a href={data.svn_url}>
              <p>{data.description}</p>
            </a>
          </div>
        )}
      </div>
      <Skills />
    </NesContainer>
  );
}
