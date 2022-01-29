import { createContext, useContext, useReducer } from "react";
import { wordReducer } from "./Reducer";

const Word = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(wordReducer, {
    isPlaying: true,
    entered: [],
    rightAns: [],
    wrongLetters: [],
  });
  return <Word.Provider value={{ state, dispatch }}>{children} </Word.Provider>;
};

export const WordState = () => {
  return useContext(Word);
};

export default Context;
