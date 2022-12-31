import React, { useEffect } from 'react'
import styles from "../../styles/Galaga.module.sass";

const Missle = ({left}) => {
useEffect(()=>{console.log(left)},[])  

return (
    <div className={styles.missle} style={{left: `${left+24}px`}}></div>
  )
}

export default Missle