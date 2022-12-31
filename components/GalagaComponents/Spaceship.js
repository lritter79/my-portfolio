import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "../../styles/Galaga.module.sass";
import Missle from "./Missle";
import { v4 as uuidv4 } from "uuid";

function Spaceship({ left }) {
  const [missles, setMissles] = useState([]);
  const ref = useRef(left);

  const keyDownHandler = (event) => {
    if (event.code === "Space") {
      createMissle();
    }
  };

  function createMissle() {
    let missle = { missleLeft: ref.current, id: Date.now() };
    setMissles((prev) => [...prev, missle]);
  }

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler, false);
    return () => window.removeEventListener("keydown", keyDownHandler, false);
  }, []);

  useEffect(() => {
    ref.current = left;
  }, [left]);

  useEffect(() => {
    //console.log(missles)
  }, [missles]);

  return (
    <>
      <div className={styles.pixelartToCss} style={{ left: `${left}px` }}>
        <div
          style={{ height: "52px", width: "62px" }}
          onClick={() => {
            createMissle();
          }}
        ></div>
      </div>
      {missles.map((missle, i) => {
        return <Missle left={missle.missleLeft} key={uuidv4()} />;
      })}
    </>
  );
}

export default Spaceship;
