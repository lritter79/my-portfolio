import React, { useState } from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";
import CustomHeader from "../components/CustomHeader";
import Meta from "../components/Meta";
import Starfield from "./StarComponents/Starfield";

const Layout = ({ children }) => {
  const [isInverted, setIsInverted] = useState(false);

  return (
    <div className={`${styles.container} ${isInverted ? styles.invert : ""}`}>
      <CustomHeader setIsInverted={setIsInverted} />
      <Meta />
      <main className={styles.main}>
        <div
          className={`nes-container is-dark with-title ${styles.innerContainer}`}
        >
          {children}
          <Starfield isInverted={isInverted} />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
