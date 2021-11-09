import React from "react";
import styles from "../../styles/EightBitStar.module.sass";

const EightBitStar = ({ bgColor, leftvw }) => {
  return (
    <div
      className={styles.star}
      style={{
        backgroundColor: bgColor,
        left: `${leftvw + 3}vw`,
      }}
    ></div>
  );
};

export default EightBitStar;
