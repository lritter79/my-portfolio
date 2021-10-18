import React from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
