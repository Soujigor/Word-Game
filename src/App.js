import "./App.css";
import Display from "./Display";
import UserInput from "./UserInput";
import Header from "./Header";
import WrongLetters from "./WrongLetters";
import WordDefinition from "./WordDefinition";

import { WordState } from "./Context";
import { WORDS, API_KEY } from "./Constant";

import { useState, useEffect } from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";

function App() {
  const { state, dispatch } = WordState();
  const [wordDef, setWordDef] = useState([]);

  const randomWord = WORDS[Math.floor(Math.random() * (2315 + 1))];

  useEffect(() => {
    dispatch({ type: "LOADING", value: randomWord.split("") });
  }, []);

  useEffect(() => {
    async function fetchDef(word) {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setWordDef(data);
    }
    fetchDef(state.rightAns.join(""));
  }, [state]);

  console.log(state.rightAns);

  return (
    <Box
      minH="calc(100vh - 100px)"
      bgGradient="linear(to-r, #5ac994, #c0f7b7, #124143)"
    >
      {/* <Grid templateColumns="1fr, 5fr, 1fr" gap={4}>
        <GridItem area="1">
          <Header />
        </GridItem>
        <GridItem>
          <Display />
        </GridItem>
        <UserInput />
        {!state.isPlaying && <WordDefinition word={wordDef} />}
        <WrongLetters />
      </Grid> */}

      <Grid
        templateColumns="1fr 3fr 1fr"
        templateRows="75px 550px 100px"
        gap={4}
      >
        <GridItem colStart={1} colEnd={4}>
          <Header />
        </GridItem>
        <GridItem bg="red.100" colStart={1} colEnd={2}>
          <Box>SideBar 1</Box>
        </GridItem>
        <GridItem
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          colStart={2}
          colEnd={3}
        >
          <Display />
          <UserInput />
        </GridItem>
        <GridItem bg="red.100">
          <WrongLetters />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
