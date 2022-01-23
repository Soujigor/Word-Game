import React from "react";
import { WordState } from "./Context";

const WrongLetters = () => {
  const { state } = WordState();
  return (
    <div>
      {state.wrongLetters.map((letter, index) => (
        <h2 key={index}>{letter}</h2>
      ))}
    </div>
  );
};

export default WrongLetters;
