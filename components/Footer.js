import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
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
      <Typography component="span">© 2021 Levon Ritter</Typography>
    </footer>
  );
};

export default Footer;
