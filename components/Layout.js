import React, { useState, useRef, useReducer, useEffect } from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";
import CustomHeader from "../components/CustomHeader";
import ArcadeButton from "./GalagaComponents/ArcadeButton";
import Meta from "../components/Meta";
import Starfield from "./StarComponents/Starfield";
import Spaceship from "./GalagaComponents/Spaceship";
import { useContainerDimensions } from "../functions/useContainerDimensions";
import { useDeviceOrientation } from "../functions/useDeviceOrientation";
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const directions = ["left", "right"];
  const { pathname } = useRouter();
  const boundary = 0;
  const { orientation, requestAccess, revokeAccess, orientationError } =
    useDeviceOrientation();
  const [isInverted, setIsInverted] = useState(false);
  const containerRef = useRef(null);
  const { width, height } = useContainerDimensions(containerRef);
  const galagaFeatureReady = false;

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
    if (pathname !== "/contact") {
      window.addEventListener("keydown", keyDownHandler, false);
    }
    return () => {
      revokeAccess();
      if (pathname !== "/contact") {
        window.removeEventListener("keydown", keyDownHandler, false);  
      }
    };
  }, []);

  useEffect(() => {
    dispatch({ type: "reset" });
  }, [width]);

  useEffect(() => {
    if (
      orientation?.gamma &&
      orientation?.gamma < 26 &&
      orientation?.gamma > -26
    ) {
      state.left = width / 2 + orientation.gamma * (width * 0.02);
    }
  }, [orientation?.gamma]);

  return (
    <div className={`${styles.container} ${isInverted ? styles.invert : ""}`}>
      <CustomHeader setIsInverted={setIsInverted} />
      <Meta />
      <main className={styles.main}>
        <div
          className={`nes-container is-dark with-title ${styles.innerContainer}`}
        >
          <div>
            {children}
            {pathname !== "/contact" && 
            <div className={styles.galagaContainer} ref={containerRef}>
              <Spaceship left={state.left} />
              {galagaFeatureReady && (
                <button
                  type="button"
                  onClick={() => {
                    const handlePermission = async () => {
                      let access = await requestAccess();
                    };

                    handlePermission();
                  }}
                  title="Play"
                >
                  {orientationError ? `${orientationError}` : "Play"}
                </button>
              )}
              <ArcadeButton/>
            </div>} 
            
          </div>
          <Starfield isInverted={isInverted} />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
