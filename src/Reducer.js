import { WORDS } from "./Constant";
export const wordReducer = (state, action) => {
  if (action.type === "SUBMIT") {
    const newWrongLetters = action.value.filter(
      (letter) =>
        !state.rightAns.includes(letter) && !state.wrongLetters.includes(letter)
    );
    return {
      ...state,
      entered: [...state.entered, { letters: action.value }],
      wrongLetters: [...state.wrongLetters, ...newWrongLetters],
      isPlaying:
        state.rightAns.length > 0
          ? !state.rightAns.every(
              (value, index) => value === action.value[index]
            )
          : true,
    };
  }
  if (action.type === "LOADING") {
    return { ...state, rightAns: action.value };
  }

  if (action.type === "NEXT") {
    return {
      isPlaying: true,
      entered: [],
      rightAns: WORDS[Math.floor(Math.random() * (2315 + 1))].split(""),
      wrongLetters: [],
    };
  }
};
