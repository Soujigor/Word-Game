import "./App.css";
import Display from "./Display";
import { useState, useEffect } from "react";
import UserInput from "./UserInput";
import { WordState } from "./Context";
import WrongLetters from "./WrongLetters";
import WordDefinition from "./WordDefinition";

function App() {
  const { state, dispatch } = WordState();
  const [word, setWord] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://random-word-api.herokuapp.com/all");
      const data = await response.json();

      const fiveLengthWords = data.filter((word) => word.length === 5);
      dispatch({ type: "LOADING", value: fiveLengthWords[169].split("") });
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchDefinition(word) {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      console.log(data);
      const wordDef = await data.map((word) => {
        return {
          name: word.word,
          meaning: word.meanings[0].definitions[0]?.definition,
          example: word.meanings[0].definitions[0]?.example,
          synonyms: true,
        };
      });

      setWord(wordDef);
    }

    if (state.rightAns.length !== 0) {
      fetchDefinition(state.rightAns.join(""));
    }
  }, [state]);

  console.log(state.rightAns);

  return (
    <div>
      <Display />
      <UserInput />
      {!state.isPlaying && <WordDefinition word={word} />}
      <WrongLetters />
    </div>
  );
}

export default App;
