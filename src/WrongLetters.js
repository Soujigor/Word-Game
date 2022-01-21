import React from "react";
import { WordState } from "./Context";

const WrongLetters = () => {
  const { state } = WordState();
  return (
    <div>
      {state.wrongLetters.map((letter) => (
        <h2>{letter}</h2>
      ))}
    </div>
  );
};

export default WrongLetters;
