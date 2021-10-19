import React from "react";
import { colorArr } from "../data/colorArray";

const RainbowSpans = ({ word }) => {
  function createCharArray(str) {
    let arr = [];
    for (var i = 0; i < str.length; i++) {
      arr.push(str.charAt(i));
    }
    //Wconsole.log(arr);
    return arr;
  }

  const wordArray = createCharArray(word);
  console.log(wordArray);
  return (
    <div>
      {wordArray.map((letter, index) => (
        <span
          key={index}
          style={{
            color: colorArr[index % 4],
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
