import React from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";
import CustomHeader from "../components/CustomHeader";
import Meta from "../components/Meta";
import Starfield from "./StarComponents/Starfield";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <CustomHeader />
      <Meta />
      <main className={styles.main}>
        <div
          className={`nes-container is-dark with-title ${styles.innerContainer}`}
        >
          {children}
          <Starfield />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default React.memo(Layout);
