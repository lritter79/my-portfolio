import React from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";
import CustomHeader from "../components/CustomHeader";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <CustomHeader />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
