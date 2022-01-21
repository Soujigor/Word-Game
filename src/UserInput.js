import React, { useState } from "react";
import { WordState } from "./Context";

const UserInput = () => {
  const { state, dispatch } = WordState();
  const [input, setInput] = useState("");
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "SUBMIT", value: input.split("") });
    setInput("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input value={input} onChange={inputChangeHandler}></input>
      <button>Test</button>
    </form>
  );
};

export default UserInput;
