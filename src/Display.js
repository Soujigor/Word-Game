import React from "react";
import { WordState } from "./Context";
import "./Display.css";

const Display = () => {
  const { state } = WordState();
  return (
    <div className="display-container">
      {state.entered.map((obj) => (
        <div className="letters-container">
          {obj.letters.map((letter, index) => {
            let wordColor = "";
            if (state.rightAns.includes(letter)) {
              state.rightAns[index] === letter
                ? (wordColor = "green")
                : (wordColor = "salmon");
            } else {
              wordColor = "red";
            }
            return (
              <h1 className="letter" className={wordColor}>
                {letter}
              </h1>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Display;

// (
//   <div className="display-container">
//     {state.entered.map((letter, index) => {
//       let wordColor = "";
//       if (state.rightAns.includes(letter)) {
//         state.rightAns[index] === letter
//           ? (wordColor = "green")
//           : (wordColor = "salmon");
//       } else {
//         wordColor = "red";
//       }
//       return <h1 className={wordColor}>{letter}</h1>;
//     })}
//   </div>
// );
