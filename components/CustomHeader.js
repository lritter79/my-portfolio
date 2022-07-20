import React from "react";
import headerStyles from "../styles/Header.module.sass";
import { AppBar, Toolbar, Icon, Link } from "@mui/material";
import { useRef, useState } from "react";
import RainbowSpans from "./RainbowSpans";
import { pitchArray } from "../data/pitchArray";

const CustomHeader = () => {
  //const anchorEl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  let pitchIndex = 0;
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

  const handleClick = () => {
    const audio = new (window.AudioContext || window.webkitAudioContext)()
    const gainNode = audio.createGain()
    gainNode.gain.value = 0.05
    gainNode.connect(audio.destination)
    const oscillatorNode = audio.createOscillator()
    oscillatorNode.type = 'sawtooth'
    oscillatorNode.connect(gainNode)
    oscillatorNode.frequency.value = pitchArray[pitchIndex];
    oscillatorNode.start();
    const timer = setInterval(() => {
      oscillatorNode.frequency.value = pitchArray[pitchIndex];
      console.log(pitchIndex);
      if (pitchIndex == 3) pitchIndex = pitchIndex -4;
      if (pitchIndex < 3) pitchIndex = pitchIndex + 1;
    }, 125);
    // clearing interval
    setTimeout(() => {
      clearInterval(timer);
      oscillatorNode.stop();
      pitchIndex = 0;
    }, 1000);
}

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <AppBar position="static">
      <Toolbar
        sx={{
          padding: 0,
          backgroundColor: "#212529",
        }}
      >
        <a onClick={handleClick} href="https://codepen.io/lritterPen/pen/zYdoyQd">
          <i className="snes-jp-logo"></i>
        </a>
        <Link
          variant="h6"
          href="/"
          underline="none"
          className={headerStyles.h6}
        >
          <RainbowSpans word={"Levon Ritter"} />
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
          backgroundColor: "#212529",
        }}
      >
        <ul className="nes-list is-circle">
          <li>
            <Link className={headerStyles.a} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.a} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.a} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={headerStyles.a} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </AppBar>
  );
};

export default CustomHeader;
