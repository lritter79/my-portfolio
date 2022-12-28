import React from 'react'
import { useSpring, animated } from "react-spring";
import {colorArr} from "../data/colorArray"

let colors = colorArr.map((item) => {return {color: item}});
colors.push({color:"white"});
colors.push({color:"#212529"});

function ChameleonParagraph({ children }) {
    const animationStyles = useSpring({
        config: {duration: 1000},
        from: { color:"#212529"},
        to: colors,
        loop: true,
      });
  return (
    <animated.p style={animationStyles}>{children}</animated.p>
  )
}

export default ChameleonParagraph