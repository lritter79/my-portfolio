import React from "react";
import EightBitStar from "./EightBitStar";
import { colorArr } from "../../data/colorArray";
const Starfield = () => {
  return (
    <>
      {colorArr.map((color, i) => {
        return <EightBitStar bgColor={color} leftvw={i * 25} key={i} />;
      })}
    </>
  );
};

export default Starfield;
