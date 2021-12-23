import React, { useState, useRef, useEffect } from "react";
import starStyles from "../../styles/EightBitStar.module.sass";
import { useSpring, animated } from "react-spring";

const EightBitStar = ({ star }) => {
  const [flickerRate, setFlickerRate] = useState(Math.random() * 500)
/*   const [showStar, setShowStar] = useState(true)
  useEffect(() => {
    console.log("rendering");
    const timer = setInterval(flicker, 990);
    // clearing interval
    return () => clearInterval(timer);
  }); */

/*   function flicker() {
    console.log("flicker");

    if (star.isFlashing) {
      console.log("toggle flicker");

      setShowStar(!showStar)
    }
  } */
  // useEffect(() => {
  //   //console.log("rendering");
  //   const timer = setInterval(() => setLeftvw(Math.random() * 97), 10000);
  //   // clearing interval
  //   return () => clearInterval(timer);
  // });
  const animationStyles = useSpring({
    //onStart: () =>{ console.log('start') },
    loop: true,
    reset: true,
    config: { duration: 10000 },
    delay: Math.random() * 10000,
    to: async (next, cancel) => {
      await next({ top: "110%" });
    },
    from: { top: "-10%"},
  });
  
/*   const flickerStyles = useSpring({
    
    config: { duration: 1000 },
    to: { opacity: 0 },
    from: { opacity: 1 },
  }); */
  const sleep = ms => new Promise(res => {
    setTimeout(res, ms)
    console.log('sleep')
  });

  const flickerStyles = useSpring({
    loop: true,
    reset: false,
    delay: flickerRate,
    to: async (next, cancel) => {
      await sleep(flickerRate)
      await next({ opacity: star.isFlashing ? 0 : 1 })
      await sleep(flickerRate)
    },
    from: { opacity: 1 },
  })

  return (
    <animated.div
      className={starStyles.star}
      style={{
        backgroundColor: star.color,
        left: `${star.xPosition}%`,
        ...animationStyles,
        ...flickerStyles
      }}
    ></animated.div>
  );
};

export default EightBitStar;
