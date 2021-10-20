import React from "react";
import { colorArr } from "../data/colorArray";

import { useState, useEffect } from "react";

const RainbowSpans = ({ word }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    console.log("rendering");
    const timer = setInterval(incrementColorIndex, 500);
    // clearing interval
    return () => clearInterval(timer);
  });

  function incrementColorIndex() {
    console.log(colorIndex);
    if (isHovering) {
      setColorIndex((prev) => (prev > 3 ? 0 : prev + 1));
    }
  }

  function createCharArray(str) {
    let arr = [];
    for (var i = 0; i < str.length; i++) {
      arr.push(str.charAt(i));
    }
    //Wconsole.log(arr);
    return arr;
  }

  const wordArray = createCharArray(word);
  //console.log(wordArray);
  return (
    <div
      style={{ wordBreak: "break-all", fontSize: "1.1rem" }}
      onMouseEnter={(e) => setIsHovering(true)}
      onMouseLeave={(e) => setIsHovering(false)}
    >
      {wordArray.map((letter, index) => (
        <span
          key={index}
          style={{
            color: colorArr[(index + colorIndex) % 4],
            fontFamily: '"Press Start 2P", sans-serif',
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default RainbowSpans;
