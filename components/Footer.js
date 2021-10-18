import React from "react";
import { Typography } from "@mui/material";
import styles from "../styles/Home.module.sass";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a> */}
      {
        //sx is a style override you can use
      }
      <Typography
        component="span"
        sx={{
          fontFamily: `"Press Start 2P"`,
          fontSize: "0.5rem",
          color: "white",
        }}
      >
        © 2021 Levon Ritter
      </Typography>
    </footer>
  );
};

export default Footer;
