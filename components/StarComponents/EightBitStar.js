import React, { useState, useRef } from "react";
import starStyles from "../../styles/EightBitStar.module.sass";
import { useSpring, animated } from "react-spring";

const EightBitStar = ({ bgColor, delay }) => {
  const [paused, setIsPaused] = useState(false);
  const [leftvw, setLeftvw] = useState(Math.random() * 97);
  const hasCompleted = useRef(false);
  // useEffect(() => {
  //   //console.log("rendering");
  //   const timer = setInterval(() => setLeftvw(Math.random() * 97), 10000);
  //   // clearing interval
  //   return () => clearInterval(timer);
  // });
  const animationStyles = useSpring({
    onStart: () => {
      hasCompleted.current = true;
    },
    loop: true,
    reset: true,
    delay: hasCompleted.current ? 0 : delay * Math.random() * 10000,
    config: { duration: 10000 },
    to: async (next, cancel) => {
      await next({ top: "-10%", opacity: 1 });
    },
    from: { top: "100%", opacity: 0, left: `${Math.random() * 97}vw` },
  });
  const flickerStyles = useSpring({
    loop: { reverse: true },
    reset: true,
    config: { duration: 1000 },
    to: { filter: "blur(3px)" },
    from: { filter: "blur(2px)" },
  });

  return (
    <animated.div
      onClick={() => setIsPaused(!paused)}
      className={starStyles.star}
      style={{
        backgroundColor: bgColor,
        ...flickerStyles,
        ...animationStyles,
      }}
    ></animated.div>
  );
};

export default EightBitStar;
