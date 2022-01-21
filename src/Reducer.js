export const wordReducer = (state, action) => {
  if (action.type === "SUBMIT") {
    const newWrongLetters = state.entered.filter(
      (letter) =>
        !state.rightAns.includes(letter) && !state.wrongLetters.includes(letter)
    );
    return {
      ...state,
      entered: action.value,
      wrongLetters: [...state.wrongLetters, ...newWrongLetters],
    };
  }
  if (action.type === "LOADING") {
    return { ...state, rightAns: action.value };
  }
  if (action.type === 'BOOB') {
      return state
  }
};
