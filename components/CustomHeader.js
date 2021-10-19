import React from "react";
import headerStyles from "../styles/Header.module.sass";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
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
        <Link
          variant="h6"
          href="/"
          underline="none"
          className={headerStyles.h6}
        >
          Levon Ritter
        </Link>

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
          border: "1px solid white",
          backgroundColor: "black",
        }}
      >
        <ul className="nes-list is-circle">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </AppBar>
  );
};

export default CustomHeader;
