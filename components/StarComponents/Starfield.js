import React from "react";
import EightBitStar from "./EightBitStar";
import { colorArr } from "../../data/colorArray";
import { useTrail, animated } from "react-spring";

const Starfield = () => {
  const trailSprings = useTrail(colorArr.length, {});

  return (
    <div>
      {trailSprings.map((spring, i) => {
        return <EightBitStar bgColor={colorArr[i]} key={i} delay={i} />;
      })}
    </div>
  );
};

export default Starfield;
