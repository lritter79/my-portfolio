import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "../../styles/Galaga.module.sass";

function Spaceship({ left, createMissle }) {
  const ref = useRef(left);

  const keyDownHandler = (event) => {
    if (event.code === "Space") {
      createMissle();
    }
  };

 
  

  useEffect(() => {
    //temporarily disabling
    //window.addEventListener("keydown", keyDownHandler, false);
    //return () => window.removeEventListener("keydown", keyDownHandler, false);
  }, []);

  useEffect(() => {
    ref.current = left;
  }, [left]);

  // useEffect(() => {
  //   console.log(missles);
  // }, [missles]);

  return (
    <>
      <div className={styles.pixelartToCss} style={{ left: `${left}px` }}>
        <div
          style={{ height: "52px", width: "62px" }}
        ></div>
      </div>
      
    </>
  );
}

export default Spaceship;
