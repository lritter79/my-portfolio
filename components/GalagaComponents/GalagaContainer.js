import React, { useState, useRef, useReducer, useEffect } from "react";
import ArcadeButton from "./ArcadeButton";
import styles from "../../styles/Galaga.module.sass";
import { useDeviceOrientation } from "../../functions/useDeviceOrientation";
import { useContainerDimensions } from "../../functions/useContainerDimensions";
import Spaceship from "./Spaceship";
import Missle from "./Missle";
import { v4 as uuidv4 } from "uuid";

function GalagaContainer() {
  const directions = ["left", "right"];
  const [missles, setMissles] = useState([]);
  const lastFiredTimeRef = useRef(0);
  function createMissle() {
    if (Date.now() > lastFiredTimeRef.current + 1500) {
      lastFiredTimeRef.current = Date.now();
      let newMissle = { missleLeft: state.left, id: uuidv4() };
      setMissles((prev) => [...prev, newMissle]);
      setTimeout(() => {
        setMissles((prev) =>
          prev.filter((missle) => missle.id != newMissle.id)
        );
      }, 9000);
    }
  }
  const boundary = 0;

  const containerRef = useRef(null);
  const galagaFeatureReady = false;
  const { orientation, requestAccess, revokeAccess, orientationError } =
    useDeviceOrientation();
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
    window.addEventListener("keydown", keyDownHandler, false);

    return () => {
      revokeAccess();
      window.removeEventListener("keydown", keyDownHandler, false);
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

  const clickHandler = () => {
    createMissle();
  };

  return (
    <div className={styles.galagaContainer} ref={containerRef}>
      <div className={styles.shipRow}>
        <Spaceship left={state.left} createMissle={createMissle} />
        {missles.map((missle, i) => {
        return (
          <Missle left={missle.missleLeft} id={missle.id} key={missle.id} />
        );
      })}
      </div>
      <div className={styles.buttonRow}>
        {" "}
        {galagaFeatureReady && (
          <button
            type="button"
            
            title="Play"
          >
            {orientationError ? `${orientationError}` : "Play"}
          </button>
        )}
        <ArcadeButton callbackFxn={clickHandler} title={<p>Fire</p>} />
        <ArcadeButton
        callbackFxn={() => {
          const handlePermission = async () => {
            let access = await requestAccess();
          };

          handlePermission();
        }}
          title={
            <>
              <p>Start</p>
            </>
          }
        />
      </div>
    </div>
  );
}

export default GalagaContainer;
