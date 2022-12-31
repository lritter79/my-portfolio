import React from 'react'
import styles from "../../styles/Galaga.module.sass";

function Spaceship({left}) {
  return (
    <div className={styles.pixelartToCss} style={{left: `${left}px`}}></div>
    )
}

export default Spaceship