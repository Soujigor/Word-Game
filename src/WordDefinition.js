import React from "react";
import { WordState } from "./Context";
import "./WordDefinition.css";

const WordDefinition = (props) => {
  const { state, dispatch } = WordState();
  return (
    <div>
      <h1>{state.rightAns.join("")}</h1>
      {props.word.map((wordDef) => (
        <div>
          <h1>{wordDef.fl}</h1>
          <div className="synonyms">
            Synonyms:
            {wordDef.meta.syns[0].map((syn) => (
              <h4>{syn}</h4>
            ))}
          </div>
          <div className="shortDef">
            Short Definition:
            {wordDef.shortdef.map((shortdef) => (
              <h5>{shortdef}</h5>
            ))}
          </div>
        </div>
      ))}
      <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
    </div>
  );
};

export default WordDefinition;
