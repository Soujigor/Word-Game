import React from "react";
import { wordReducer } from "./Reducer";

const WordDefinition = (props) => {
  return (
    <div>
      <h1>{props.word[0]?.name} </h1>
      <h2>{props.word[0]?.meaning} </h2>
      <h2>{props.word[0]?.example} </h2>
    </div>
  );
};

export default WordDefinition;
