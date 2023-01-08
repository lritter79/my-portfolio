import React from "react";
import styles from "../../styles/ArcadeButton.module.scss";

function ArcadeButton({ color, title, callbackFxn }) {
  return (
    <div>    <button
    type="button"
    title={title}
    className={`${styles.pushSkeuo} ${styles.push} ${
      color === "red"
        ? styles.red
        : color === "green"
        ? styles.green
        : styles.white
    }`}
  ></button>
  <p>{title}</p></div>

  );
}

export default ArcadeButton;
