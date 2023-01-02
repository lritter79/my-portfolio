import homeStyles from "../styles/Home.module.sass";
import {
  useEffect,
  useReducer,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
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

const directions = ["left", "right"];
const boundary = 40;

export default function Home() {
  const { orientation, requestAccess, revokeAccess, orientationError } = useDeviceOrientation();

  const repoUrl = `https://api.github.com/users/lritter79/repos`;
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const containerRef = useRef(null);
  const { width, height } = useContainerDimensions(containerRef);
  const initialState = { left: width / 2 };

  function reducer(state, action) {
    switch (action.type) {
      case directions[0]:
        if (state.left - width * 0.03 <= 0 - boundary)
          return { left: 0 - boundary };
        return { left: state.left - width * 0.03 };
      case directions[1]:
        if (state.left + width * 0.03 >= width + boundary)
          return { left: width + boundary };
        return { left: state.left + width * 0.03 };
      case "reset":
        return initialState;
      default:
        throw new Error();
    }
  }

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

  const [state, dispatch] = useReducer(reducer, initialState);

  // onKeyDown handler function
  const keyDownHandler = (event) => {
    if (event.code === "ArrowLeft") {
      dispatch({ type: "left" });
    }
    if (event.code === "ArrowRight") {
      dispatch({ type: "right" });
    }
  };



  useEffect(() => {
    const handlePermission = async () => {
      let access = await requestAccess();
      alert(access);
    };

    handlePermission();
    window.addEventListener("keydown", keyDownHandler, false);
    return () => { 
      revokeAccess()
      window.removeEventListener("keydown", keyDownHandler, false);
    }
  }, []);

  useEffect(() => {
    dispatch({ type: "reset" });
  }, [width]);




  return (
    <NesContainer title="Hello">
      <div className={homeStyles.missle}></div>
      <div>
        <h5>
          My name is Levon Ritter. I`m a full stack web developer
          {orientation ? `${orientation.gamma}`:'none'}
          {orientation}
          {orientationError && `${orientationError}`}
        </h5>
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
      <div className="galaga-container" ref={containerRef}>
        <Spaceship left={state.left} />
      </div>
    </NesContainer>
  );
}
