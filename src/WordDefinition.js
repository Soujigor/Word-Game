import React from "react";
import { WordState } from "./Context";

const WordDefinition = (props) => {
  const { state, dispatch } = WordState();

  return (
    <div>
      <h1>{props.word[0]?.name} </h1>
      <h2>{props.word[0]?.meaning} </h2>
      <h2>{props.word[0]?.example} </h2>
      <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
    </div>
  );
};

export default WordDefinition;
