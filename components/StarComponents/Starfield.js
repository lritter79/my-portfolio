import React from "react";
import EightBitStar from "./EightBitStar";
import { colorArr } from "../../data/colorArray";
import { useTrail, animated } from "react-spring";
import { useState } from "react";


const Starfield = () => {

  function createStarArray() {
    let starArr = [];
    for (let i = 0; i < 50; i++) {
      const star = {color: `rgb(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)})`, xPosition: (((i % 25) * 4) + 5), yPosition:(Math.random() * 100), isFlashing:(Math.floor((Math.random() * 2)) == 1)}
      starArr.push(star);
    }

    return starArr;
  }

  const starArray = createStarArray();

  return (
    <>
      {starArray.map((star, i) => {
        return <EightBitStar star={star} key={i} />;
      })}
    </>
  );
};

export default Starfield;
