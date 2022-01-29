import React, { useState, useEffect } from "react";
import { WordState } from "./Context";

const UserInput = () => {
  const { state, dispatch } = WordState();
  const [input, setInput] = useState("");
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "SUBMIT", value: input.split("") });
    setInput("");
    console.log(state.entered);
  };

  useEffect(() => {
    if (input.length === 5) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [input]);

  return (
    <form onSubmit={submitFormHandler}>
      <input maxLength={5} value={input} onChange={inputChangeHandler}></input>
      <button disabled={buttonIsDisabled}>Test</button>
    </form>
  );
};

export default UserInput;
