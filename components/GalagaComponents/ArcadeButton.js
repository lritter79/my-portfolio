import React from "react";
import styles from "../../styles/ArcadeButton.module.scss";

function ArcadeButton({ color, title, callbackFxn }) {
  return (
    <div className={styles.buttonContainer}>
      {" "}
      <button
        type="button"
        title={title}
        onClick={callbackFxn}
        className={`${styles.pushSkeuo} ${styles.push} ${
          color === "red"
            ? styles.red
            : color === "green"
            ? styles.green
            : styles.white
        }`}
      ></button>
      {title}
    </div>
  );
}

export default ArcadeButton;
