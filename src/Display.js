import React from "react";
import { WordState } from "./Context";

const Display = () => {
  const { state, dispatch } = WordState();
  return (
    <div>
      {state.entered.map((letter, index) => {
        let wordColor = "";
        if (state.rightAns.includes(letter)) {
          state.rightAns[index] === letter
            ? (wordColor = "green")
            : (wordColor = "salmon");
        } else {
          wordColor = "red";
        }
        return <h1 className={wordColor}>{letter}</h1>;
      })}
    </div>
  );
};

export default Display;
