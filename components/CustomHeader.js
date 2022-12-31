import React from "react";
import headerStyles from "../styles/Header.module.sass";
import { AppBar, Toolbar, Icon, Link } from "@mui/material";
import { useRef, useState } from "react";
import RainbowSpans from "./RainbowSpans";
import { birdUpPitchArray } from "../data/birdUpPitchArray";

const CustomHeader = ({ setIsInverted }) => {
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
    handleClick();
  };
  const toggleOpen = (e) => {
    handleClick();
    setIsOpen(!isOpen);
  };
  const handleOnmouseover = (e) => {
    setIsInverted(true);
  };

  const handleOnmouseout = (e) => {
    setIsInverted(false);
  };

  const oscillatorFactory = (audioContext, frequency, gain) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sawtooth";
    oscillator.connect(gain);
    oscillator.frequency.value = frequency;
    return oscillator;
  };

  const handleClick = () => {
    let pitchIndex = isOpen ? 2 : 0;
    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = audio.createGain();
    gainNode.gain.value = 0.05;
    gainNode.connect(audio.destination);
    let oscillatorRoot = oscillatorFactory(
      audio,
      birdUpPitchArray[pitchIndex][0],
      gainNode
    );
    let oscillatorFour = oscillatorFactory(
      audio,
      birdUpPitchArray[pitchIndex][1],
      gainNode
    );
    let oscillatorFive = oscillatorFactory(
      audio,
      birdUpPitchArray[pitchIndex][2],
      gainNode
    );
    let oscillatorSub = oscillatorFactory(
      audio,
      birdUpPitchArray[pitchIndex][3],
      gainNode
    );

    oscillatorRoot.start();
    oscillatorFour.start();
    oscillatorFive.start();
    oscillatorSub.start();

    const timer = setInterval(() => {
      if (!isOpen) {
        pitchIndex = pitchIndex + 1;
      } else {
        pitchIndex = pitchIndex - 1;
      }

      oscillatorRoot.frequency.value = birdUpPitchArray[pitchIndex][0];
      oscillatorFour.frequency.value = birdUpPitchArray[pitchIndex][1];
      oscillatorFive.frequency.value = birdUpPitchArray[pitchIndex][2];
      oscillatorSub.frequency.value = birdUpPitchArray[pitchIndex][3];
    }, 250);
    // clearing interval
    setTimeout(() => {
      clearInterval(timer);
      oscillatorRoot.stop();
      oscillatorFour.stop();
      oscillatorFive.stop();
      oscillatorSub.stop();
      //off by 1 millisecond in order to not trigger the set interval a fourth time and get an out of index error
    }, 749);
  };

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <AppBar position="static">
      <Toolbar
        sx={{
          padding: 0,
          backgroundColor: "#212529",
        }}
      >
        <div
          className={`${headerStyles.easterEgg}`}
          onMouseOver={handleOnmouseover}
          onMouseOut={handleOnmouseout}
        >
          <a href="https://codepen.io/lritterPen/pen/zYdoyQd">
            <i className="snes-jp-logo"></i>
          </a>
        </div>

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
