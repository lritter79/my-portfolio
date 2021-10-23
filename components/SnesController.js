import React from "react";
import controllerStyles from "../styles/Snes.module.sass";

const SnesController = () => {
  return (
    <div id="">
      <div id="leftCircle" className={controllerStyles.circle}>
        <div className={controllerStyles.arrow} id="top-arrow"></div>
        <div className={controllerStyles.arrow} id="left-arrow"></div>
        <div className={controllerStyles.arrow} id="middle-arrow"></div>
        <div className={controllerStyles.arrow} id="right-arrow"></div>
        <div className={controllerStyles.arrow} id="bottom-arrow"></div>
        ddvdvl
        <div id="arrow-container"></div>
      </div>
      <div id="rectangle">
        <div id="select" className={controllerStyles.pill - button}></div>
        <div id="start" className={controllerStyles.pill - button}></div>
        <p className={controllerStyles.pill - text} id="select-text">
          SELECT
        </p>
        <p className={controllerStyles.pill - text} id="start-text">
          START
        </p>
      </div>
      <div id="rightCircle" className={controllerStyles.circle}>
        <div id="button-container"></div>
        <p className={controllerStyles.button - letter} id="letter-x">
          X
        </p>
        <p className={controllerStyles.button - letter} id="letter-y">
          Y
        </p>
        <p className={controllerStyles.button - letter} id="letter-a">
          A
        </p>
        <p className={controllerStyles.button - letter} id="letter-b">
          B
        </p>
        <div className={controllerStyles.circle - button} id="x"></div>
        <div className={controllerStyles.circle - button} id="y"></div>
        <div className={controllerStyles.circle - button} id="a"></div>
        <div className={controllerStyles.circle - button} id="b"></div>
      </div>
    </div>
  );
};

export default SnesController;
