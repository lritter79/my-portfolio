import React, { useEffect } from "react";
import styles from "../../styles/Galaga.module.sass";

const Missle = ({ left, id }) => {
  // useEffect(() => {console.log(`rendering missle', ' ', ${id}`)
  // return ()=>console.log(`explode", ' ', ${id}`)}, []);

  return (
    <div className={styles.missle} style={{ left: `${left + 24}px` }}></div>
  );
};

export default Missle;
