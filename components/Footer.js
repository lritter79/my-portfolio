import React from "react";
import { Typography } from "@mui/material";
import footerStyles from "../styles/Footer.module.sass";
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Typography
        component="span"
        sx={{
          fontFamily: `"Press Start 2P"`,
          fontSize: "0.5rem",
          color: "white",
        }}
      >
        © 2023 Levon Ritter
      </Typography>
    </footer>
  );
};

export default Footer;
