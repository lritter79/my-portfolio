import React from "react";
import headerStyles from "../styles/Header.module.sass";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useRef, useState } from "react";

const CustomHeader = () => {
  //const anchorEl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  //const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleOpen = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <AppBar position="static">
      <Toolbar
        sx={{
          padding: 0,
        }}
      >
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontFamily: `"Press Start 2P"`, paddingLeft: "16px" }}
        >
          Levon Ritter
        </Typography>
        <div className={headerStyles.buttonContainer}>
          <button
            type="button"
            className={`nes-btn ${headerStyles.button}`}
            onClick={toggleOpen}
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
      </Toolbar>
      <div
        style={{
          display: isOpen ? "block" : "none",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      >
        <div className="lists">
          <ul className="nes-list is-circle">
            <li>Good morning.</li>
            <li>Thou hast had a good nights sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </ul>
        </div>
      </div>
    </AppBar>
  );
};

export default CustomHeader;
