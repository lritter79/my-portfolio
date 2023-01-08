import React, { useState, useRef, useReducer, useEffect } from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";
import CustomHeader from "../components/CustomHeader";
import ArcadeButton from "./GalagaComponents/ArcadeButton";
import Meta from "../components/Meta";
import Starfield from "./StarComponents/Starfield";
import Spaceship from "./GalagaComponents/Spaceship";
import { useRouter } from 'next/router';
import GalagaContainer from "./GalagaComponents/GalagaContainer";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const [isInverted, setIsInverted] = useState(false);



  return (
    <div className={`${styles.container} ${isInverted ? styles.invert : ""}`}>
      <CustomHeader setIsInverted={setIsInverted} />
      <Meta />
      <main className={styles.main}>
        <div
          className={`nes-container is-dark with-title ${styles.innerContainer}`}
        >
          <div>
            {children}
            {pathname !== "/contact" && 
            <GalagaContainer/>} 
            
          </div>
          <Starfield isInverted={isInverted} />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
