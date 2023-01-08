import React from 'react'
import styles from "../../styles/ArcadeButton.module.scss";


function ArcadeButton() {
  return (
    <button type='button' className={`${styles.pushSkeuo} ${styles.push} ${styles.red}`}></button>
  )
}

export default ArcadeButton