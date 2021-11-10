import React from "react";
import EightBitStar from "./EightBitStar";
import { colorArr } from "../../data/colorArray";
import { useTrail, animated } from "react-spring";

const Starfield = () => {
  const trailSprings = useTrail(colorArr.length, {});

  return (
    <>
      {trailSprings.map((spring, i) => {
        return <EightBitStar bgColor={colorArr[i]} key={i} delay={i} />;
      })}
    </>
  );
};

export default Starfield;
