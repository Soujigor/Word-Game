import "./App.css";
import Display from "./Display";
import { useState, useEffect } from "react";
import UserInput from "./UserInput";
import { WordState } from "./Context";
import WrongLetters from "./WrongLetters";

function App() {
  const { state, dispatch } = WordState();
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://random-word-api.herokuapp.com/all");
      const data = await response.json();

      const fiveLengthWords = data.filter((word) => word.length === 5);
      dispatch({ type: "LOADING", value: fiveLengthWords[847].split("") });
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: "BOOB" });
  }, [state]);

  return (
    <div>
      <Display />
      <UserInput />
      <WrongLetters />
    </div>
  );
}

export default App;
