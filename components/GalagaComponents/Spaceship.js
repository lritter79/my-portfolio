import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "../../styles/Galaga.module.sass";
import Missle from "./Missle";
import { v4 as uuidv4 } from "uuid";

function Spaceship({ left }) {
  const [missles, setMissles] = useState([]);
  const ref = useRef(left);
  const lastFiredTimeRef = useRef(0);

  const keyDownHandler = (event) => {
    if (event.code === "Space") {
      createMissle();
    }
  };

  const clickHandler = (event) => {
    createMissle();
  };

  function createMissle() {
    if (Date.now() > lastFiredTimeRef.current + 1500) {
      lastFiredTimeRef.current = Date.now();
      let newMissle = { missleLeft: ref.current, id: uuidv4() };
      setMissles((prev) => [...prev, newMissle]);
      setTimeout(() => {
        setMissles((prev) =>
          prev.filter((missle) => missle.id != newMissle.id)
        );
      }, 9000);
    }
  }

  useEffect(() => {
    console.log("ship renders");
    window.addEventListener("keydown", keyDownHandler, false);
    return () => window.removeEventListener("keydown", keyDownHandler, false);
  }, []);

  useEffect(() => {
    ref.current = left;
  }, [left]);

  useEffect(() => {
    console.log(missles);
  }, [missles]);

  // const timer = setInterval(() => {
  //   if (!isOpen) {
  //     pitchIndex = pitchIndex + 1;
  //   } else {
  //     pitchIndex = pitchIndex - 1;
  //   }

  //   oscillatorRoot.frequency.value = birdUpPitchArray[pitchIndex][0];
  //   oscillatorFour.frequency.value = birdUpPitchArray[pitchIndex][1];
  //   oscillatorFive.frequency.value = birdUpPitchArray[pitchIndex][2];
  //   oscillatorSub.frequency.value = birdUpPitchArray[pitchIndex][3];
  // }, 1000);
  // // clearing interval
  // setTimeout(() => {
  //   clearInterval(timer);

  // }, 749);

  return (
    <>
      <div className={styles.pixelartToCss} style={{ left: `${left}px` }}>
        <div
          style={{ height: "52px", width: "62px" }}
          onClick={clickHandler}
        ></div>
      </div>
      {missles.map((missle, i) => {
        return (
          <Missle left={missle.missleLeft} id={missle.id} key={missle.id} />
        );
      })}
    </>
  );
}

export default Spaceship;
