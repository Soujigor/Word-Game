import React, { useState, useEffect } from "react";
import { WordState } from "./Context";
import { FormControl, Input, Button } from "@chakra-ui/react";

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
    <FormControl>
      <Input maxLength={5} value={input} onChange={inputChangeHandler}></Input>
      <Button
        bg="#124143"
        onClick={submitFormHandler}
        disabled={buttonIsDisabled}
      >
        Test
      </Button>
    </FormControl>
  );
};

export default UserInput;
