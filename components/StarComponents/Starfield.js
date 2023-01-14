import React from "react";
import EightBitStar from "./EightBitStar";
import { colorArr } from "../../data/colorArray";
import { useTrail, animated } from "react-spring";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function createStarArray() {
  let starArr = [];
  for (let i = 0; i < 100; i++) {
    const star = {
      color: `hsl(${Math.random() * 360},100%,50%)`,
      xPosition: (i % 37) * 4,
      isFlashing: Math.floor(Math.random() * 2) == 1,
      id: uuidv4(),
    };
    starArr.push(star);
  }

  return starArr;
}

const starArray = createStarArray();

const Starfield = ({ isInverted }) => {
  return (
    <>
      {starArray.map((star, i) => {
        return (
          <EightBitStar isInverted={isInverted} star={star} key={star.id} />
        );
      })}
    </>
  );
};

export default Starfield;
