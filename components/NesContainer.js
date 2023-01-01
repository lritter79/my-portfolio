import React from "react";
import { useSpring, animated } from "react-spring";

const NesContainer = ({ children, title }) => {
  const animationStyles = useSpring({
    config: { mass: 5, tension: 2000, friction: 2000, duration: 900 },
    from: { opacity: 0, letterSpacing: "-10px" },
    to: { opacity: 1, letterSpacing: "0px" },
  });
  return (
    <div className="nes-container is-dark is-centered with-title">
      <animated.p style={animationStyles} className="title">
        {title}
      </animated.p>
      {children}
    </div>
  );
};

export default NesContainer;
