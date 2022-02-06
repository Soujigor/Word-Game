import React, { useState } from "react";
import { WordState } from "./Context";
import "./WordDefinition.css";

const WordDefinition = (props) => {
  const { state, dispatch } = WordState();
  const [foo, setFoo] = useState(false);
  return (
    <div className="word-def-container">
      <h1
        className="right-ans"
        onMouseEnter={() => setFoo(true)}
        onMouseLeave={() => setFoo(false)}
      >
        {state.rightAns.join("")}
      </h1>
      {foo && <h1>deu certo, otário</h1>}
      {props.word.map((wordDef) => (
        <div>
          <h1>{wordDef.fl}</h1>
          <div
            className="synonyms"
            onMouseEnter={() => setFoo(true)}
            onMouseLeave={() => setFoo(false)}
          >
            Synonyms:
            {foo && wordDef.meta.syns[0].map((syn) => <h4>{syn}</h4>)}
          </div>
          <div className="shortDef">
            Short Definition:
            {wordDef.shortdef.map((shortdef) => (
              <h5>{shortdef}</h5>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordDefinition;
