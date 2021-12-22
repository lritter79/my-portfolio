import React from "react";
import EightBitStar from "./EightBitStar";
import { colorArr } from "../../data/colorArray";
import { useTrail, animated } from "react-spring";
import { useState } from "react";


const Starfield = () => {

  function createStarArray() {
    let starArr = [];
    for (let i = 1; i < 20; i++) {
      const star = {color: 'green', xPosition: (i * 5), yPosition:(Math.random() * 100), isFlashing:((Math.random()) * 2 == 1)}
      starArr.push(star);
    }

    return starArr;
  }

  const starArray = createStarArray();

  return (
    <>
      {starArray.map((star, i) => {
        return <EightBitStar bgColor={star.color} key={i} delay={i} />;
      })}
    </>
  );
};

export default Starfield;
